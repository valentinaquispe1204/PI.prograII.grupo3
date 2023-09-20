var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//el punto de inicio donde se carga y se ejecuta el código para iniciar la aplicación. 
var indexRouter = require('./routes/index'); // creo una variable llamada indexRouter y requerimos el modulo. (el modulo que exportamos en index abajo) Luego tengo un operador de asignacion igual y a traves de la funcion nativa  de  require le pasamos la ruta relativa en este caso conectamos la ruta index.
var usersRouter = require('./routes/users');
var productsRouter = require ('./routes/products'); 
var app = express(); //creo una variable con var llamada app  aca estara almacenado el objeto . Usando la notacion de punto podremos acceder a todas sus propiedades y metodos. Luego tengo express que es una funcion de alto nivel express devuelve un objeto literal

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//llamamos a index router//
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter); //hacemos uso del metodo use que recibe dos parametros. El primero es un string que  sera el nombre del recurso en este caso productos. Al ser una ruta debe empezar con /. El segundo es un string que sera el nombre de la constante en la que almacenamos el modulo del recurso en este caso de la linea 10.

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
