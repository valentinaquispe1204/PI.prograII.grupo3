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
    posteos.findAll({
      where: [
        {piePost: {[op.like]: `%${datosABuscar}%`}}
      ], 
      include: {
        all: true,
        nested: true
      },
      order: [
        ["piePost", "DESC"]
      ],
      limit: 10,
    }).then(function(datosEncontrados) {
      return res.send(datosEncontrados)
      return res.render('resultadoBusqueda', { grama: datosEncontrados })
    }).catch(function(error) {
      return res.send(error)
    });


    //para buscar un usuario
    let usuarioABuscar = req.query.busqueda;´

    
  },
}





module.exports = controlador; 