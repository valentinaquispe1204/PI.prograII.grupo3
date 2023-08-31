var express = require('express');
var router = express.Router();
/*const y lo que pongamos en el db */
const productsControllers = require("../controllers/productsControllers")

/* GET home page. */
router.get('/agregarPost',productsControllers.agregarPost);
router.get('/detallePost',productsControllers.detallePost);

module.exports = router;
