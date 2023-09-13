var db = require("../db/data")

const controlador ={
    index :  function(req, res, next) {
      // res.send(db)
        res.render('index', { grama: db.posteos });

      }, 
    resultadoBusqueda :  function(req, res, next) {
        res.render('resultadoBusqueda', { grama: db });
      },   
}

module.exports = controlador;