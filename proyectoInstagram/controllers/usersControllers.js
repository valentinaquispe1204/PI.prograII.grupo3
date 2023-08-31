const userControllers = {
    detalleUsuario : function(req, res, next) {
        res.render('detalleUsuario', { title: 'Express' });
      },
    editarPerfil : function(req, res, next) {
        res.render('editarPerfil', { title: 'Express' });
      },
    login :  function(req, res, next) {
        res.render('login', { title: 'Express' });
      }, 
    miPerfil :  function(req, res, next) {
        res.render('miPerfil', { title: 'Express' });
      },    
    registracion :  function(req, res, next) {
        res.render('registracion', { title: 'Express' });
      },   
}

module.exports = userControllers;