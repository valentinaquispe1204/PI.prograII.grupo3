CREATE SCHEMA TPI_PROGRAII;

USE TPI_PROGRAII;

/* ----------------- TABLA DE USUARIOS ------------------------------- */
CREATE TABLE usuario(
/* nombreColumna				tipoDato			restricciones/connstraints (unsigned=numeros positivos)*/
idUsuario						INT					UNSIGNED PRIMARY KEY AUTO_INCREMENT,
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