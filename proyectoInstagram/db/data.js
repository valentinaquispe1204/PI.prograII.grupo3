// BASE DE DATOS //
// objeto literal grama con arrays (usuarios y posteos) con objetos literales dentro //
//2 propiedades principales usuarios y posteos, adentro tienen un array, dentro un objeto literal por cada usuario
//posteo tengo una lista con cada post , con cada post un objeto literal , 4 objetos literal dentro de la propiedad comentarios que marcan los 4 comentarios que van adentro 
//28 objetos literal = 28 post en el trabajo con 4 objetos literal que son los comentarios en el post , estos 4 objetos literales estan adentro de una lista llamada comentarios.
//propiedad id con valor 1 (todas son propiedad y valor)
//usamos grama.posteos no usamos grama.usuarios

const grama = {
    usuarios: [
        {id: 1,     arroba: "micaschachtl",   fotoPerfil: "/images/fotosPerfil/usuario1.jpg",  pass: 2502,     fecha: "2003-02-25 00:00:00",   dni: 44713206 },
        {id: 2,     arroba: "valitaquispe",   fotoPerfil: "/images/fotosPerfil/usuario2.jpg",  pass: 1204,     fecha: "2004-04-12 12:00:00",   dni: 45547793 },	
        {id: 3,	    arroba: "valenflores",    fotoPerfil: "/images/fotosPerfil/usuario3.jpg",  pass: 3333,     fecha: "2002-11-08 07:00:00",   dni: 44486249 },	
        {id: 4,	    arroba: "jazquispe",      fotoPerfil: "/images/fotosPerfil/usuario4.jpg",  pass: 1319,     fecha: "2001-01-31 16:00:00",   dni: 43640097 },	
        {id: 5,	    arroba:	"mdipace",        fotoPerfil: "/images/fotosPerfil/usuario5.jpg",  pass: 8008,     fecha: "2003-07-18 08:03:00",   dni: 45017261 }],
    
    posteos: [
// --------------------------------------- 4 COMENTARIOS PARA LOS 8 POSTS DEL USUARIO 1: @micaschachtl --------------------------------------------------------------------- //
        {idPosteo: 1, nombreImagen: "/images/usuario5.1.jpeg", piePost: "Viviendo el momento.", arroba: "micaschachtl", fotoPerfil: "/images/fotosPerfil/usuario1.jpg", comentarios:[
            {idComentario: 1, textoComentario: "¡Qué buena vibra en esta foto!" , idPosteo: 1, IdUsuario: "valitaquispe", fotoPerfil: "/images/fotosPerfil/usuario2.jpg"},
            {idComentario: 2, textoComentario: "Estás radiante en esta imagen.", idPosteo: 1, IdUsuario: "valenflores", fotoPerfil: "/images/fotosPerfil/usuario3.jpg"},
            {idComentario: 3, textoComentario: "No puedo evitar sonreír al ver esto.", idPosteo: 1, IdUsuario: "jazquispe", fotoPerfil: "/images/fotosPerfil/usuario4.jpg" },
            {idComentario: 4, textoComentario: "Me encanta tu estilo, siempre impecable.", idPosteo: 1, IdUsuario: "mdipace", fotoPerfil: "/images/fotosPerfil/usuario5.jpg" },
        ]},
        {idPosteo: 2, nombreImagen: "/images/usuario5.2.jpeg", piePost: "Reflejando sobre la vida.",arroba: "micaschachtl", fotoPerfil: "/images/fotosPerfil/usuario1.jpg", comentarios:[
            {idComentario: 5, textoComentario: "Eres una fuente inagotable de inspiración.", idPosteo: 2, IdUsuario: "valitaquispe", fotoPerfil: "/images/fotosPerfil/usuario2.jpg"},
            {idComentario: 6, textoComentario: "¿Dónde fue tomada esta foto? ", idPosteo: 2, IdUsuario: "valenflores", fotoPerfil: "/images/fotosPerfil/usuario3.jpg" },
            {idComentario: 7, textoComentario: "Tu sonrisa ilumina mi día.", idPosteo: 2, IdUsuario: "jazquispe", fotoPerfil: "/images/fotosPerfil/usuario4.jpg"},
            {idComentario: 8, textoComentario: "Los recuerdos como este son invaluables.", idPosteo: 2, IdUsuario: "mdipace", fotoPerfil: "/images/fotosPerfil/usuario5.jpg" },
        ]},
        {idPosteo: 3, nombreImagen: "/images/usuario5.3.jpeg", piePost: "Sintiendo la brisa en mi piel.", arroba: "micaschachtl", fotoPerfil: "/images/fotosPerfil/usuario1.jpg", comentarios:[
            {idComentario: 9, textoComentario: "Esta foto me trae nostalgia.", idPosteo: 3, IdUsuario: "valitaquispe", fotoPerfil: "/images/fotosPerfil/usuario2.jpg"},
            {idComentario: 10, textoComentario: "Nunca dejas de sorprenderme.", idPosteo: 3, IdUsuario: "valenflores", fotoPerfil: "/images/fotosPerfil/usuario3.jpg" },
            {idComentario: 11, textoComentario: "Estás en tu elemento natural.", idPosteo: 3, IdUsuario: "jazquispe", fotoPerfil: "/images/fotosPerfil/usuario4.jpg" },
            {idComentario: 12, textoComentario: "¿Qué historia hay detrás de esta foto?", idPosteo: 3, IdUsuario: "mdipace", fotoPerfil: "/images/fotosPerfil/usuario5.jpg" },
        ]},
        {idPosteo: 4, nombreImagen: "/images/usuario5.4.jpeg", piePost: "Agradeciendo cada día.", arroba: "micaschachtl", fotoPerfil: "/images/fotosPerfil/usuario1.jpg", comentarios:[
            {idComentario: 13, textoComentario: "Eres una persona increíble.", idPosteo: 4, IdUsuario: "valitaquispe", fotoPerfil: "/images/fotosPerfil/usuario2.jpg" },
            {idComentario: 14, textoComentario: "Tengo suerte de tenerte como amigo.", idPosteo: 4, IdUsuario: "valenflores", fotoPerfil: "/images/fotosPerfil/usuario3.jpg" },
            {idComentario: 15, textoComentario: "¿Cuál es tu secreto?", idPosteo: 4, IdUsuario: "jazquispe", fotoPerfil: "/images/fotosPerfil/usuario4.jpg" },
            {idComentario: 16, textoComentario: "La belleza está en los detalles.", idPosteo: 4, IdUsuario: "mdipace", fotoPerfil: "/images/fotosPerfil/usuario5.jpg" },
        ]},
        {idPosteo: 5, nombreImagen: "/images/usuario5.5.jpeg", piePost: "En busca de nuevas aventuras.",arroba: "micaschachtl", fotoPerfil: "/images/fotosPerfil/usuario1.jpg", comentarios:[
            {idComentario: 17, textoComentario: "¡Eres un aventurero intrépido!", idPosteo: 5, IdUsuario: "valitaquispe", fotoPerfil: "/images/fotosPerfil/usuario2.jpg" },
            {idComentario: 18, textoComentario: "Siempre haces que las cosas se vean fáciles.", idPosteo: 5, IdUsuario: "valenflores", fotoPerfil: "/images/fotosPerfil/usuario3.jpg" },
            {idComentario: 19, textoComentario: "¿Qué tal ha sido tu día?", idPosteo: 5, IdUsuario: "jazquispe", fotoPerfil: "/images/fotosPerfil/usuario4.jpg" },
            {idComentario: 20, textoComentario: "¡Me encanta esta imagen!", idPosteo: 5, IdUsuario: "mdipace", fotoPerfil: "/images/fotosPerfil/usuario5.jpg" },
        ]},
        {idPosteo: 6, nombreImagen: "/images/usuario5.6.jpeg", piePost: "Explorando lo desconocido.",arroba: "micaschachtl", fotoPerfil: "/images/fotosPerfil/usuario1.jpg", comentarios:[
            {idComentario: 21, textoComentario: "Tus fotos siempre tienen un toque especial.", idPosteo: 6, IdUsuario: "valitaquispe", fotoPerfil: "/images/fotosPerfil/usuario2.jpg" },
            {idComentario: 22, textoComentario: "¡Hagamos planes pronto!", idPosteo: 6, IdUsuario: "valenflores", fotoPerfil: "/images/fotosPerfil/usuario3.jpg" },
            {idComentario: 23, textoComentario: "Esta foto es como una obra de arte.", idPosteo: 6, IdUsuario: "jazquispe", fotoPerfil: "/images/fotosPerfil/usuario4.jpg" },
            {idComentario: 24, textoComentario: "No puedo evitar envidiar tu talento.", idPosteo: 6, IdUsuario: "mdipace", fotoPerfil: "/images/fotosPerfil/usuario5.jpg" },
        ]},
        {idPosteo: 7, nombreImagen: "/images/usuario5.7.jpeg", piePost: "Que linda que es la vida", arroba: "micaschachtl", fotoPerfil: "/images/fotosPerfil/usuario1.jpg", comentarios:[
            {idComentario: 25, textoComentario: "Eres una fuente de positividad.", idPosteo: 7, IdUsuario: "valitaquispe", fotoPerfil: "/images/fotosPerfil/usuario2.jpg" },
            {idComentario: 26, textoComentario: "¡Estoy emocionado por lo que viene!", idPosteo: 7, IdUsuario: "valenflores", fotoPerfil: "/images/fotosPerfil/usuario3.jpg" },
            {idComentario: 27, textoComentario: "Deberíamos hacer esto juntos algún día.", idPosteo: 7, IdUsuario: "jazquispe", fotoPerfil: "/images/fotosPerfil/usuario4.jpg" },
            {idComentario: 28, textoComentario: "¿Cómo lograste capturar este momento?", idPosteo: 7, IdUsuario: "mdipace", fotoPerfil: "/images/fotosPerfil/usuario5.jpg" },
        ]},
        {idPosteo: 8, nombreImagen: "/images/usuario5.8.jpeg", piePost: "Perdido en misPensamientos.", arroba: "micaschachtl", fotoPerfil: "/images/fotosPerfil/usuario1.jpg", comentarios:[
            {idComentario: 29, textoComentario: "Eres una persona auténtica.", idPosteo: 8, IdUsuario: "valitaquispe", fotoPerfil: "/images/fotosPerfil/usuario2.jpg" },
            {idComentario: 30, textoComentario: "Gracias por compartir esto con nosotros.", idPosteo: 8, IdUsuario: "valenflores", fotoPerfil: "/images/fotosPerfil/usuario3.jpg" },
            {idComentario: 31, textoComentario: "¿Dónde puedo conseguir ese atuendo?", idPosteo: 8, IdUsuario: "jazquispe", fotoPerfil: "/images/fotosPerfil/usuario4.jpg" },
            {idComentario: 32, textoComentario: "¡Quiero estar ahí contigo!", idPosteo: 8, IdUsuario: "mdipace", fotoPerfil: "/images/fotosPerfil/usuario5.jpg" },
        ]},
// --------------------------------------------- 4 COMENTARIOS PARA LOS 5 POSTS DEL USUARIO 2: @valitaquispe --------------------------------------------------------- //
        {idPosteo: 9, nombreImagen: "/images/usuario2.1.jpeg", piePost: "Disfrutando de la tranquilidad.", arroba: "valitaquispe", fotoPerfil: "/images/fotosPerfil/usuario2.jpg", comentarios:[
            {idComentario: 33, textoComentario: "Tus fotos siempre cuentan una historia.", idPosteo: 9, IdUsuario: "micaschachtl", fotoPerfil: "/images/fotosPerfil/usuario1.jpg" },
            {idComentario: 34, textoComentario: "Este lugar se ve asombroso.", idPosteo: 9, IdUsuario: "valenflores", fotoPerfil: "/images/fotosPerfil/usuario3.jpg" },
            {idComentario: 35, textoComentario: "Tus aventuras son inspiradoras.", idPosteo: 9, IdUsuario: "jazquispe", fotoPerfil: "/images/fotosPerfil/usuario4.jpg" },
            {idComentario: 36, textoComentario: "Siempre encuentras belleza en todo.", idPosteo: 9, IdUsuario: "mdipace", fotoPerfil: "/images/fotosPerfil/usuario5.jpg" },
        ]},
        {idPosteo: 10, nombreImagen: "/images/usuario2.2.jpeg", piePost: "El tiempo es un regalo.", arroba: "valitaquispe", fotoPerfil: "/images/fotosPerfil/usuario2.jpg", comentarios:[
            {idComentario: 37, textoComentario: "Esto me hace sonreír.", idPosteo: 10, IdUsuario: "micaschachtl", fotoPerfil: "/images/fotosPerfil/usuario1.jpg" },
            {idComentario: 38, textoComentario: "¡Te ves fenomenal!", idPosteo: 10, IdUsuario: "valenflores", fotoPerfil: "/images/fotosPerfil/usuario3.jpg" },
            {idComentario: 39, textoComentario: "Quiero ser como tú cuando crezca.", idPosteo: 10, IdUsuario: "jazquispe", fotoPerfil: "/images/fotosPerfil/usuario4.jpg" },
            {idComentario: 40, textoComentario: "¿Cuál es tu secreto para la felicidad?", idPosteo: 10, IdUsuario: "mdipace", fotoPerfil: "/images/fotosPerfil/usuario5.jpg" },
        ]},
        {idPosteo: 11, nombreImagen: "/images/usuario2.3.jpeg", piePost: "Que hermosa que es la vida rodeado de amor", arroba: "valitaquispe", fotoPerfil: "/images/fotosPerfil/usuario2.jpg", comentarios:[
            {idComentario: 41, textoComentario: "Estoy obsesionado con esta imagen.", idPosteo: 11, IdUsuario: "micaschachtl", fotoPerfil: "/images/fotosPerfil/usuario1.jpg" },
            {idComentario: 42, textoComentario: "Nunca dejes de ser tú mismo.", idPosteo: 11, IdUsuario: "valenflores", fotoPerfil: "/images/fotosPerfil/usuario3.jpg" },
            {idComentario: 43, textoComentario: "Siempre tienes las mejores ideas.", idPosteo: 11, IdUsuario: "jazquispe", fotoPerfil: "/images/fotosPerfil/usuario4.jpg" },
            {idComentario: 44, textoComentario: "¡Qué foto más impresionante!", idPosteo: 11, IdUsuario: "mdipace", fotoPerfil: "/images/fotosPerfil/usuario5.jpg" },
        ]},
        {idPosteo: 12, nombreImagen: "/images/usuario2.4.jpeg", piePost: "Cada día es una nueva oportunidad.", arroba: "valitaquispe", fotoPerfil: "/images/fotosPerfil/usuario2.jpg", comentarios:[
            {idComentario: 45 ,textoComentario: "Eres mi espíritu animal.", idPosteo: 12, IdUsuario: "micaschachtl", fotoPerfil: "/images/fotosPerfil/usuario1.jpg" },
            {idComentario: 46 ,textoComentario: "¡Brillante como siempre!", idPosteo: 12, IdUsuario: "valenflores", fotoPerfil: "/images/fotosPerfil/usuario3.jpg" },
            {idComentario: 47 ,textoComentario: "Esta foto merece ser compartida.", idPosteo: 12, IdUsuario: "jazquispe", fotoPerfil: "/images/fotosPerfil/usuario4.jpg" },
            {idComentario: 48 ,textoComentario: "¿Cuál es tu próxima aventura?", idPosteo: 12, IdUsuario: "mdipace", fotoPerfil: "/images/fotosPerfil/usuario5.jpg" },
        ]},
        {idPosteo: 13, nombreImagen: "/images/usuario2.5.jpeg", piePost: "En el camino de la vida.", arroba: "valitaquispe", fotoPerfil: "/images/fotosPerfil/usuario2.jpg", comentarios:[
            {idComentario: 49, textoComentario: "Me haces querer viajar más.", idPosteo: 13, IdUsuario: "micaschachtl", fotoPerfil: "/images/fotosPerfil/usuario1.jpg" },
            {idComentario: 50, textoComentario: "¡Tienes un don para esto!", idPosteo: 13, IdUsuario: "valenflores", fotoPerfil: "/images/fotosPerfil/usuario3.jpg" },
            {idComentario: 51, textoComentario: "Eres una persona genuina.", idPosteo: 13, IdUsuario: "jazquispe", fotoPerfil: "/images/fotosPerfil/usuario4.jpg" },
            {idComentario: 52, textoComentario: "No puedo dejar de mirar esta foto.", idPosteo: 13, IdUsuario: "mdipace", fotoPerfil: "/images/fotosPerfil/usuario5.jpg" },
        ]},
// ----------------------------------------------- 4 COMENTARIOS PARA LOS 5 POSTS DEL USUARIO 3: @valenflores ------------------------------------------------ //
        {idPosteo: 14, nombreImagen: "/images/usuario3.1.jpeg", piePost: "La vida es un viaje, no un destino.", arroba: "valenflores", fotoPerfil: "/images/fotosPerfil/usuario3.jpg", comentarios:[
            {idComentario: 53, textoComentario: "Estoy emocionado por lo que viene.", idPosteo: 14, IdUsuario: "micaschachtl", fotoPerfil: "/images/fotosPerfil/usuario1.jpg" },
            {idComentario: 54, textoComentario: "Estás haciendo grandes cosas.", idPosteo: 14, IdUsuario: "valitaquispe", fotoPerfil: "/images/fotosPerfil/usuario2.jpg" },
            {idComentario: 55, textoComentario: "Siempre veo el lado positivo contigo.", idPosteo: 14, IdUsuario: "jazquispe", fotoPerfil: "/images/fotosPerfil/usuario4.jpg" },
            {idComentario: 56, textoComentario: "Este es un recuerdo para atesorar.", idPosteo: 14, IdUsuario: "mdipace", fotoPerfil: "/images/fotosPerfil/usuario5.jpg" },
        ]},
        {idPosteo: 15, nombreImagen: "/images/usuario3.2.jpeg", piePost: "Abrazando el presente.", arroba: "valenflores", fotoPerfil: "/images/fotosPerfil/usuario3.jpg", comentarios:[
            {idComentario: 57 ,textoComentario: "¡Qué hermosa vista!", idPosteo: 15, IdUsuario: "micaschachtl", fotoPerfil: "/images/fotosPerfil/usuario1.jpg" },
            {idComentario: 58 ,textoComentario: "Eres un verdadero amigo.", idPosteo: 15, IdUsuario: "valitaquispe", fotoPerfil: "/images/fotosPerfil/usuario2.jpg" },
            {idComentario: 59 ,textoComentario: "¿Cómo mantienes esa energía?", idPosteo: 15, IdUsuario: "jazquispe", fotoPerfil: "/images/fotosPerfil/usuario4.jpg" },
            {idComentario: 60 ,textoComentario: "Tu pasión es contagiosa.", idPosteo: 15, IdUsuario: "mdipace", fotoPerfil: "/images/fotosPerfil/usuario5.jpg" },
        ]},
        {idPosteo: 16, nombreImagen: "/images/usuario3.3.jpeg", piePost: "Sintiendo la energía del universo.", arroba: "valenflores", fotoPerfil: "/images/fotosPerfil/usuario3.jpg", comentarios:[
            {idComentario: 61 ,textoComentario: "¡Esta imagen es épica!", idPosteo: 16, IdUsuario: "micaschachtl", fotoPerfil: "/images/fotosPerfil/usuario1.jpg" },
            {idComentario: 62 ,textoComentario: "Gracias por hacer mi día mejor.", idPosteo: 16, IdUsuario: "valitaquispe", fotoPerfil: "/images/fotosPerfil/usuario2.jpg" },
            {idComentario: 63 ,textoComentario: "Eres una inspiración constante.", idPosteo: 16, IdUsuario: "jazquispe", fotoPerfil: "/images/fotosPerfil/usuario4.jpg" },
            {idComentario: 64 ,textoComentario: "¿Cuál es tu próxima meta?", idPosteo: 16, IdUsuario: "mdipace", fotoPerfil: "/images/fotosPerfil/usuario5.jpg" },
        ]},
        {idPosteo: 17, nombreImagen: "/images/usuario3.4.jpeg", piePost: "El silencio habla más fuerte.", arroba: "valenflores", fotoPerfil: "/images/fotosPerfil/usuario3.jpg", comentarios:[
            {idComentario: 65 ,textoComentario: "No puedo esperar para verte de nuevo.", idPosteo: 17, IdUsuario: "micaschachtl", fotoPerfil: "/images/fotosPerfil/usuario1.jpg" },
            {idComentario: 66 ,textoComentario: "Eres un ser humano excepcional.", idPosteo: 17, IdUsuario: "valitaquispe", fotoPerfil: "/images/fotosPerfil/usuario2.jpg" },
            {idComentario: 67 ,textoComentario: "¡Tienes una sonrisa contagiosa!", idPosteo: 17, IdUsuario: "jazquispe", fotoPerfil: "/images/fotosPerfil/usuario4.jpg" },
            {idComentario: 68 ,textoComentario: "Este es un recordatorio de lo afortunado que soy.", idPosteo: 17, IdUsuario: "mdipace", fotoPerfil: "/images/fotosPerfil/usuario5.jpg" },
        ]},
        {idPosteo: 18, nombreImagen: "/images/usuario3.5.jpeg", piePost: "Momentos que valen la pena.", arroba: "valenflores", fotoPerfil: "/images/fotosPerfil/usuario3.jpg", comentarios:[
            {idComentario: 69 ,textoComentario: "¿Cuál es tu mantra de vida?", idPosteo: 18, IdUsuario: "micaschachtl", fotoPerfil: "/images/fotosPerfil/usuario1.jpg" },
            {idComentario: 70 ,textoComentario: "Tu positividad es infecciosa.", idPosteo: 18, IdUsuario: "valitaquispe", fotoPerfil: "/images/fotosPerfil/usuario2.jpg" },
            {idComentario: 71 ,textoComentario: "¡Este lugar se ve mágico!", idPosteo: 18, IdUsuario: "jazquispe", fotoPerfil: "/images/fotosPerfil/usuario4.jpg" },
            {idComentario: 72 ,textoComentario: "Eres un rayo de sol en mi vida.", idPosteo: 18, IdUsuario: "mdipace", fotoPerfil: "/images/fotosPerfil/usuario5.jpg" },
        ]},
// ------------------------------------------------ 4 COMENTARIOS PARA LOS 5 POSTS DEL USUARIO 4: @jazquispe ---------------------------------------------------------- //
        {idPosteo: 19, nombreImagen: "/images/usuario4.1.jpeg", piePost: "Siempre en busca de la belleza.", arroba: "jazquispe", fotoPerfil: "/images/fotosPerfil/usuario4.jpg", comentarios:[
            {idComentario: 73 ,textoComentario: "¿Qué aventura te espera?", idPosteo: 19, IdUsuario: "micaschachtl", fotoPerfil: "/images/fotosPerfil/usuario1.jpg" },
            {idComentario: 74 ,textoComentario: "Siempre tienes las palabras adecuadas.", idPosteo: 19, IdUsuario: "valitaquispe", fotoPerfil: "/images/fotosPerfil/usuario2.jpg" },
            {idComentario: 75 ,textoComentario: "Tu alegría es verdadera inspiración.", idPosteo: 19, IdUsuario: "valenflores", fotoPerfil: "/images/fotosPerfil/usuario3.jpg" },
            {idComentario: 76 ,textoComentario: "¡Eres increíble!", idPosteo: 19, IdUsuario: "mdipace", fotoPerfil: "/images/fotosPerfil/usuario5.jpg" },
        ]},
        {idPosteo: 20, nombreImagen: "/images/usuario4.2.jpeg", piePost: "La vida está llena de sorpresas.", arroba: "jazquispe", fotoPerfil: "/images/fotosPerfil/usuario4.jpg", comentarios:[
            {idComentario: 77 ,textoComentario: "¿Cómo mantienes la calma en todas las situaciones?", idPosteo: 20, IdUsuario: "micaschachtl", fotoPerfil: "/images/fotosPerfil/usuario1.jpg" },
            {idComentario: 78 ,textoComentario: "No puedo evitar sentirme feliz al verte feliz.", idPosteo: 20, IdUsuario: "valitaquispe", fotoPerfil: "/images/fotosPerfil/usuario2.jpg" },
            {idComentario: 79 ,textoComentario: "¡Qué buena elección de fondo!", idPosteo: 20, IdUsuario: "valenflores", fotoPerfil: "/images/fotosPerfil/usuario3.jpg" },
            {idComentario: 80 ,textoComentario: "Siempre sabes cómo divertirte.", idPosteo: 20, IdUsuario: "mdipace", fotoPerfil: "/images/fotosPerfil/usuario5.jpg" },
        ]},
        {idPosteo: 21, nombreImagen: "/images/usuario4.3.jpeg", piePost: "Creciendo cada día.", arroba: "jazquispe", fotoPerfil: "/images/fotosPerfil/usuario4.jpg", comentarios:[
            {idComentario: 81 ,textoComentario: "Tu amistad es un tesoro.", idPosteo: 21, IdUsuario: "micaschachtl", fotoPerfil: "/images/fotosPerfil/usuario1.jpg" },
            {idComentario: 82 ,textoComentario: "¿Cuál es tu lema de vida?", idPosteo: 21, IdUsuario: "valitaquispe", fotoPerfil: "/images/fotosPerfil/usuario2.jpg" },
            {idComentario: 83 ,textoComentario: "Tu positividad es un faro.", idPosteo: 21, IdUsuario: "valenflores", fotoPerfil: "/images/fotosPerfil/usuario3.jpg" },
            {idComentario: 84 ,textoComentario: "Eres una persona excepcional.", idPosteo: 21, IdUsuario: "mdipace", fotoPerfil: "/images/fotosPerfil/usuario5.jpg" },
        ]},
        {idPosteo: 22, nombreImagen: "/images/usuario4.4.jpeg", piePost: "Sintiendo la magia en el aire.", arroba: "jazquispe", fotoPerfil: "/images/fotosPerfil/usuario4.jpg", comentarios:[
            {idComentario: 85 ,textoComentario: "¿Cómo logras ser tan auténtico?", idPosteo: 22, IdUsuario: "micaschachtl", fotoPerfil: "/images/fotosPerfil/usuario1.jpg" },
            {idComentario: 86 ,textoComentario: "Esta imagen es simplemente genial.", idPosteo: 22, IdUsuario: "valitaquispe", fotoPerfil: "/images/fotosPerfil/usuario2.jpg" },
            {idComentario: 87 ,textoComentario: "¡Me haces querer explorar el mundo!", idPosteo: 22, IdUsuario: "valenflores", fotoPerfil: "/images/fotosPerfil/usuario3.jpg" },
            {idComentario: 88 ,textoComentario: "Tu espontaneidad es contagiosa.", idPosteo: 22, IdUsuario: "mdipace", fotoPerfil: "/images/fotosPerfil/usuario5.jpg" },
        ]},
        {idPosteo: 23, nombreImagen: "/images/usuario4.5.jpeg", piePost: "Dejando atrás lo que no me sirve.", arroba: "jazquispe", fotoPerfil: "/images/fotosPerfil/usuario4.jpg", comentarios:[
            {idComentario: 89 ,textoComentario: "Eres un faro de alegría.", idPosteo: 23, IdUsuario: "micaschachtl", fotoPerfil: "/images/fotosPerfil/usuario1.jpg" },
            {idComentario: 90 ,textoComentario: "¿Cuál es tu próxima gran aventura?", idPosteo: 23, IdUsuario: "valitaquispe", fotoPerfil: "/images/fotosPerfil/usuario2.jpg" },
            {idComentario: 91 ,textoComentario: "Siempre encuentras la belleza en todo.", idPosteo: 23, IdUsuario: "valenflores", fotoPerfil: "/images/fotosPerfil/usuario3.jpg" },
            {idComentario: 92 ,textoComentario: "¡Eres un verdadero líder!", idPosteo: 23, IdUsuario: "mdipace", fotoPerfil: "/images/fotosPerfil/usuario5.jpg" },
        ]},
// -------------------------------------------------- 4 COMENTARIOS PARA LOS 5 POSTS DEL USUARIO 5: @mdipace ---------------------------------------------------- //
        {idPosteo: 24, nombreImagen: "/images/usuario1.1.jpeg", piePost: "La felicidad está en el interior.", arroba: "mdipace", fotoPerfil: "/images/fotosPerfil/usuario5.jpg", comentarios:[
            {idComentario: 93 ,textoComentario: "Gracias por ser tú.", idPosteo: 24, IdUsuario: "micaschachtl", fotoPerfil: "/images/fotosPerfil/usuario1.jpg" },
            {idComentario: 94 ,textoComentario: "¿Cuál es tu secreto para la felicidad?", idPosteo: 24, IdUsuario: "valitaquispe", fotoPerfil: "/images/fotosPerfil/usuario2.jpg" },
            {idComentario: 95 ,textoComentario: "Tu creatividad no tiene límites.", idPosteo: 24, IdUsuario: "valenflores", fotoPerfil: "/images/fotosPerfil/usuario3.jpg" },
            {idComentario: 96 ,textoComentario: "Siempre estás lleno de sorpresas.", idPosteo: 24, IdUsuario: "jazquispe", fotoPerfil: "/images/fotosPerfil/usuario4.jpg" },
        ]},
        {idPosteo: 25, nombreImagen: "/images/usuario1.2.jpeg", piePost: "Despertando mi espíritu aventurero.", arroba:	"mdipace", fotoPerfil: "/images/fotosPerfil/usuario5.jpg", comentarios:[
            {idComentario: 97 ,textoComentario: "¡Eres asombroso!", idPosteo: 25, IdUsuario: "micaschachtl", fotoPerfil: "/images/fotosPerfil/usuario1.jpg" },
            {idComentario: 98 ,textoComentario: "¿Cómo haces que todo se vea tan fácil?", idPosteo: 25, IdUsuario: "valitaquispe", fotoPerfil: "/images/fotosPerfil/usuario2.jpg" },
            {idComentario: 99,textoComentario: "Este momento es para atesorar.", idPosteo: 25, IdUsuario: "valenflores", fotoPerfil: "/images/fotosPerfil/usuario3.jpg" },
            {idComentario: 100,textoComentario: "Estoy agradecido por tu amistad.", idPosteo: 25, IdUsuario: "jazquispe", fotoPerfil: "/images/fotosPerfil/usuario4.jpg" },
        ]},
        {idPosteo: 26, nombreImagen: "/images/usuario1.3.jpeg", piePost: "El amor es la respuesta.", arroba: "mdipace", fotoPerfil: "/images/fotosPerfil/usuario5.jpg", comentarios:[
            {idComentario: 101 ,textoComentario: "Tengo suerte de tenerte como amigo.", idPosteo: 26, IdUsuario: "micaschachtl", fotoPerfil: "/images/fotosPerfil/usuario1.jpg" },
            {idComentario: 102 ,textoComentario: "¿Cuál es tu secreto para verte tan bien?", idPosteo: 26, IdUsuario: "valitaquispe", fotoPerfil: "/images/fotosPerfil/usuario2.jpg" },
            {idComentario: 103 ,textoComentario: "La belleza está en los detalles.", idPosteo: 26, IdUsuario: "valenflores", fotoPerfil: "/images/fotosPerfil/usuario3.jpg" },
            {idComentario: 104,textoComentario: "¡Eres un aventurero intrépido!", idPosteo: 26, IdUsuario: "jazquispe", fotoPerfil: "/images/fotosPerfil/usuario4.jpg" },
        ]},
        {idPosteo: 27, nombreImagen: "/images/usuario1.4.jpeg", piePost: "Viviendo con gratitud.", arroba: "mdipace", fotoPerfil: "/images/fotosPerfil/usuario5.jpg", comentarios:[
            {idComentario: 105, textoComentario: "Siempre haces que las cosas se vean fáciles.", idPosteo: 27, IdUsuario: "micaschachtl", fotoPerfil: "/images/fotosPerfil/usuario1.jpg" },
            {idComentario: 106, textoComentario: "¿Qué tal ha sido tu día?", idPosteo: 27, IdUsuario: "valitaquispe", fotoPerfil: "/images/fotosPerfil/usuario2.jpg" },
            {idComentario: 107, textoComentario: "¡Me encanta esta imagen!", idPosteo: 27, IdUsuario: "valenflores", fotoPerfil: "/images/fotosPerfil/usuario3.jpg" },
            {idComentario: 108,textoComentario: "Tus fotos siempre tienen un toque especial.", idPosteo: 27, IdUsuario: "jazquispe", fotoPerfil: "/images/fotosPerfil/usuario4.jpg" },
        ]},
        {idPosteo: 28, nombreImagen: "/images/usuario1.5.jpeg", piePost: "Apreciando las pequeñas cosas.", arroba: "mdipace", fotoPerfil: "/images/fotosPerfil/usuario5.jpg", comentarios:[
            {idComentario: 109 ,textoComentario: "¡Tienes un don para esto!", idPosteo: 28, IdUsuario: "micaschachtl", fotoPerfil: "/images/fotosPerfil/usuario1.jpg" },
            {idComentario: 110 ,textoComentario: "Eres un verdadero amigo.", idPosteo: 28, IdUsuario: "valitaquispe", fotoPerfil: "/images/fotosPerfil/usuario2.jpg" },
            {idComentario: 111,textoComentario: "Tu positividad es infecciosa.", idPosteo: 28, IdUsuario: "valenflores", fotoPerfil: "/images/fotosPerfil/usuario3.jpg" },
            {idComentario: 112,textoComentario: "¡Qué buena elección de fondo!", idPosteo: 28, IdUsuario: "jazquispe", fotoPerfil: "/images/fotosPerfil/usuario4.jpg" },
        ]},
    ],
};


module.exports = grama; 