var express = require('express');
var router = express.Router();
/*const y lo que pongamos en el db */
const userControllers = require("../controllers/usersControllers")

/* GET users listing. */
router.get('/detalleUsuario/:id', userControllers.detalleUsuario);  /*/.id para encontrar lo que le mandamos */
router.get('/editarPerfil', userControllers.editarPerfil);
router.get('/login', userControllers.login);
router.get('/miPerfil', userControllers.miPerfil);
router.get('/registracion', userControllers.registracion);

//*mas adelante vamos a usar el metodo post*//

module.exports = router;
