var db = require("../db/data")
const userControllers = {
    detalleUsuario : function(req, res, next) {
        res.render('detalleUsuario', { grama: db });
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