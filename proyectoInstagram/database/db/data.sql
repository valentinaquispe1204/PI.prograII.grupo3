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
email                           VARCHAR(50)         NOT NULL,
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



/* ---------------------------------------------- DATOS PARA TABLA USUARIOS ------------------------------------------------------*/ 

INSERT INTO usuario (idUsuario, arroba, pass, fotoDePerfil, fecha, dni, email, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "micaschachtl", 2502, "usuario1.jpg", "2003-02-25 00:00:00", 44713206, "mschachtl@udesa.com", DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO usuario (idUsuario, arroba, pass, fotoDePerfil, fecha, dni, email, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "valitaquispe", 1204, "usuario2.jpg", "2004-04-12 12:00:00", 45547793, "vquispe@udesa.com", DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO usuario (idUsuario, arroba, pass, fotoDePerfil, fecha, dni, email, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "valenflores", 3333, "usuario3.jpg", "2002-11-08 07:00:00", 44486249, "vflores@udesa.com", DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO usuario (idUsuario, arroba, pass, fotoDePerfil, fecha, dni, email, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "jazquispe", 0131, "usuario4.jpg", "2001-01-31 16:00:00", 43640097, "jquispe@udesa.com", DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO usuario (idUsuario, arroba, pass, fotoDePerfil, fecha, dni, email, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "mdipace", 8008, "usuario5.jpg", "2003-07-18 08:03:00", 45017261, "mdipace@udesa.com", DEFAULT, DEFAULT, DEFAULT); 



/* -------------------------------- DATOS PARA TABLA POSTEOS ------------------(FALTA AGREGAR LOS PIE DE POST)--------------------------------------------*/
/* POSTS DE USUARIO 1*/
INSERT INTO posteo (idPosteo, nombreImagen, piePost, idUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "usuario5.1.jpeg", "Viviendo el momento.", 1, DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO posteo (idPosteo, nombreImagen, piePost, idUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "usuario5.2.jpeg", "Reflejando sobre la vida.", 1, DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO posteo (idPosteo, nombreImagen, piePost, idUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "usuario5.3.jpeg", "Sintiendo la brisa en mi piel.", 1, DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO posteo (idPosteo, nombreImagen, piePost, idUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "usuario5.4.jpeg", "Agradeciendo cada dia.", 1, DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO posteo (idPosteo, nombreImagen, piePost, idUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "usuario5.5.jpeg", "En busca de nuevas aventuras.", 1, DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO posteo (idPosteo, nombreImagen, piePost, idUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "usuario5.6.jpeg", "Explorando lo desconocido.", 1, DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO posteo (idPosteo, nombreImagen, piePost, idUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "usuario5.7.jpeg", "Que linda que es la vida!", 1, DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO posteo (idPosteo, nombreImagen, piePost, idUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "usuario5.8.jpeg", "Perdido en mis pensamientos.", 1, DEFAULT, DEFAULT, DEFAULT); 

/* POSTS DE USUARIO 2*/
INSERT INTO posteo (idPosteo, nombreImagen, piePost, idUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "usuario2.1.jpeg", "Disfrutando de la tranquilidad.",  2, DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO posteo (idPosteo, nombreImagen, piePost, idUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "usuario2.2.jpeg", "El tiempo es un regalo,",  2, DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO posteo (idPosteo, nombreImagen, piePost, idUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "usuario2.3.jpeg", "Que hermosa que es la vida rodeado de amor.",  2, DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO posteo (idPosteo, nombreImagen, piePost, idUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "usuario2.4.jpeg", "Cada dia es una nueva oportunidad.",  2, DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO posteo (idPosteo, nombreImagen, piePost, idUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "usuario2.5.jpeg", "En el camino de la vida.",  2, DEFAULT, DEFAULT, DEFAULT); 

/* POSTS DE USUARIO 3*/
INSERT INTO posteo (idPosteo, nombreImagen, piePost, idUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "usuario3.1.jpeg", "La vida es un viaje, no un destino.",  3, DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO posteo (idPosteo, nombreImagen, piePost, idUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "usuario3.2.jpeg", "Abrazando el presente.",  3, DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO posteo (idPosteo, nombreImagen, piePost, idUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "usuario3.3.jpeg", "Sintiendo la energía del universo.",  3, DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO posteo (idPosteo, nombreImagen, piePost, idUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "usuario3.4.jpeg", "El silencio habla más fuerte.",  3, DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO posteo (idPosteo, nombreImagen, piePost, idUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "usuario3.5.jpeg", "Momentos que valen la pena.",  3, DEFAULT, DEFAULT, DEFAULT); 

/* POSTS DE USUARIO 4*/
INSERT INTO posteo (idPosteo, nombreImagen, piePost, idUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "usuario4.1.jpeg", "Siempre en busca de la belleza.",  4, DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO posteo (idPosteo, nombreImagen, piePost, idUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "usuario4.2.jpeg", "La vida está llena de sorpresas.",  4, DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO posteo (idPosteo, nombreImagen, piePost, idUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "usuario4.3.jpeg", "Creciendo cada día.",  4, DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO posteo (idPosteo, nombreImagen, piePost, idUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "usuario4.4.jpeg", "Sintiendo la magia en el aire.",  4, DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO posteo (idPosteo, nombreImagen, piePost, idUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "usuario4.5.jpeg", "Dejando atrás lo que no me sirve.",  4, DEFAULT, DEFAULT, DEFAULT); 

/* POSTS DE USUARIO 5*/
INSERT INTO posteo (idPosteo, nombreImagen, piePost, idUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "usuario1.1.jpeg", "La felicidad está en el interior.",  5, DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO posteo (idPosteo, nombreImagen, piePost, idUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "usuario1.2.jpeg", "Despertando mi espíritu aventurero.",  5, DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO posteo (idPosteo, nombreImagen, piePost, idUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "usuario1.3.jpeg", "El amor es la respuesta.",  5, DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO posteo (idPosteo, nombreImagen, piePost, idUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "usuario1.4.jpeg", "Viviendo con gratitud.",  5, DEFAULT, DEFAULT, DEFAULT); 
INSERT INTO posteo (idPosteo, nombreImagen, piePost, idUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "usuario1.5.jpeg", "Apreciando las pequeñas cosas.",  5, DEFAULT, DEFAULT, DEFAULT); 



/* -------------------------------- DATOS PARA TABLA COMENTARIOS --------------------(????FALTA AGREGAR EL USUARIO QUE HACE EL COMENTARIO CON SU FOTITO DE PERFIL O DIRECTAMENTE DESP LO AGARRAMOS DE LA TABLA USUARIOS PARA MOSTRARLO EN LAS VISTAS????)--------------------------------------------------*/
/*4 comentarios para post 1 del usuario 1: @micaschachtl // MICKY SCHACHTL         MICKY SCHACHTL           MICKY SCHACHTL                 MICKY SCHACHTL                MICKY SCHACHTL               MICKY SCHACHTL*/
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "Que buena vibra en esta foto!",  1,  2, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "Estas radiante en esta imagen!",  1,  3, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "No puedo evitar sonreir al ver esto.",  1,  4, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "Me encanta tu estilo, siempre impecable.",  1,  5, DEFAULT, DEFAULT, DEFAULT);

/*4 comentarios para post 2 del usuario 1: @micaschachtl*/
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "Eres una fuente inagotable de inspiracion.",  2,  2, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "Donde fue tomada esta foto?",  2,  3, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "Tu sonrisa ilumina mi dia.",  2,  4, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "Los recuerdos como este son invaluables.",  2,  5, DEFAULT, DEFAULT, DEFAULT);

/*4 comentarios para post 3 del usuario 1: @micaschachtl*/
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "Esta foto me trae nostalgia.",  3,  2, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "Nunca dejes de sorprenderme.",  3,  3, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "Estas en tu elemento natural.",  3,  4, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "Que historia hay detras de esta foto?",  3,  5, DEFAULT, DEFAULT, DEFAULT);

/*4 comentarios para post 4 del usuario 1: @micaschachtl*/
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "Eres una persona increible.",  4,  2, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "Tengo suerte de tenerte como amigo.",  4,  3, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "Cual es tu secreto?",  4,  4, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "La belleza esta en los detalles",  4,  5, DEFAULT, DEFAULT, DEFAULT);

/*4 comentarios para post 5 del usuario 1: @micaschachtl*/
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "Eres un aventurero intrepido!",  5,  2, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "Siempre haces que las cosas se vean faciles!",  5,  3, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "¿Qué tal ha sido tu día?",  5,  4, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "¡Me encanta esta imagen!",  5,  5, DEFAULT, DEFAULT, DEFAULT);

/*4 comentarios para post 6 del usuario 1: @micaschachtl*/
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "Tus fotos siempre tienen un toque especial.",  6,  2, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "¡Hagamos planes pronto!",  6,  3, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "Esta foto es como una obra de arte.",  6,  4, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "No puedo evitar envidiar tu talento.",  6,  5, DEFAULT, DEFAULT, DEFAULT);

/*4 comentarios para post 7 del usuario 1: @micaschachtl*/
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "Eres una fuente de positividad.",  7,  2, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "¡Estoy emocionado por lo que viene!",  7,  3, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "Deberíamos hacer esto juntos algún día.",  7,  4, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "¿Cómo lograste capturar este momento?",  7,  5, DEFAULT, DEFAULT, DEFAULT);

/*4 comentarios para post 8 del usuario 1: @micaschachtl*/
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "Eres una persona auténtica.",  8,  2, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "Gracias por compartir esto con nosotros.",  8,  3, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "¿Dónde puedo conseguir ese outfit?",  8,  4, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "¡Quiero estar ahí contigo!",  8,  5, DEFAULT, DEFAULT, DEFAULT);

/*4 comentarios para post 9 del usuario 2: @valenquispe // VALEN QUISPE         VALEN QUISPE           VALEN QUISPE                 VALEN QUISPE                VALEN QUISPE               VALEN QUISPE*/
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "Tus fotos siempre cuentan una historia.",  9,  1, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "Este lugar se ve asombroso.",  9,  3, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "Tus aventuras son inspiradoras.",  9,  4, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "Siempre encuentras belleza en todo.",  9,  5, DEFAULT, DEFAULT, DEFAULT);

/*4 comentarios para post 10 del usuario 2: @valenquispe*/
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "Esto me hace sonreír.",  10,  1, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "¡Te ves fenomenal!",  10,  3, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "Quiero ser como tú cuando crezca.",  10,  4, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "¿Cuál es tu secreto para la felicidad?",  10,  5, DEFAULT, DEFAULT, DEFAULT);

/*4 comentarios para post 11 del usuario 2: @valenquispe*/
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "Estoy obsesionada con esta imagen.",  11,  1, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "Nunca dejes de ser tú mismo.",  11,  3, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "Siempre tienes las mejores ideas.",  11,  4, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "¡Qué foto más impresionante!",  11,  5, DEFAULT, DEFAULT, DEFAULT);

/*4 comentarios para post 12*/
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "Eres mi espíritu animal.",  12,  1, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "¡Brillante como siempre!",  12,  3, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "Esta foto merece ser compartida.",  12,  4, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "¿Cuál es tu próxima aventura?",  12,  5, DEFAULT, DEFAULT, DEFAULT);

/*4 comentarios para post 13*/
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "Me haces querer viajar más.",  13,  1, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "¡Tienes un don para esto!",  13,  3, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "Eres una persona genuina.",  13,  4, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "No puedo dejar de mirar esta foto.",  13,  5, DEFAULT, DEFAULT, DEFAULT);

/*4 comentarios para post 14 del usuario 3: @valenflores // VALEN FLORES         VALEN FLORES           VALEN FLORES                 VALEN FLORES                VALEN FLORES               VALEN FLORES*/
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "Estoy emocionado por lo que viene.",  14,  1, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "Estás haciendo grandes cosas.",  14,  2, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "Siempre veo el lado positivo contigo.",  14,  4, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "Este es un recuerdo para atesorar.",  14,  5, DEFAULT, DEFAULT, DEFAULT);
/*4 comentarios para post 15*/
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "¡Qué hermosa vista!",  15,  1, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "Eres un verdadero amigo.",  15,  2, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "¿Cómo mantienes esa energía?",  15,  4, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "Tu pasión es contagiosa.",  15,  5, DEFAULT, DEFAULT, DEFAULT);

/*4 comentarios para post 16*/
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "¡Esta imagen es épica!",  16,  1, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "Gracias por hacer mi día mejor.",  16,  2, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "Eres una inspiración constante.",  16,  4, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "¿Cuál es tu próxima meta?",  16,  5, DEFAULT, DEFAULT, DEFAULT);

/*4 comentarios para post 17*/
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "No puedo esperar para verte de nuevo.",  17,  1, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "Eres un ser humano excepcional.",  17,  2, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "¡Tienes una sonrisa contagiosa!",  17,  4, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "Este es un recordatorio de lo afortunado que soy.",  17,  5, DEFAULT, DEFAULT, DEFAULT);

/*4 comentarios para post 18*/
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "¿Cuál es tu mantra de vida?",  18,  1, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "Tu positividad es infecciosa.",  18,  2, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "¡Este lugar se ve mágico!",  18,  4, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "Eres un rayo de sol en mi vida.",  18,  5, DEFAULT, DEFAULT, DEFAULT);

/*4 comentarios para post 19 del usuario 4: @jazquispe // JAZ QUISPE         JAZ QUISPE           JAZ QUISPE                 JAZ QUISPE                JAZ QUISPE               JAZ QUISPE*/
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "¿Qué aventura te espera?",  19,  1, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "Siempre tienes las palabras adecuadas.",  19,  2, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "Tu alegría es verdadera inspiración.",  19,  3, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "¡Eres increíble!",  19,  5, DEFAULT, DEFAULT, DEFAULT);

/*4 comentarios para post 20*/
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "¿Cómo mantienes la calma en todas las situaciones?",  20,  1, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "No puedo evitar sentirme feliz al verte feliz.",  20,  2, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "¡Qué buena elección de fondo!",  20,  3, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT, "Siempre sabes cómo divertirte.",  20,  5, DEFAULT, DEFAULT, DEFAULT);

/*4 comentarios para post 21*/
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "Tu amistad es un tesoro.",  21,  1, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "¿Cuál es tu lema de vida?",  21,  2, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "Tu positividad es un faro.",  21,  3, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "Eres una persona excepcional.",  21,  5, DEFAULT, DEFAULT, DEFAULT);

/*4 comentarios para post 22*/
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "¿Cómo logras ser tan auténtico?",  22,  1, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "Esta imagen es simplemente genial.",  22,  2, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "¡Me haces querer explorar el mundo!",  22,  3, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "Tu espontaneidad es contagiosa.",  22,  5, DEFAULT, DEFAULT, DEFAULT);

/*4 comentarios para post 23*/
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "Eres un faro de alegría.",  23,  1, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "¿Cuál es tu próxima gran aventura?",  23,  2, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "Siempre encuentras la belleza en todo.",  23,  3, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "¡Eres un verdadero líder!",  23,  5, DEFAULT, DEFAULT, DEFAULT);

/*4 comentarios para post 24 del usuario 5: @moradipace // MORA DI PACE         MORA DI PACE           MORA DI PACE                 MORA DI PACE                MORA DI PACE               MORA DI PACE*/
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "Gracias por ser tú.",  24,  1, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "¿Cuál es tu secreto para la felicidad?",  24,  2, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "Tu creatividad no tiene límites.",  24,  3, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "Siempre estás lleno de sorpresas.",  24,  4, DEFAULT, DEFAULT, DEFAULT);

/*4 comentarios para post 25 del usuario 5: @moradipace*/
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "¡Eres asombroso!",  25,  1, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "¿Cómo haces que todo se vea tan fácil?",  25,  2, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "Este momento es para atesorar.",  25,  3, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "Estoy agradecido por tu amistad.",  25,  4, DEFAULT, DEFAULT, DEFAULT);

/*4 comentarios para post 26 del usuario 5: @moradipace*/
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "Tengo suerte de tenerte como amigo.",  26,  1, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "¿Cuál es tu secreto para verte tan bien?",  26,  2, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "La belleza está en los detalles.",  26,  3, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "¡Eres un aventurero intrépido!",  26,  4, DEFAULT, DEFAULT, DEFAULT);

/*4 comentarios para post 27 del usuario 5: @moradipace*/
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "Siempre haces que las cosas se vean fáciles.",  27,  1, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "¿Qué tal ha sido tu día?",  27,  2, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "¡Me encanta esta imagen!",  27,  3, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "Tus fotos siempre tienen un toque especial.",  27,  4, DEFAULT, DEFAULT, DEFAULT);

/*4 comentarios para post 28 del usuario 5: @moradipace*/
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "¡Tienes un don para esto!",  28,  1, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "Eres un verdadero amigo.",  28,  2, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "Tu positividad es infecciosa.",  28,  3, DEFAULT, DEFAULT, DEFAULT);
INSERT INTO comentario (idComentario, textoComentario, idPosteo, IdUsuario, createdAt, updatedAt, deletedAt) VALUES (DEFAULT,  "¡Qué buena elección de fondo!",  28,  4, DEFAULT, DEFAULT, DEFAULT);

