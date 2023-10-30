var express = require('express');
var router = express.Router();

const productsControllers = require("../controllers/productsControllers") 

/* GET home page. */
router.get('/agregarPost',productsControllers.agregarPost);
router.post('/agregarPost',productsControllers.procesarAgregarPost);

router.get('/detallePost/:id',productsControllers.detallePost);
router.post('/detallePost/:id',productsControllers.procesarDetallePost);

module.exports = router;
