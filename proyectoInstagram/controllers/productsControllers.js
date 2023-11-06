// requerimos los modelos ya creados
const grama = require("../database/models");
const posteos = grama.Posteos
const bcrypt = require('bcryptjs');

const productsControllers = {
  agregarPost: function (req, res, next) {
    return res.render('agregarPost')
  },
//  procesar el metodo POST de agregarPost
procesarAgregarPost: function (req, res) {

    let data = {
      nombreImagen: req.body.cover,
      piePost: req.body.description,
      idUsuario: 1 // despues cambiarlo x el usuario que esta loggeado
    }

    posteos.create(data)
      .then((resultados) => {

        return res.redirect("/");
      })
      .catch(function (error) {
        return res.send(error)
      });
  },


  detallePost: function (req, res, next) {
    let id = req.params.id
    let relacion = {
      include: [
        {association: "usersP"}
      ]
    };
    posteos.findByPk(id, relacion)
      .then((resultadosDetalleP) => {
        // return res.send(resultadosDetalleP)
        return res.render('detallePost', { grama: resultadosDetalleP })
      })
      .catch(function (error) {
        return res.send(error)
      });
  },
//para procesar metodo POST de detallePost
  procesarDetallePost: function (req, res) {
    let data = {
      textoComentario: req.body.comment,
      idPosteo: 1,
      idUsuario: 1 // despues cambiarlo x el usuario que esta loggeado
    }
},

}

module.exports = productsControllers;