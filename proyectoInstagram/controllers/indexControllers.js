const grama = require("../database/models"); 
const controlador = { 
  index: function (req, res, next) { 
    res.render('index', { grama: db.posteos });
  },
  resultadoBusqueda: function (req, res, next) {                                         
    res.render('resultadoBusqueda', { grama: db.posteos })
  },
}

module.exports = controlador;