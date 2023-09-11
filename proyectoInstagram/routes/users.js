var express = require('express');
var router = express.Router();
/*const y lo que pongamos en el db */
const userControllers = require("../controllers/usersControllers")

/* GET users listing. */
router.get('/detalleUsuario', userControllers.detalleUsuario);
router.get('/editarPerfil', userControllers.editarPerfil);
router.get('/login', userControllers.login);
router.get('/miPerfil', userControllers.miPerfil);
router.get('/registracion', userControllers.registracion);

//*mas adelante vamos a usar el metodo post*//

module.exports = router;
