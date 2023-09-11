var db = require("../db/data")

const controlador ={
    index :  function(req, res, next) {
        res.render('index', { title: 'Express' });
      }, 
    resultadoBusqueda :  function(req, res, next) {
        res.render('resultadoBusqueda', { title: 'Express' });
      },   
}

module.exports = controlador;