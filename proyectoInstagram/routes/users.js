var express = require('express');
var router = express.Router();

const userControllers = require("../controllers/usersControllers")

/* GET users listing. */
router.get('/detalleUsuario/:id', userControllers.detalleUsuario);  
router.get('/editarPerfil', userControllers.editarPerfil);
router.get('/login', userControllers.login);
router.get('/miPerfil', userControllers.miPerfil);
router.get('/registracion', userControllers.registracion);



module.exports = router;
