//los controladores son la capa intermediaria entre las vistas y los modelos. Su responsabilidad es procesar los datos que recibe de los modelos y elegir la vista correspondiente a entregar al usuario. 
//ATENDER LOS REQUEST DEL CLIENTE 

const grama = require("../db/data"); //creo una variable con const llamada grama y con la funcion nativa require tengo como parametro la ruta relativa que quiero, en este caso tengo la ruta de db/ data , es decir grama va a tener el objeto exportado por ese modulo y lo voy a poder usar en el codigo actual
var db = require("../db/data")
//cada controlador sera un modulo que luego vamos a exportr donde lo necesitemos
const controlador = { //creo una variable con const llamada controlador y luego tengo un operador de asignacion igual que contendra un un objeto literal que contiene dos metodos INDEX y ResultadoBusqueda
  index: function (req, res, next) { //El metodo index  se encarga de recibir los pedidos y procesar la informacion. Quitamos el callback de la ruta y lo trasladamos al metodo como controlador .Luego tiene una funcion que se encargara de definir que accion tomar cuando se acceda a la ruta definida. Adentro recibe 3 parametros REQ(request"pedido",es un objeto literal y representa el pedido solicitado) RES(response, representa la respuesta que devuelve el servidor) y NEXT representa una funcion para pasar el control al siguiente
    //por si me dicen que son los 2 son parte de la sintaxis de objetos literales para asignar valores a un ara asignar funciones anónimas a las claves
    res.render('index', { grama: db.posteos });

  //res objeto literal y su metodo render que nos permite renderizar el metodo index y luego tenemos un objeto literal grama y seguido de los dos puntos db.posteos que representa el dato que estara llagando a la url si o si

  },
  resultadoBusqueda: function (req, res, next) {                                         
    res.render('resultadoBusqueda', { grama: db.posteos })
  },
}

module.exports = controlador;