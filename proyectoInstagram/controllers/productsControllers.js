var db = require("../db/data")
const productsControllers = {
    agregarPost : function(req, res, next) {
        res.render('agregarPost', { grama: db });
      },
    detallePost : function(req, res, next) {
        let id = Number(req.params.id);  /* pasa a numero el texto de id que viene como parametro en la ruta */
        let posteo = {}; /* un objeto vacio */
        let posteos = db.posteos
        for (let i = 0; i < posteos.length; i++) { /* iterar un array para no tener que iterar en el ejs */
          console.log(posteos[i].idPosteo)
          if (posteos[i].idPosteo == id) { /* si el id que recibo como parametro es igual al idPosteo del array, solo guardo el que necesito */
            posteo == posteos[i]
            // console.log(posteos[i]) 
            // res.send(posteos[i]) /* lo usamos para no tener que iterar en el ejs */
            return res.render('detallePost', {grama: posteos[i]}) /* envia el dato */
          }
        }
        // res.send({posteo, id, data: posteos})
      // res.render('detallePost', { grama: db });
      return res.send("no hay datos de este detalle") /* por si se ingresa un numero en la ruta que no esta en el objeto */
    }
}

module.exports = productsControllers;