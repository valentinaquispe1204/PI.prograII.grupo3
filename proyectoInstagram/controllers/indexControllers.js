const grama = require("../db/data");
var db = require("../db/data")

const controlador ={
    index :  function(req, res, next) {
      // res.send(db)
        res.render('index', { grama: db.posteos });

      }, 
    resultadoBusqueda :  function(req, res, next) {                                            /**CHEQUEAR PEPITO */
      let search = req.params.search;
      let busqueda = [];
      for (let i = 0; i < grama.length; i++) {
        if (search == grama.posteos[i].arroba) {
          busqueda.push(search);
          res.render('resultadoBusqueda', { grama: posteos[i] , busqueda : busqueda })
        };
      };
      // return res.send("no hay datos de este detalle")
      res.send({busqueda})
      res.render('resultadoBusqueda', { grama: db , busqueda : busqueda })
      },   
}

module.exports = controlador;