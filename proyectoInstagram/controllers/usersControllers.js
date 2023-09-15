const grama = require("../db/data");
var db = require("../db/data")
const userControllers = {
    detalleUsuario : function(req, res, next) {
      let idPerfil = req.params.id;
      let posteosPerfil = [];
      for (let i = 0; i < grama.posteos.length; i++) {
        if (idPerfil == grama.posteos[i].arroba) {
          posteosPerfil.push(grama.posteos[i])
        }        
      }
      // res.send(posteosPerfil)
      res.render('detalleUsuario', { grama :db, posteosPerfil:posteosPerfil });
      },


    editarPerfil : function(req, res, next) {
        res.render('editarPerfil', { grama: db });
      },
    login :  function(req, res, next) {
        res.render('login', { grama: db });
      }, 
    miPerfil :  function(req, res, next) {
             res.render('miPerfil', { grama: db });
      },    
    registracion :  function(req, res, next) {
        res.render('registracion', { grama: db });
      },   
}

module.exports = userControllers;