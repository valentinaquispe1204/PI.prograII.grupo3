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

  editarPerfil: (req, res) => {
    let id = Number(req.params.id);
        usuarios.findByPk(id)
          .then(function (result) {
            res.render("editarPerfil", { usuarios: result })
          })
          .catch(function (error) {
            res.send(error)
          })
  },
  procesarPerfil: function (req, res) {
    let id = Number(req.params.id);
    let data = req.body;
    let criterio = {
      where: [{
        id: id
      }]
    };
    let actualizacion= {
      arroba: data.username,
      pass : bcrypt.hashSync(data.password, 10),
      fotoDePerfil: data.img,
      fecha: data.date,
      dni: data.dni,
      email: data.email,
      createdAt: new Date(),
    }
    usuarios.update(actualizacion, criterio)
    .then(function (result) {
      return res.redirect("/users/miPerfil/"+ id)
    })
    .catch(function (error) {
      res.send(error)
    })
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
  let criterio = {
    where: [{ email: emailBuscado }]
  };

  grama.Users.findOne(criterio)
    .then((result) => {

      if (result != null) {
        let claveCorrecta = bcrypt.compareSync(pass2, result.pass)

        if (claveCorrecta) {
          req.session.user = {
            id: result.idUsuario,
            arroba: result.arroba,
            email: result.email
          }

          if (req.body.rememberme != undefined) {
            res.cookie('usuarioId', result.idUsuario, { maxAge: 1000 * 60 * 15 })
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
  res.clearCookie('usuarioId');
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
        // return res.send(usuario)

        if (usuario != null) {

          res.render('miPerfil', { grama: usuario });
          // let check = bcrypt.compareSync(pass, result.pass) //devuekve un bool

        } else {
          return res.redirect("/")
        }

      }).catch((err) => {
        return console.log(err);
      });

  },

registracion: function (req, res) {
  return res.render('registracion')
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
    rememberToken: "false",
    
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