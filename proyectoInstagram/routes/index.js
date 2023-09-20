//CARPETA ROUTES cada archivo js sera un  modulo que vamos a exportar dentro del entry point de app.js

//modelo  pide informacion solicitada a la base de datos y al recibirla la envia al controlador 

var express = require('express');// creo una variable con var llamada express y luego tengo un operador de asignacion igual y hago uso de la funcion nativa require y adentro le paso como parametro el string que quiero requerir


 // Este modulo es de terceros. Nos va a permitir modularizar por completo el sistema de ruteo de una manera mas sencilla
var router = express.Router();// creo una variable  llamada router que guarda la ejecucion del metodo router que nos provee express //ESTE METODO nos permite modularizar por completo todo el sistema de ruteo de una manera mas sencilla
const indexControllers = require("../controllers/indexControllers") // //creo una variable llamda indexcontrollers y tengo un operador de asignacion igual. Luego tengo un require que es una funcion nativa y adentro como parametro una ruta relativa, en la cual requiero indexControllers


/* GET home page. */
router.get('/', indexControllers.index); // router es un objeto literal (el sistema de ruteo se guarda aqui) y get es un metodo que recibe como primer parametro PATH un string que hara referencia a ruta por eso empieza con una barra llamada sufijo, y conecta con el controllador llamado  indexcontroller con el metodo  index de js. Al ser un callback no escribimos los parentesis al final

// el metodo tmb puede ser lllamada como una propiedad

router.get('/resultadoBusqueda', indexControllers.resultadoBusqueda);  

module.exports = router;

//module es un objeto nativo y su propiedad .exports y asignamos a traves del operador de asignacion la variable que queremos exportar en este caso es router.
