var express = require('express');
var router = express.Router();

const userControllers = require("../controllers/usersControllers")

/* GET se encarga de mostrar y POST de procesar la informacion son mas seguros y se usan para manipular datos sensibles 
los nombres de las rutas pueden ser iguales y no va a ver  conflicto pq estan usando un metodo diferente */

router.get('/detalleUsuario/:id', userControllers.detalleUsuario); //no tiene form asi que no hay ruta post?

router.get('/editarPerfil', userControllers.editarPerfil);
router.post('/editarPerfil', userControllers.procesarPerfil);

router.get('/login', userControllers.login);
router.post('/login', userControllers.procesarLogin); 

router.get('/miPerfil', userControllers.miPerfil); //no tiene form asi que no hay ruta post?

router.get('/registracion', userControllers.registracion);
router.post('/registracion', userControllers.procesarRegistracion);



module.exports = router;
