var db = require("../db/data")
const productsControllers = { //creo una variable llamada productsControllers con un operador de asignacion que contiene un objeto literal.  
    agregarPost : function(req, res, next) { ////agregarPost es un metodo que  se encarga de recibir los pedidos y procesar la informacion. Quitamos el callback de la funcion y  lo trasladamos al metodo como controlador .
    //Luego tiene una function que se encargara de definir que accion tomar cuando se acceda a la ruta definida. Adentro recibe 3 parametros REQ(request"pedido",es un objeto literal y representa el pedido solicitado) RES(response, representa la respuesta que devuelve el servidor) y NEXT representa una funcion para pasar el control al siguiente
        
    res.render('agregarPost', { grama: db }); //res es un objeto literal y su metodo render que nos permite renderizar el metodo agregar post que contiene el objeto literal de grama seguido de los dos puntos db que representa el dato que estara llagando a la url (db es un parametro obligatorio)

      },
    detallePost : function(req, res, next) {
        let id = Number(req.params.id);  //creo una variable con led llamada id y luego tengo Number que es un metodo  que pasa a numero el texto de id que viene como  string 
        //  (req.params.id ) haciendo uso de la propiedad params del obejto literal request podemos capturar esos valor parametrizados en este caso el parametro de la ruta .id porque ante lo llamamos asi
        //recupero el id 
      
        let posteo = {}; /* un objeto vacio que le vamos a agregar el posteo que queremos ver */
        let posteos = db.posteos // un objeto literal que tiene todos los posteos
        for (let i = 0; i < posteos.length; i++) { /* iterar un array para no tener que iterar en el ejs */
          console.log(posteos[i].idPosteo)
          if (posteos[i].idPosteo == id) { /* si el  posteo que estoy recorriendo en la posicion , con su id especifico del posteo es igual al id  solo guardo el que necesito , y lo agrego a posteo*/
            posteo == posteos[i] //si posteo es igual a posteos es deciral objeto litral que tiene todo los objetos
            return res.render('detallePost', {grama: posteos[i]}) /* envia el dato */
            ///return devuelve el valor en este caso de res es un objeto literal y su metodo render que nos permite renderizar el metodo de detallePost, luego  grama que es un objeto literal y seguido de los dos puntos posteos que representa el dato que estara llagando a la url en la posicion i 
          }
        }
     
    }
}

module.exports = productsControllers;