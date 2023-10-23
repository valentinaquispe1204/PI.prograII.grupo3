var express = require('express');
var router = express.Router();

const productsControllers = require("../controllers/productsControllers") 

/* GET home page. */
router.get('/agregarPost',productsControllers.agregarPost);
router.post('/agregarPost',productsControllers.procesarForm);
router.get('/detallePost/:id',productsControllers.detallePost);

module.exports = router;
