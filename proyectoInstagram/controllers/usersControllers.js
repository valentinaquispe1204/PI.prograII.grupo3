const grama = require("../database/models"); 

const bcrypt = require('bcryptjs'); //requiero el modulo instalado para hashing



const userControllers = { 
    detalleUsuario : function(req, res, next) {
      let idPerfil = req.params.id;
      let posteosPerfil = [];
      for (let i = 0; i < grama.posteos.length; i++) {
        if (idPerfil == grama.posteos[i].arroba) {
          posteosPerfil.push(grama.posteos[i])
        }        
      }
      
      return res.render('detalleUsuario', { grama: grama, posteosPerfil:posteosPerfil });
      },


    editarPerfil : function(req, res, next) {
        return res.render('editarPerfil', { grama: grama });
      },
    login :  function(req, res, next) {
      return res.render('login', { grama: grama });
      }, 
    miPerfil :  function(req, res, next) {
      return res.render('miPerfil', { grama: grama });
      },    
    registracion :  function(req, res, next) {
      return res.render('registracion', { grama: grama });
      },   
}

module.exports = userControllers;