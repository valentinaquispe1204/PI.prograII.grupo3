var express = require('express');
var router = express.Router();

const productsControllers = require("../controllers/productsControllers") //creo una variable llamda products controllers y tengo un operador de asignacion igual. Luego tengo  require que es una funcion nativa y adentro como parametro una ruta relativa, en la cual requiero el modulo en este caso productsControllers

/* GET home page. */
router.get('/agregarPost',productsControllers.agregarPost);
router.get('/detallePost/:id',productsControllers.detallePost);

module.exports = router;
