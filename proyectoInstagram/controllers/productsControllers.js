var db = require("../db/data")
const productsControllers = { 
    agregarPost : function(req, res, next) {
        
    res.render('agregarPost', { grama: db }); 

      },
    detallePost : function(req, res, next) {
        let id = Number(req.params.id);  
      
        let posteo = {}; 
        let posteos = db.posteos 
        for (let i = 0; i < posteos.length; i++) { 
          console.log(posteos[i].idPosteo)
          if (posteos[i].idPosteo == id) {
            return res.render('detallePost', {grama: posteos[i]}) 
  
          }
        }
     
    }
}

module.exports = productsControllers;