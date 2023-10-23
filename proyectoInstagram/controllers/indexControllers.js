// requerimos los modelos ya creados
const grama = require("../database/models");
const posteos = grama.Posteos
const op = grama.Sequelize.Op

const controlador = {
  index: function (req, res, next) {
    posteos.findAll()
      .then((resultados) => {
        return res.render('index', { grama: resultados });
     
      }).catch(function(error) {
        return res.send(error)
      });
  },
  resultadoBusqueda: function (req, res, next) {       
    const datosABuscar =  req.query.busqueda;
    posteos.findAll({
      where: [
        {piePost: {[op.like]: `%${datosABuscar}%`}}
      ], 
      order: [
        ["piePost", "ASC"]
      ],
      limit: 10
// si sobra tiempo, agregar busqueda tb para perfiles de usuarios asi queda mas cool je
    }).then(function(datosEncontrados) {
      return res.render('resultadoBusqueda', { grama: datosEncontrados })

    }).catch(function(error) {
      return res.send(error)
    });

  },
}









/* 
const controlador = { 
  index: function (req, res, next) { 
    res.render('index', { grama: grama.posteos });
  },
  resultadoBusqueda: function (req, res, next) {                                         
    res.render('resultadoBusqueda', { grama: grama.posteos })
  },
}
*/
module.exports = controlador; 