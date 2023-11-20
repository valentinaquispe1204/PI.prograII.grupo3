const grama = require("../database/models");
let usuarios = grama.Users;
const bcrypt = require('bcryptjs'); //requiero el modulo instalado para hashing USARLOOOOOOOO


const userControllers = {
  detalleUsuario: function (req, res, next) {
    let id = req.params.id;
    let relacion = {
      include: [
        { association: "posteosU" } // chequear desp si esta bien
      ]
    }
    usuarios.findByPk(id, relacion)
      .then(function (resultadosDetalleU) {
        // return res.send(resultadosDetalleU)


        return res.render('detalleUsuario', { grama: resultadosDetalleU });
      })
      .catch(function (error) {
        res.send(error)
      })
  },

  editarPerfil: function (req, res) {
    if (req.session.user == undefined) {
      return res.redirect("/")
    } else {
      return res.render('editarPerfil', { grama: grama });
    }
  },

  //para procesar metodo POST de editarPerfil
  procesarPerfil: function (req, res) {
    let data = {
      arroba: req.body.username,
      pass: req.body.password,
      fotoDePerfil: req.body.img,
      fecha: req.body.date,
      dni: req.body.dni,
      email: req.body.email
    }
  },



  login: function (req, res, next) {

    if (req.session.user != undefined) {
      return res.redirect("/")
    } else {
      return res.render('login', { grama: grama });
    }

  },

  //para procesar metodo POST de login
  procesarLogin: function (req, res) {

    let emailBuscado = req.body.username;
    let pass2 = req.body.password;
    let rememberme = req.body.rememberme;
    let errores = {};
    let criterio = {
      where: [{ email: emailBuscado }]
    };

    if (emailBuscado == "") {
      errores.message = "el campo de email esta vacio";
      res.locals.errores;
      return res.render("login");
    } else if (pass2 == "") {
      errores.message = "el campo de contraseña esta vacio";
      res.locals.errores;
      return res.render("login");
    } else {
    grama.Users.findOne(criterio)
      .then((result) => {
        if (result != null) {
          let checkContra = bcrypt.compareSync(pass2, result.pass) //devuekve un bool



          if (checkContra && checkEmail) {
            req.session.usuario = {
              id: result.id,
              arroba: result.arroba,
              email: result.email,
              fotoDePerfil: result.fotoDePerfil,
            }
            if (rememberme != undefined) {
              res.cookie('idUsuario', result.id, { maxAge: 1000 * 60 * 5 })  //nombre, valor, y el tiempo que va a durar la cookie
              return res.redirect("/")
            }
          } else {
            return res.redirect("/users/login")
          }
        } else {
          return res.redirect("/users/login")
        }
      }).catch((err) => {
        return console.log(err);
      });

    return res.redirect("/")
  }
  },


  miPerfil: function (req, res, next) {
    let id = req.params.id
    let relacion = {
      include: [
        {
          association: "posteosU"
        }
      ]
    }

    usuarios.findByPk(id, relacion)
      .then(function (usuario) {

        if (usuario != null) {
          // return res.send(usuario)
          return res.redirect("/miPerfil/id")
          let check = bcrypt.compareSync(pass, result.pass) //devuekve un bool

        } else {
          return res.redirect("/")
        }

      }).catch((err) => {
        return console.log(err);
      });

  },
  registracion: function (req, res) {
    return res.render('registracion');
  },
  //para procesar metodo POST de registracion
  procesarRegistracion: function (req, res) {
    let data = {
      arroba: req.body.username,
      pass: bcrypt.hashSync(req.body.password, 10),
      fotoDePerfil: req.body.img,
      fecha: req.body.date,
      dni: req.body.dni,
      email: req.body.email,
      rememberToken: "false"
    };
    grama.Users.create(data)
      .then((result) => {
        return res.redirect("/users/login");
      }).catch((error) => {
        return console.log(error);
      });
  }
}

module.exports = userControllers;