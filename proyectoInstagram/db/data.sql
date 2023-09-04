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

/* DATOS PARA TABLA USUARIOS*/

INSERT INTO usuario (idUsuario, arroba, pass, fotoDePerfil, fecha, dni, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "micaschachtl", 2502,  "",  "2003-02-25 00:00:00", 44713206, DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO usuario (idUsuario, arroba, pass, fotoDePerfil, fecha, dni, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "valitaquispe", 1204,  "", "2004-04-12 12:00:00", 45547793, DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO usuario (idUsuario, arroba, pass, fotoDePerfil, fecha, dni, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "valenflores", 3333,  "", "2002-11-08 07:00:00", 44486249, DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO usuario (idUsuario, arroba, pass, fotoDePerfil, fecha, dni, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "jazquispe", 0131, "", "2001-01-31 16:00:00", 43640097, DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO usuario (idUsuario, arroba, pass, fotoDePerfil, fecha, dni, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "mdipace", 8008,  "", "2003-07-18 08:03:00", 45017261, DEFAULT, DEFAULT, DEFAULT); 




