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

  resultadoBusqueda: function (req, res) {       
    const datosABuscar =  req.query.busqueda; //trae la query string
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
      // return res.send(datosEncontrados)
      return res.render('resultadoBusqueda', { grama: datosEncontrados })
    }).catch(function(error) {
      return res.send(error)
    });


//buscar un usuario:
      let usuarioABuscar = req.query.busqueda;
      
      grama.Users.findAll({
      where:{
          [op.or]: [
          {nombre: {[op.like]: `%${usuarioABuscar}%` }},
          {email: {[op.like]: `%${usuarioABuscar}%`}},
      ]},
      order:[['createdAt', 'DESC']] ,
      include: {
        all: true,
        nested: true
      }
  })
  .then(function(usuarioBuscado){
      //return res.send(usuarioBuscado)
      return res.render('resultadoBusqueda', {grama: usuarioBuscado})
  })
  .catch(function(error){
    return res.send(error)
  });

  }

}



module.exports = controlador; 