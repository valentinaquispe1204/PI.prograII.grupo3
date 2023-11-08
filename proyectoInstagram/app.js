var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session'); //lo instale y requeri

var indexRouter = require('./routes/index'); 
var usersRouter = require('./routes/users');
var productsRouter = require ('./routes/products'); 

var app = express(); 

// view engine setup ..
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//configuracion de session
app.use(session({ 
  secret: "proyectoIntegradorInstagram",
  resave: false,
  saveUninitialized: true}));


app.use(function (req,res,next) {
  if (req.session.user != undefined) {
    res.locals.user=req.session.user; 

    res.send(req.session) // despues sacar
    return next();
  }
    return next();
})

app.use(function(req,res,next){
    res.locals.usuarioLogueado = {
      nombreDeUsuario : req.session.user
      
    }
    return next();
}),

/**Configuracion de cookie */
app.use(function (req,res,next) {
  /**Si existe la cokkie del usuario y no existe el usuario en session*/
  if (req.cookies.idUsuario != undefined && req.session.user== undefined) {
    let idUsuarioCookie=req.cookies.idUsuario;
    grama.Users.findByPk(idUsuarioCookie)
    .then((user)=>{
      /*Cargamos el usuario encontrado en la session*/
      req.session.user=user.dataValues;
      /**cargar el usuario en locals */
      res.locals.user=user.dataValues;
      return next();
    })
    .catch((err)=>console.log(err))
  }else{
    return next();
  }
})

// rutas prefijos
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter); 


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
