CREATE SCHEMA TPI_PROGRAII;
USE TPI_PROGRAII;

/* ----------------- TABLA DE USUARIOS ------------------------------- */
CREATE TABLE usuario(
/* nombreColumna				tipoDato			restricciones/connstraints (unsigned=numeros positivos)*/
idUsuario						INT					UNSIGNED PRIMARY KEY AUTO_INCREMENT,
arroba							VARCHAR(50)			NOT NULL,
pass							VARCHAR(45)			NOT NULL,
fotoDePerfil					VARCHAR(200)		NOT NULL,
fecha							TIMESTAMP			NOT NULL,
dni								INT					NOT NULL,
/* campos de auditoria */
createdAt						TIMESTAMP			DEFAULT CURRENT_TIMESTAMP,
updatedAt						TIMESTAMP			DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt						TIMESTAMP			NULL
);

/*------------------ TABLA DE POSTEOS ------------------------------- */
CREATE TABLE posteo(
/* nombreColumna				tipoDato			restricciones/connstraints (unsigned=numeros positivos)*/
idPosteo						INT					UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombreImagen					VARCHAR(200)		NOT NULL,
piePost							VARCHAR(200)		NOT NULL,
/* columna para el FOREIGN KEY */
idUsuario						INT 				UNSIGNED NOT NULL,
/* referenciando la FOREIGN KEY */
FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario),
/* campos de auditoria */
createdAt						TIMESTAMP			DEFAULT CURRENT_TIMESTAMP,
updatedAt						TIMESTAMP			DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt						TIMESTAMP			NULL
);


/* --------------- TABLA DE COMENTARIOS -----------------------------*/
CREATE TABLE comentario(
/* nombreColumna				tipoDato			restricciones/connstraints (unsigned=numeros positivos)*/
idComentario					INT					UNSIGNED PRIMARY KEY AUTO_INCREMENT,
textoComentario					VARCHAR(200)		NOT NULL,
/* columna para los FOREIGN KEYs */
idPosteo						INT 				UNSIGNED NOT NULL,
idUsuario						INT 				UNSIGNED NOT NULL,
/* referenciando las FOREIGN KEYs */
FOREIGN KEY (idPosteo) REFERENCES posteo(idPosteo),
FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario),
/* campos de auditoria */
createdAt						TIMESTAMP			DEFAULT CURRENT_TIMESTAMP,
updatedAt						TIMESTAMP			DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt						TIMESTAMP			NULL
);



/* -------------------------------- DATOS PARA TABLA USUARIOS ----------------------------*/

INSERT INTO usuario (idUsuario, arroba, pass, fotoDePerfil, fecha, dni, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "micaschachtl", 2502,  "",  "2003-02-25 00:00:00", 44713206, DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO usuario (idUsuario, arroba, pass, fotoDePerfil, fecha, dni, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "valitaquispe", 1204,  "", "2004-04-12 12:00:00", 45547793, DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO usuario (idUsuario, arroba, pass, fotoDePerfil, fecha, dni, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "valenflores", 3333,  "", "2002-11-08 07:00:00", 44486249, DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO usuario (idUsuario, arroba, pass, fotoDePerfil, fecha, dni, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "jazquispe", 0131, "", "2001-01-31 16:00:00", 43640097, DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO usuario (idUsuario, arroba, pass, fotoDePerfil, fecha, dni, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "mdipace", 8008,  "", "2003-07-18 08:03:00", 45017261, DEFAULT, DEFAULT, DEFAULT); 



/* -------------------------------- DATOS PARA TABLA POSTEOS ----------------------------*/
/* POSTS DE USUARIO 1*/
INSERT INTO posteo (idPosteo, nombreImagen, piePost, idUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "1", DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO posteo (idPosteo, nombreImagen, piePost, idUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "1", DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO posteo (idPosteo, nombreImagen, piePost, idUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "1", DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO posteo (idPosteo, nombreImagen, piePost, idUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "1", DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO posteo (idPosteo, nombreImagen, piePost, idUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "1", DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO posteo (idPosteo, nombreImagen, piePost, idUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "1", DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO posteo (idPosteo, nombreImagen, piePost, idUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "1", DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO posteo (idPosteo, nombreImagen, piePost, idUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "1", DEFAULT, DEFAULT, DEFAULT); 

/* POSTS DE USUARIO 2*/
INSERT INTO posteo (idPosteo, nombreImagen, piePost, idUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "2", DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO posteo (idPosteo, nombreImagen, piePost, idUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "2", DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO posteo (idPosteo, nombreImagen, piePost, idUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "2", DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO posteo (idPosteo, nombreImagen, piePost, idUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "2", DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO posteo (idPosteo, nombreImagen, piePost, idUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "2", DEFAULT, DEFAULT, DEFAULT); 

/* POSTS DE USUARIO 3*/
INSERT INTO posteo (idPosteo, nombreImagen, piePost, idUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "3", DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO posteo (idPosteo, nombreImagen, piePost, idUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "3", DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO posteo (idPosteo, nombreImagen, piePost, idUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "3", DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO posteo (idPosteo, nombreImagen, piePost, idUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "3", DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO posteo (idPosteo, nombreImagen, piePost, idUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "3", DEFAULT, DEFAULT, DEFAULT); 

/* POSTS DE USUARIO 4*/
INSERT INTO posteo (idPosteo, nombreImagen, piePost, idUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "4", DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO posteo (idPosteo, nombreImagen, piePost, idUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "4", DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO posteo (idPosteo, nombreImagen, piePost, idUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "4", DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO posteo (idPosteo, nombreImagen, piePost, idUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "4", DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO posteo (idPosteo, nombreImagen, piePost, idUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "4", DEFAULT, DEFAULT, DEFAULT); 

/* POSTS DE USUARIO 5*/
INSERT INTO posteo (idPosteo, nombreImagen, piePost, idUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "5", DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO posteo (idPosteo, nombreImagen, piePost, idUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "5", DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO posteo (idPosteo, nombreImagen, piePost, idUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "5", DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO posteo (idPosteo, nombreImagen, piePost, idUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "5", DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO posteo (idPosteo, nombreImagen, piePost, idUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "5", DEFAULT, DEFAULT, DEFAULT); 



/* -------------------------------- DATOS PARA TABLA COMENTARIOS ----------------------------*/
/*4 comentarios para post 1*/
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "1",  "1", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "1",  "1", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "1",  "1", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "1",  "1", DEFAULT, DEFAULT, DEFAULT);

/*4 comentarios para post 2*/
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "2",  "1", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "2",  "1", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "2",  "1", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "2",  "1", DEFAULT, DEFAULT, DEFAULT);

/*4 comentarios para post 3*/
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "3",  "1", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "3",  "1", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "3",  "1", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "3",  "1", DEFAULT, DEFAULT, DEFAULT);

/*4 comentarios para post 4*/
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "4",  "1", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "4",  "1", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "4",  "1", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "4",  "1", DEFAULT, DEFAULT, DEFAULT);

/*4 comentarios para post 5*/
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "5",  "1", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "5",  "1", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "5",  "1", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "5",  "1", DEFAULT, DEFAULT, DEFAULT);

/*4 comentarios para post 6*/
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "6",  "1", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "6",  "1", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "6",  "1", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "6",  "1", DEFAULT, DEFAULT, DEFAULT);

/*4 comentarios para post 7*/
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "7",  "1", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "7",  "1", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "7",  "1", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "7",  "1", DEFAULT, DEFAULT, DEFAULT);

/*4 comentarios para post 8*/
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "8",  "1", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "8",  "1", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "8",  "1", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "8",  "1", DEFAULT, DEFAULT, DEFAULT);

/*4 comentarios para post 9*/
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "9",  "2", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "9",  "2", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "9",  "2", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "", "",  "9",  "2", DEFAULT, DEFAULT, DEFAULT);

/*4 comentarios para post 10*/
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "",  "10",  "2", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "",  "10",  "2", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "",  "10",  "2", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "",  "10",  "2", DEFAULT, DEFAULT, DEFAULT);

/*4 comentarios para post 11*/
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "",  "11",  "2", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "",  "11",  "2", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "",  "11",  "2", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "",  "11",  "2", DEFAULT, DEFAULT, DEFAULT);

/*4 comentarios para post 12*/
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "",  "12",  "2", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "",  "12",  "2", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "",  "12",  "2", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "",  "12",  "2", DEFAULT, DEFAULT, DEFAULT);

/*4 comentarios para post 13*/
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "",  "13",  "2", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "",  "13",  "2", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "",  "13",  "2", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "",  "13",  "2", DEFAULT, DEFAULT, DEFAULT);

/*4 comentarios para post 14*/
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "",  "14",  "3", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "",  "14",  "3", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "",  "14",  "3", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "",  "14",  "3", DEFAULT, DEFAULT, DEFAULT);
/*4 comentarios para post 15*/
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "",  "15",  "3", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "",  "15",  "3", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "",  "15",  "3", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "",  "15",  "3", DEFAULT, DEFAULT, DEFAULT);

/*4 comentarios para post 16*/
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "",  "16",  "3", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "",  "16",  "3", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "",  "16",  "3", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "",  "16",  "3", DEFAULT, DEFAULT, DEFAULT);

/*4 comentarios para post 17*/
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "",  "17",  "3", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "",  "17",  "3", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "",  "17",  "3", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "",  "17",  "3", DEFAULT, DEFAULT, DEFAULT);

/*4 comentarios para post 18*/
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "",  "18",  "3", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "",  "18",  "3", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "",  "18",  "3", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "",  "18",  "3", DEFAULT, DEFAULT, DEFAULT);

/*4 comentarios para post 19*/
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "",  "19",  "4", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "",  "19",  "4", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "",  "19",  "4", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "",  "19",  "4", DEFAULT, DEFAULT, DEFAULT);

/*4 comentarios para post 20*/
<<<<<<< HEAD
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "",  "20",  "4", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "",  "20",  "4", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "",  "20",  "4", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "",  "20",  "4", DEFAULT, DEFAULT, DEFAULT);
=======
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "",  "20",  "4", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "",  "20",  "4", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "",  "20",  "4", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "",  "20",  "4", DEFAULT, DEFAULT, DEFAULT);
>>>>>>> 5133062ba59a63b766472dc1a375d5bd44912229

/*4 comentarios para post 21*/
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "",  "21",  "4", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "",  "21",  "4", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "",  "21",  "4", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "",  "21",  "4", DEFAULT, DEFAULT, DEFAULT);

/*4 comentarios para post 22*/
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "",  "22",  "4", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "",  "22",  "4", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "",  "22",  "4", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "",  "22",  "4", DEFAULT, DEFAULT, DEFAULT);

/*4 comentarios para post 23*/
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "",  "23",  "4", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "",  "23",  "4", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "",  "23",  "4", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "",  "23",  "4", DEFAULT, DEFAULT, DEFAULT);

/*4 comentarios para post 24*/
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "",  "24",  "5", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "",  "24",  "5", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "",  "24",  "5", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "",  "24",  "5", DEFAULT, DEFAULT, DEFAULT);

/*4 comentarios para post 25*/
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "",  "25",  "5", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "",  "25",  "5", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "",  "25",  "5", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "",  "25",  "5", DEFAULT, DEFAULT, DEFAULT);

/*4 comentarios para post 26*/
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "",  "26",  "5", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "",  "26",  "5", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "",  "26",  "5", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "",  "26",  "5", DEFAULT, DEFAULT, DEFAULT);

/*4 comentarios para post 27*/
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "",  "27",  "5", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "",  "27",  "5", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "",  "27",  "5", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "",  "27",  "5", DEFAULT, DEFAULT, DEFAULT);

/*4 comentarios para post 28*/
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "",  "28",  "5", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "",  "28",  "5", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "",  "28",  "5", DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "",  "28",  "5", DEFAULT, DEFAULT, DEFAULT);

