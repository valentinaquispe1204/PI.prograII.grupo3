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
    let pass = req.body.password;
    let rememberme = req.body.rememberme;
    // let errores = {};
    let criterio = {
      where: [{ email: emailBuscado }]
    };

        grama.Users.findOne(criterio)
            .then((result) => {
              
                if (result != null) {
                    let claveCorrecta = bcrypt.compareSync(result.pass, pass) //PORQUEEEEEEE ME DA FALSEEEEEE
                    // return res.send(claveCorrecta)

                    if (claveCorrecta) {
                        req.session.user = {
                            id: result.idUsuario,
                            arroba: result.arroba,
                            email: result.email,
                            fotoPerfil: result.fotoDePerfil,
                        }
                        
                        if (req.body.rememberme != undefined) {
                            res.cookie('idUsuario', result.idUsuario, { maxAge: 1000 * 60 * 15 })
                        }
                        return res.redirect("/");
                    } else {
                        return res.send("Existe el usuario  pero la password es incorrecta");
                    }
                } else {
                    return res.send("El usuario es invalido")
                 }

            }).catch((err) => {
                console.log(err);
            });

    },

    
  logout: (req, res) => {
      req.session.destroy();// Eliminar la sesión del usuario y redireccionar a la página de inicio de sesión
      res.clearCookie('idUsuario');
      res.redirect('/');
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
          res.render('miPerfil', { grama: result});
          let check = bcrypt.compareSync(pass, result.pass) //devuekve un bool

        } else {
          return res.redirect("/")
        }

      }).catch((err) => {
        return console.log(err);
      });

  },
  registracion: function (req, res) {
    if (req.session.user != undefined) {
      return res.redirect("/")
  } else {
      return res.render('registracion')
  }
  },

  //para procesar metodo POST de registracion
  procesarRegistracion: function (req, res) {
    let data = {
      arroba: req.body.username,
      pass: bcrypt.hashSync(req.body.password),
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
        return res.send(error);
      });
  }
}

module.exports = userControllers;