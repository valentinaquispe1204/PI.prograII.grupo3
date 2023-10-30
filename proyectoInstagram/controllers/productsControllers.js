// requerimos los modelos ya creados
const grama = require("../database/models");
const posteos = grama.Posteos
const bcrypt = require('bcryptjs');

const productsControllers = {
  agregarPost: function (req, res, next) {
    return res.render('agregarPost')
  },
// para procesar el metodo POST de agregarPost
  procesarForm: function (req, res) {

    let data = {
      nombreImagen: req.body.cover,
      piePost: req.body.description,
      idUsuario: 1 // despues cambiarlo x el usuario que esta loggeado
    }
    // para procesar el metodo POST
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
    posteos.findByPk(id)
      .then((resultadosDetalleP) => {
        return res.render('detallePost', { grama: resultadosDetalleP })
      })
      .catch(function (error) {
        return res.send(error)
      });
  }
}

module.exports = productsControllers;