const productsControllers = {
    agregarPost : function(req, res, next) {
        res.render('agregarPost', { title: 'Express' });
      },
    detallePost : function(req, res, next) {
        res.render('detallePost', { title: 'Express' });
      }
}

module.exports = productsControllers;