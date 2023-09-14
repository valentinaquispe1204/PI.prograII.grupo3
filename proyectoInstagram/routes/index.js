var express = require('express');
var router = express.Router();
/*const y lo que pongamos en el db */
const indexControllers = require("../controllers/indexControllers")

/* GET home page. */
router.get('/', indexControllers.index);
router.get('/resultadoBusqueda/:search', indexControllers.resultadoBusqueda);

/*HAY QUE AGREGAR : Y LA ID?????????????? */
module.exports = router;
