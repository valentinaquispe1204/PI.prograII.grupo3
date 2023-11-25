// requerimos los modelos ya creados
const grama = require("../database/models");
const posteos = grama.Posteos
const bcrypt = require('bcryptjs');

const productsControllers = {
  agregarPost: function (req, res, next) {
    return res.render('agregarPost')
  },
  //  procesar el metodo POST de agregarPost
  procesarAgregarPost: function (req, res) {

  
    let data = {
      nombreImagen: req.body.cover,
      piePost: req.body.description,
      idUsuario: req.session.user.id,
    }
       posteos.create(data)

      .then((resultados) => {
        return res.redirect("/");
      })
      .catch(function (error) {
        return res.send(error)
      });

  },

  // borrarPost: function (req, res) {
  //   let id = Number(req.params.id);
  //   let criterio = {
  //     where: [{ id_posteo: id }]
  //   }
  //   datos.Posteo.destroy(criterio)
  //     .then(function (result) {                                      //si no hacemos esto borrarlo
  //       return res.redirect('/')
  //     })
  //     .catch(function (error) {
  //       res.send(error)
  //     })
  // 

  detallePost: function (req, res, next) {
    
    let id = req.params.id
    let relacion = {
      include: [
        {association: "usersP"},
        {association: "comentariosP", include: [{ association: "usersC" }]}
    ]
  };
  posteos.findByPk(id, relacion)
    .then(function(resultadosDetalleP) {
      // return res.send(resultadosDetalleP)
      return res.render('detallePost', { grama: resultadosDetalleP })
    })
    .catch(function (error) {
      return res.send(error)
    })
  },

  //para procesar metodo POST de detallePost
  procesarDetallePost: function (req, res, next) {
    if (req.session.user == undefined) {
      return res.redirect('/login')
    } else {
      let coment = req.body.comment;
      let posteoId = req.params.id;
      let data = {
        textoComentario : coment,
        idPosteo : posteoId,
        idUsuario : req.session.user.id,
      } 
      grama.Comentarios.create(data)
    
      .then(function (result) {
        
        return res.redirect('/products/detallePost/'+ posteoId);
      })
      .catch(function (error) {
        res.send(error)
      })
    }}
  }
   

    
    
    
   
  


  


module.exports = productsControllers;

