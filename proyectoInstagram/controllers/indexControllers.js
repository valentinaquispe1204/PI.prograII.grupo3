// requerimos los modelos ya creados
const grama = require("../database/models");
const posteos = grama.Posteos
const op = grama.Sequelize.Op // requerimos los operadores de sequelize

const controlador = {
  index: function (req, res, next) {
   
    posteos.findAll({
      include:[
        {association: "usersP"},
        {association:"comentariosP", include: [{association: "usersC"}]}
      ],
      // order: ["updatedAt", "DESC"] //chequear si funciona
    })
      .then((resultados) => {

        return res.render('index', { grama: resultados });
      }).catch(function(error) {
        return res.send(error)
      });
  },

  resultadoBusqueda: function (req, res, next) {       
    const datosABuscar =  req.query.busqueda;
    // res.send(datosABuscar)

    posteos.findAll({
      where: [
        {piePost: {[op.like]: "%" + datosABuscar + "%" }}
      ], 
      order: [
        ["piePost", "ASC"]
      ],
      include: {
        all: true,
        nested: true
      }
      
    }).then(function(datosEncontrados) {
      // return res.send(datosEncontrados)
      if (datosEncontrados == 0) {
        
        return res.render('resultadoBusqueda', { grama: datosEncontrados })
      } else {
        
        return res.render('resultadoBusqueda', { grama: datosEncontrados })

      }
      
    }).catch(function(error) {
      return res.send(error)
    });
  },
}





module.exports = controlador; 