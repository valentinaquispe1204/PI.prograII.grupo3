const grama = require("../database/models");
const bcrypt = require('bcryptjs'); //requiero el modulo instalado para hashing USARLOOOOOOOO



const userControllers = {
  detalleUsuario: function (req, res, next) {
    let idPerfil = req.params.id;
    let posteosPerfil = [];
    for (let i = 0; i < grama.posteos.length; i++) {
      if (idPerfil == grama.posteos[i].arroba) {
        posteosPerfil.push(grama.posteos[i])
      }
    }
    return res.render('detalleUsuario', { grama: grama, posteosPerfil: posteosPerfil });
  },

  editarPerfil: function (req, res, next) {
    return res.render('editarPerfil', { grama: grama });
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
    return res.render('login', { grama: grama });
  },

  //para procesar metodo POST de login
  procesarLogin: function (req,res) { 
    let data = {
      arroba: req.body.username,
      pass: req.body.password,
      rememberme: req.body.rememberme
    }
    return res.send(data)
  },

  miPerfil: function (req, res, next) {
    return res.render('miPerfil', { grama: grama });
  }, 

  registracion: function (req, res, next) {
    return res.render('registracion');
  },
  //para procesar metodo POST de registracion
  procesarRegistracion:function (req,res) { 
    let data = {
      arroba: req.body.username,
      pass: req.body.password,
      fotoDePerfil: req.body.img,
      fecha: req.body.date,
      dni: req.body.dni,
      email: req.body.email
    }

    return res.send(data)
}}

module.exports = userControllers;