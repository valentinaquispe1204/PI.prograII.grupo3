var express = require('express');
var router = express.Router();

const userControllers = require("../controllers/usersControllers")

/*get se encarga de mostrar y post de procesar la informacion son mas seguros y se usan para manipular datos sensibles 
los nombres de las rutas pueden ser iguales y no va a ver  conflicto pq estan usando un metodo diferente*/
router.get('/detalleUsuario/:id', userControllers.detalleUsuario);  
router.post('/detalleUsuario/:id', userControllers.detalleUsuario);  
router.get('/editarPerfil', userControllers.editarPerfil);
router.post('/editarPerfil', userControllers.editarPerfil);
router.get('/login', userControllers.login);
router.post('/login', userControllers.login);
router.get('/miPerfil', userControllers.miPerfil);
router.post('/miPerfil', userControllers.miPerfil);
router.get('/registracion', userControllers.registracion);
router.post('/registracion', userControllers.registracion);



module.exports = router;
