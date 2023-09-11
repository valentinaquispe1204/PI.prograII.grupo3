/*OBJETO LITERAL*/
const grama = {
    usuarios: [
        {id: 1,     arroba: "micaschachtl",   pass: 2502,     fecha: "2003-02-25 00:00:00",   dni: 44713206	},
        {id: 2,     arroba: "valitaquispe",   pass: 1204,     fecha: "2004-04-12 12:00:00",   dni: 45547793 },	
        {id: 3,	    arroba: "valenflores",    pass: 3333,     fecha: "2002-11-08 07:00:00",   dni: 44486249 },	
        {id: 4,	    arroba: "jazquispe",      pass: 131,      fecha: "2001-01-31 16:00:00",   dni: 43640097 },	
        {id: 5,	    arroba:	"mdipace",        pass: 8008,     fecha: "2003-07-18 08:03:00",   dni: 45017261 }],
    
    posteos: [
// ------ 4 COMENTARIOS PARA LOS 8 POSTS DEL USUARIO 1 -------- //
        {idPosteo: 1, nombreImagen: "/images/usuario5.1.jpeg", piePost: "Viviendo el momento.", arroba: "micaschachtl",comentarios:[
            {idComentario: 1, textoComentario: "¡Qué buena vibra en esta foto!" , idPosteo: 1, IdUsuario: 1 },
            {idComentario: 2, textoComentario: "Estás radiante en esta imagen.", idPosteo: 1, IdUsuario: 1 },
            {idComentario: 3, textoComentario: "No puedo evitar sonreír al ver esto.", idPosteo: 1, IdUsuario: 1 },
            {idComentario: 4, textoComentario: "Me encanta tu estilo, siempre impecable.", idPosteo: 1, IdUsuario: 1 },
        ]},
        {idPosteo: 2, nombreImagen: "/images/usuario5.2.jpeg", piePost: "Reflejando sobre la vida.",arroba: "micaschachtl",comentarios:[
            {idComentario: 5, textoComentario: "Eres una fuente inagotable de inspiración.", idPosteo: 2, IdUsuario: 1 },
            {idComentario: 6, textoComentario: "¿Dónde fue tomada esta foto? ", idPosteo: 2, IdUsuario: 1 },
            {idComentario: 7, textoComentario: "Tu sonrisa ilumina mi día.", idPosteo: 2, IdUsuario: 1 },
            {idComentario: 8, textoComentario: "Los recuerdos como este son invaluables.", idPosteo: 2, IdUsuario: 1 },
        ]},
        {idPosteo: 3, nombreImagen: "/images/usuario5.3.jpeg", piePost: "Sintiendo la brisa en mi piel.", arroba: "micaschachtl", comentarios:[
            {idComentario: 9, textoComentario: "Esta foto me trae nostalgia.", idPosteo: 3, IdUsuario: 1 },
            {idComentario: 10, textoComentario: "Nunca dejas de sorprenderme.", idPosteo: 3, IdUsuario: 1 },
            {idComentario: 11, textoComentario: "Estás en tu elemento natural.", idPosteo: 3, IdUsuario: 1 },
            {idComentario: 12, textoComentario: "¿Qué historia hay detrás de esta foto?", idPosteo: 3, IdUsuario: 1 },
        ]},
        {idPosteo: 4, nombreImagen: "/images/usuario5.4.jpeg", piePost: "Agradeciendo cada día.", arroba: "micaschachtl", comentarios:[
            {idComentario: 13, textoComentario: "Eres una persona increíble.", idPosteo: 4, IdUsuario: 1 },
            {idComentario: 14, textoComentario: "Tengo suerte de tenerte como amigo.", idPosteo: 4, IdUsuario: 1 },
            {idComentario: 15, textoComentario: "¿Cuál es tu secreto?", idPosteo: 4, IdUsuario: 1 },
            {idComentario: 16, textoComentario: "La belleza está en los detalles.", idPosteo: 4, IdUsuario: 1 },
        ]},
        {idPosteo: 5, nombreImagen: "/images/usuario5.5.jpeg", piePost: "En busca de nuevas aventuras.",arroba: "micaschachtl", comentarios:[
            {idComentario: 17, textoComentario: "¡Eres un aventurero intrépido!", idPosteo: 5, IdUsuario: 1 },
            {idComentario: 18, textoComentario: "Siempre haces que las cosas se vean fáciles.", idPosteo: 5, IdUsuario: 1 },
            {idComentario: 19, textoComentario: "¿Qué tal ha sido tu día?", idPosteo: 5, IdUsuario: 1 },
            {idComentario: 20, textoComentario: "¡Me encanta esta imagen!", idPosteo: 5, IdUsuario: 1 },
        ]},
        {idPosteo: 6, nombreImagen: "/images/usuario5.6.jpeg", piePost: "Explorando lo desconocido.",arroba: "micaschachtl", comentarios:[
            {idComentario: 21, textoComentario: "Tus fotos siempre tienen un toque especial.", idPosteo: 6, IdUsuario: 1 },
            {idComentario: 22, textoComentario: "¡Hagamos planes pronto!", idPosteo: 6, IdUsuario: 1 },
            {idComentario: 23, textoComentario: "Esta foto es como una obra de arte.", idPosteo: 6, IdUsuario: 1 },
            {idComentario: 24, textoComentario: "No puedo evitar envidiar tu talento.", idPosteo: 6, IdUsuario: 1 },
        ]},
        {idPosteo: 7, nombreImagen: "/images/usuario5.7.jpeg", piePost: "", arroba: "micaschachtl", comentarios:[
            {idComentario: 25, textoComentario: "Eres una fuente de positividad.", idPosteo: 7, IdUsuario: 1 },
            {idComentario: 26, textoComentario: "¡Estoy emocionado por lo que viene!", idPosteo: 7, IdUsuario: 1 },
            {idComentario: 27, textoComentario: "Deberíamos hacer esto juntos algún día.", idPosteo: 7, IdUsuario: 1 },
            {idComentario: 28, textoComentario: "¿Cómo lograste capturar este momento?", idPosteo: 7, IdUsuario: 1 },
        ]},
        {idPosteo: 8, nombreImagen: "/images/usuario5.8.jpeg", piePost: "Perdido en mis pensamientos.", arroba: "micaschachtl", comentarios:[
            {idComentario: 29, textoComentario: "Eres una persona auténtica.", idPosteo: 8, IdUsuario: 1 },
            {idComentario: 30, textoComentario: "Gracias por compartir esto con nosotros.", idPosteo: 8, IdUsuario: 1 },
            {idComentario: 31, textoComentario: "¿Dónde puedo conseguir ese atuendo?", idPosteo: 8, IdUsuario: 1 },
            {idComentario: 32, textoComentario: "¡Quiero estar ahí contigo!", idPosteo: 8, IdUsuario: 1 },
        ]},
// ------ 4 COMENTARIOS PARA LOS 5 POSTS DEL USUARIO 2 -------- //
        {idPosteo: 9, nombreImagen: "/images/usuario2.1.jpeg", piePost: "Disfrutando de la tranquilidad.", arroba: "valitaquispe", comentarios:[
            {idComentario: 33, textoComentario: "Tus fotos siempre cuentan una historia.", idPosteo: 9, IdUsuario: 2 },
            {idComentario: 34, textoComentario: "Este lugar se ve asombroso.", idPosteo: 9, IdUsuario: 2 },
            {idComentario: 35, textoComentario: "Tus aventuras son inspiradoras.", idPosteo: 9, IdUsuario: 2 },
            {idComentario: 36, textoComentario: "Siempre encuentras belleza en todo.", idPosteo: 9, IdUsuario: 2 },
        ]},
        {idPosteo: 10, nombreImagen: "/images/usuario2.2.jpeg", piePost: "El tiempo es un regalo.", arroba: "valitaquispe", comentarios:[
            {idComentario: 37, textoComentario: "Esto me hace sonreír.", idPosteo: 10, IdUsuario: 2 },
            {idComentario: 38, textoComentario: "¡Te ves fenomenal!", idPosteo: 10, IdUsuario: 2 },
            {idComentario: 39, textoComentario: "Quiero ser como tú cuando crezca.", idPosteo: 10, IdUsuario: 2 },
            {idComentario: 40, textoComentario: "¿Cuál es tu secreto para la felicidad?", idPosteo: 10, IdUsuario: 2 },
        ]},
        {idPosteo: 11, nombreImagen: "/images/usuario2.3.jpeg", piePost: "", arroba: "valitaquispe", comentarios:[
            {idComentario: 41, textoComentario: "Estoy obsesionado con esta imagen.", idPosteo: 11, IdUsuario: 2 },
            {idComentario: 42, textoComentario: "Nunca dejes de ser tú mismo.", idPosteo: 11, IdUsuario: 2 },
            {idComentario: 43, textoComentario: "Siempre tienes las mejores ideas.", idPosteo: 11, IdUsuario: 2 },
            {idComentario: 44, textoComentario: "¡Qué foto más impresionante!", idPosteo: 11, IdUsuario: 2 },
        ]},
        {idPosteo: 12, nombreImagen: "/images/usuario2.4.jpeg", piePost: "Cada día es una nueva oportunidad.", arroba: "valitaquispe", comentarios:[
            {idComentario: 45 ,textoComentario: "Eres mi espíritu animal.", idPosteo: 12, IdUsuario: 2 },
            {idComentario: 46 ,textoComentario: "¡Brillante como siempre!", idPosteo: 12, IdUsuario: 2 },
            {idComentario: 47 ,textoComentario: "Esta foto merece ser compartida.", idPosteo: 12, IdUsuario: 2 },
            {idComentario: 48 ,textoComentario: "¿Cuál es tu próxima aventura?", idPosteo: 12, IdUsuario: 2 },
        ]},
        {idPosteo: 13, nombreImagen: "/images/usuario2.5.jpeg", piePost: "En el camino de la vida.", arroba: "valitaquispe", comentarios:[
            {idComentario: 49, textoComentario: "Me haces querer viajar más.", idPosteo: 13, IdUsuario: 2 },
            {idComentario: 50, textoComentario: "¡Tienes un don para esto!", idPosteo: 13, IdUsuario: 2 },
            {idComentario: 51, textoComentario: "Eres una persona genuina.", idPosteo: 13, IdUsuario: 2 },
            {idComentario: 52, textoComentario: "No puedo dejar de mirar esta foto.", idPosteo: 13, IdUsuario: 2 },
        ]},
// ------ 4 COMENTARIOS PARA LOS 5 POSTS DEL USUARIO 3 -------- //
        {idPosteo: 14, nombreImagen: "/images/usuario3.1.jpeg", piePost: "La vida es un viaje, no un destino.", arroba: "valenflores", comentarios:[
            {idComentario: 53, textoComentario: "Estoy emocionado por lo que viene.", idPosteo: 14, IdUsuario: 3 },
            {idComentario: 54, textoComentario: "Estás haciendo grandes cosas.", idPosteo: 14, IdUsuario: 3 },
            {idComentario: 55, textoComentario: "Siempre veo el lado positivo contigo.", idPosteo: 14, IdUsuario: 3 },
            {idComentario: 56, textoComentario: "Este es un recuerdo para atesorar.", idPosteo: 14, IdUsuario: 3 },
        ]},
        {idPosteo: 15, nombreImagen: "/images/usuario3.2.jpeg", piePost: "Abrazando el presente.", arroba: "valenflores", comentarios:[
            {idComentario: 57 ,textoComentario: "¡Qué hermosa vista!", idPosteo: 15, IdUsuario: 3 },
            {idComentario: 58 ,textoComentario: "Eres un verdadero amigo.", idPosteo: 15, IdUsuario: 3 },
            {idComentario: 59 ,textoComentario: "¿Cómo mantienes esa energía?", idPosteo: 15, IdUsuario: 3 },
            {idComentario: 60 ,textoComentario: "Tu pasión es contagiosa.", idPosteo: 15, IdUsuario: 3 },
        ]},
        {idPosteo: 16, nombreImagen: "/images/usuario3.3.jpeg", piePost: "Sintiendo la energía del universo.", arroba: "valenflores", comentarios:[
            {idComentario: 61 ,textoComentario: "¡Esta imagen es épica!", idPosteo: 16, IdUsuario: 3 },
            {idComentario: 62 ,textoComentario: "Gracias por hacer mi día mejor.", idPosteo: 16, IdUsuario: 3 },
            {idComentario: 63 ,textoComentario: "Eres una inspiración constante.", idPosteo: 16, IdUsuario: 3 },
            {idComentario: 64 ,textoComentario: "¿Cuál es tu próxima meta?", idPosteo: 16, IdUsuario: 3 },
        ]},
        {idPosteo: 17, nombreImagen: "/images/usuario3.4.jpeg", piePost: "El silencio habla más fuerte.", arroba: "valenflores", comentarios:[
            {idComentario: 65 ,textoComentario: "No puedo esperar para verte de nuevo.", idPosteo: 17, IdUsuario: 3 },
            {idComentario: 66 ,textoComentario: "Eres un ser humano excepcional.", idPosteo: 17, IdUsuario: 3 },
            {idComentario: 67 ,textoComentario: "¡Tienes una sonrisa contagiosa!", idPosteo: 17, IdUsuario: 3 },
            {idComentario: 68 ,textoComentario: "Este es un recordatorio de lo afortunado que soy.", idPosteo: 17, IdUsuario: 3 },
        ]},
        {idPosteo: 18, nombreImagen: "/images/usuario3.5.jpeg", piePost: "Momentos que valen la pena.", arroba: "valenflores", comentarios:[
            {idComentario: 69 ,textoComentario: "¿Cuál es tu mantra de vida?", idPosteo: 18, IdUsuario: 3 },
            {idComentario: 70 ,textoComentario: "Tu positividad es infecciosa.", idPosteo: 18, IdUsuario: 3 },
            {idComentario: 71 ,textoComentario: "¡Este lugar se ve mágico!", idPosteo: 18, IdUsuario: 3 },
            {idComentario: 72 ,textoComentario: "Eres un rayo de sol en mi vida.", idPosteo: 18, IdUsuario: 3 },
        ]},
// ------ 4 COMENTARIOS PARA LOS 5 POSTS DEL USUARIO 4 -------- //
        {idPosteo: 19, nombreImagen: "/images/usuario4.1.jpeg", piePost: "Siempre en busca de la belleza.", arroba: "jazquispe", comentarios:[
            {idComentario: 73 ,textoComentario: "¿Qué aventura te espera?", idPosteo: 19, IdUsuario: 4 },
            {idComentario: 74 ,textoComentario: "Siempre tienes las palabras adecuadas.", idPosteo: 19, IdUsuario: 4 },
            {idComentario: 75 ,textoComentario: "Tu alegría es verdadera inspiración.", idPosteo: 19, IdUsuario: 4 },
            {idComentario: 76 ,textoComentario: "¡Eres increíble!", idPosteo: 19, IdUsuario: 4 },
        ]},
        {idPosteo: 20, nombreImagen: "/images/usuario4.2.jpeg", piePost: "La vida está llena de sorpresas.", arroba: "jazquispe", comentarios:[
            {idComentario: 77 ,textoComentario: "¿Cómo mantienes la calma en todas las situaciones?", idPosteo: 20, IdUsuario: 4 },
            {idComentario: 78 ,textoComentario: "No puedo evitar sentirme feliz al verte feliz.", idPosteo: 20, IdUsuario: 4 },
            {idComentario: 79 ,textoComentario: "¡Qué buena elección de fondo!", idPosteo: 20, IdUsuario: 4 },
            {idComentario: 80 ,textoComentario: "Siempre sabes cómo divertirte.", idPosteo: 20, IdUsuario: 4 },
        ]},
        {idPosteo: 21, nombreImagen: "/images/usuario4.3.jpeg", piePost: "Creciendo cada día.", arroba: "jazquispe", comentarios:[
            {idComentario: 81 ,textoComentario: "Tu amistad es un tesoro.", idPosteo: 21, IdUsuario: 4 },
            {idComentario: 82 ,textoComentario: "¿Cuál es tu lema de vida?", idPosteo: 21, IdUsuario: 4 },
            {idComentario: 83 ,textoComentario: "Tu positividad es un faro.", idPosteo: 21, IdUsuario: 4 },
            {idComentario: 84 ,textoComentario: "Eres una persona excepcional.", idPosteo: 21, IdUsuario: 4 },
        ]},
        {idPosteo: 22, nombreImagen: "/images/usuario4.4.jpeg", piePost: "Sintiendo la magia en el aire.", arroba: "jazquispe", comentarios:[
            {idComentario: 85 ,textoComentario: "¿Cómo logras ser tan auténtico?", idPosteo: 22, IdUsuario: 4 },
            {idComentario: 86 ,textoComentario: "Esta imagen es simplemente genial.", idPosteo: 22, IdUsuario: 4 },
            {idComentario: 87 ,textoComentario: "¡Me haces querer explorar el mundo!", idPosteo: 22, IdUsuario: 4 },
            {idComentario: 88 ,textoComentario: "Tu espontaneidad es contagiosa.", idPosteo: 22, IdUsuario: 4 },
        ]},
        {idPosteo: 23, nombreImagen: "/images/usuario4.5.jpeg", piePost: "Dejando atrás lo que no me sirve.", arroba: "jazquispe", comentarios:[
            {idComentario: 89 ,textoComentario: "Eres un faro de alegría.", idPosteo: 23, IdUsuario: 4 },
            {idComentario: 90 ,textoComentario: "¿Cuál es tu próxima gran aventura?", idPosteo: 23, IdUsuario: 4 },
            {idComentario: 91 ,textoComentario: "Siempre encuentras la belleza en todo.", idPosteo: 23, IdUsuario: 4 },
            {idComentario: 92 ,textoComentario: "¡Eres un verdadero líder!", idPosteo: 23, IdUsuario: 4 },
        ]},
// ------ 4 COMENTARIOS PARA LOS 5 POSTS DEL USUARIO 5 -------- //
        {idPosteo: 24, nombreImagen: "/images/usuario1.1.jpeg", piePost: "La felicidad está en el interior.", arroba:	"mdipace", comentarios:[
            {idComentario: 93 ,textoComentario: "Gracias por ser tú.", idPosteo: 24, IdUsuario: 5 },
            {idComentario: 94 ,textoComentario: "¿Cuál es tu secreto para la felicidad?", idPosteo: 24, IdUsuario: 5 },
            {idComentario: 95 ,textoComentario: "Tu creatividad no tiene límites.", idPosteo: 24, IdUsuario: 5 },
            {idComentario: 96 ,textoComentario: "Siempre estás lleno de sorpresas.", idPosteo: 24, IdUsuario: 5 },
        ]},
        {idPosteo: 25, nombreImagen: "/images/usuario1.2.jpeg", piePost: "Despertando mi espíritu aventurero.", arroba:	"mdipace", comentarios:[
            {idComentario: 97 ,textoComentario: "¡Eres asombroso!", idPosteo: 25, IdUsuario: 5 },
            {idComentario: 98 ,textoComentario: "¿Cómo haces que todo se vea tan fácil?", idPosteo: 25, IdUsuario: 5 },
            {idComentario: 99,textoComentario: "Este momento es para atesorar.", idPosteo: 25, IdUsuario: 5 },
            {idComentario: 100,textoComentario: "Estoy agradecido por tu amistad.", idPosteo: 25, IdUsuario: 5 },
        ]},
        {idPosteo: 26, nombreImagen: "/images/usuario1.3.jpeg", piePost: "El amor es la respuesta.", arroba: "mdipace", comentarios:[
            {idComentario: 101 ,textoComentario: "Tengo suerte de tenerte como amigo.", idPosteo: 26, IdUsuario: 5 },
            {idComentario: 102 ,textoComentario: "¿Cuál es tu secreto para verte tan bien?", idPosteo: 26, IdUsuario: 5 },
            {idComentario: 103 ,textoComentario: "La belleza está en los detalles.", idPosteo: 26, IdUsuario: 5 },
            {idComentario: 104,textoComentario: "¡Eres un aventurero intrépido!", idPosteo: 26, IdUsuario: 5 },
        ]},
        {idPosteo: 27, nombreImagen: "/images/usuario1.4.jpeg", piePost: "Viviendo con gratitud.", arroba: "mdipace", comentarios:[
            {idComentario: 105, textoComentario: "Siempre haces que las cosas se vean fáciles.", idPosteo: 27, IdUsuario: 5 },
            {idComentario: 106, textoComentario: "¿Qué tal ha sido tu día?", idPosteo: 27, IdUsuario: 5 },
            {idComentario: 107, textoComentario: "¡Me encanta esta imagen!", idPosteo: 27, IdUsuario: 5 },
            {idComentario: 108,textoComentario: "Tus fotos siempre tienen un toque especial.", idPosteo: 27, IdUsuario: 5 },
        ]},
        {idPosteo: 28, nombreImagen: "/images/usuario1.5.jpeg", piePost: "Apreciando las pequeñas cosas.", arroba: "mdipace", comentarios:[
            {idComentario: 109 ,textoComentario: "¡Tienes un don para esto!", idPosteo: 28, IdUsuario: 5 },
            {idComentario: 110 ,textoComentario: "Eres un verdadero amigo.", idPosteo: 28, IdUsuario: 5 },
            {idComentario: 111,textoComentario: "Tu positividad es infecciosa.", idPosteo: 28, IdUsuario: 5 },
            {idComentario: 112,textoComentario: "¡Qué buena elección de fondo!", idPosteo: 28, IdUsuario: 5 },
        ]},
    ],
};


module.export = grama; 