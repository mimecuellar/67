// =====================================================
// RULETA ARTÍSTICA
// Laboratorio de Aplicaciones II • 2026
// =====================================================


// -----------------------------------------------------
// 1. BANCO DE PREGUNTAS
// -----------------------------------------------------

const preguntas = [

  {
    categoria: "🎵 Música",
    tema: "Historia de la música",
    pregunta: "¿Qué compositor creó la famosa Novena Sinfonía?",
    opciones: [
      "Wolfgang Amadeus Mozart",
      "Ludwig van Beethoven",
      "Frédéric Chopin",
      "Antonio Vivaldi"
    ],
    correcta: 1
  },

  {
    categoria: "🎬 Cine",
    tema: "Historia del cine",
    pregunta: "¿Quién dirigió la película Titanic de 1997?",
    opciones: [
      "Steven Spielberg",
      "Tim Burton",
      "James Cameron",
      "Christopher Nolan"
    ],
    correcta: 2
  },

  {
    categoria: "💃 Danza",
    tema: "Folclore argentino",
    pregunta: "¿Cuál de estos ritmos pertenece al folclore argentino?",
    opciones: [
      "Chacarera",
      "Flamenco",
      "Vals vienés",
      "Samba brasileña"
    ],
    correcta: 0
  },

  {
    categoria: "🎭 Teatro",
    tema: "Dramaturgia",
    pregunta: "¿Quién escribió la tragedia Romeo y Julieta?",
    opciones: [
      "Federico García Lorca",
      "William Shakespeare",
      "Molière",
      "Sófocles"
    ],
    correcta: 1
  },

  {
    categoria: "🎨 Pintura",
    tema: "Arte universal",
    pregunta: "¿Quién pintó La noche estrellada?",
    opciones: [
      "Claude Monet",
      "Pablo Picasso",
      "Vincent van Gogh",
      "Salvador Dalí"
    ],
    correcta: 2
  },

  {
    categoria: "📚 Literatura",
    tema: "Literatura argentina",
    pregunta: "¿Quién escribió El Aleph?",
    opciones: [
      "Julio Cortázar",
      "Jorge Luis Borges",
      "Ernesto Sábato",
      "José Hernández"
    ],
    correcta: 1
  },

  {
    categoria: "📷 Fotografía",
    tema: "Lenguaje visual",
    pregunta: "¿Qué permite controlar la apertura del diafragma en una cámara?",
    opciones: [
      "La cantidad de luz que entra",
      "El sonido de la fotografía",
      "El peso de la cámara",
      "El color del papel"
    ],
    correcta: 0
  },

  {
    categoria: "🎵 Música",
    tema: "Instrumentos musicales",
    pregunta: "¿A qué familia pertenece el violín?",
    opciones: [
      "Viento",
      "Percusión",
      "Cuerda frotada",
      "Cuerda pulsada"
    ],
    correcta: 2
  },

  {
    categoria: "🎬 Cine",
    tema: "Cine de animación",
    pregunta: "¿Qué director es conocido por películas como El cadáver de la novia y El joven manos de tijera?",
    opciones: [
      "Tim Burton",
      "Wes Anderson",
      "Guillermo del Toro",
      "Quentin Tarantino"
    ],
    correcta: 0
  },

  {
    categoria: "💃 Danza",
    tema: "Danza clásica",
    pregunta: "¿Cuál de estos elementos es característico del ballet clásico?",
    opciones: [
      "El zapateo de malambo",
      "Las zapatillas de punta",
      "El uso obligatorio de castañuelas",
      "La improvisación con boleadoras"
    ],
    correcta: 1
  },

  {
    categoria: "🎨 Pintura",
    tema: "Movimientos artísticos",
    pregunta: "¿Qué movimiento artístico buscaba representar sueños y el inconsciente?",
    opciones: [
      "Realismo",
      "Neoclasicismo",
      "Surrealismo",
      "Impresionismo"
    ],
    correcta: 2
  },

  {
    categoria: "📚 Literatura",
    tema: "Poesía",
    pregunta: "¿Qué es una metáfora en literatura?",
    opciones: [
      "Una comparación directa mediante el uso de como",
      "Una expresión que identifica una cosa con otra por semejanza",
      "Una repetición de sonidos al final de los versos",
      "Una descripción exclusivamente científica"
    ],
    correcta: 1
  },

  {
    categoria: "🎭 Teatro",
    tema: "Elementos teatrales",
    pregunta: "¿Cómo se llama el texto que indica movimientos, gestos y acciones de los personajes?",
    opciones: [
      "Escenografía",
      "Acotación",
      "Monólogo",
      "Telón"
    ],
    correcta: 1
  },

  {
    categoria: "🎵 Música",
    tema: "Géneros musicales",
    pregunta: "¿Cuál de estos instrumentos es característico del chamamé correntino?",
    opciones: [
      "Arpa celta",
      "Acordeón",
      "Sitar",
      "Guitarra eléctrica como instrumento obligatorio"
    ],
    correcta: 1
  },

  {
    categoria: "🎬 Cine",
    tema: "Lenguaje cinematográfico",
    pregunta: "¿Qué es un primer plano en el cine?",
    opciones: [
      "Una toma que muestra un detalle o el rostro de cerca",
      "Una escena filmada exclusivamente desde arriba",
      "Una toma de toda una ciudad desde lejos",
      "La última escena de una película"
    ],
    correcta: 0
  },

  {
    categoria: "🎨 Pintura",
    tema: "Técnicas artísticas",
    pregunta: "¿Qué técnica utiliza pigmentos mezclados con agua y goma arábiga?",
    opciones: [
      "Óleo",
      "Acuarela",
      "Fresco",
      "Grabado"
    ],
    correcta: 1
  },

  {
    categoria: "💃 Danza",
    tema: "Folclore",
    pregunta: "¿Qué elemento es característico de muchas danzas folclóricas argentinas en pareja?",
    opciones: [
      "La interacción coreográfica entre los bailarines",
      "La ausencia total de música",
      "El uso obligatorio de máscaras",
      "La ejecución sin desplazamientos"
    ],
    correcta: 0
  },

  {
    categoria: "📚 Literatura",
    tema: "Géneros literarios",
    pregunta: "¿Qué caracteriza principalmente al género dramático?",
    opciones: [
      "La exposición de datos científicos",
      "La representación de acciones mediante diálogos",
      "La explicación de instrucciones técnicas",
      "La ausencia de personajes"
    ],
    correcta: 1
  },

  {
    categoria: "🎭 Teatro",
    tema: "Historia del teatro",
    pregunta: "¿En qué civilización se originó el teatro occidental clásico?",
    opciones: [
      "Antigua Grecia",
      "Antiguo Egipto exclusivamente",
      "Imperio azteca",
      "Mesopotamia exclusivamente"
    ],
    correcta: 0
  },

  {
    categoria: "📷 Fotografía",
    tema: "Composición",
    pregunta: "¿Para qué se utiliza la regla de los tercios?",
    opciones: [
      "Para organizar los elementos de una imagen",
      "Para aumentar automáticamente la resolución",
      "Para eliminar todos los colores",
      "Para grabar sonidos"
    ],
    correcta: 0
  }

];


// -----------------------------------------------------
// 2. VARIABLES
// -----------------------------------------------------

let puntaje = 0;
let cantidadPreguntas = 0;
let preguntaActual = null;
let rotacionActual = 0;
let preguntasUsadas = [];


// -----------------------------------------------------
// 3. ELEMENTOS DEL HTML
// -----------------------------------------------------

const ruleta = document.getElementById("ruleta");
const botonGirar = document.getElementById("botonGirar");

const tarjetaPregunta = document.getElementById("tarjetaPregunta");
const categoria = document.getElementById("categoria");
const tema = document.getElementById("tema");
const pregunta = document.getElementById("pregunta");
const opciones = document.getElementById("opciones");
const resultado = document.getElementById("resultado");

const marcadorPuntaje = document.getElementById("puntaje");
const contador = document.getElementById("contador");


// -----------------------------------------------------
// 4. PREPARAR LA RULETA
// -----------------------------------------------------

ruleta.querySelector(".centro").textContent = "ARTE";


// -----------------------------------------------------
// 5. GIRAR LA RULETA
// -----------------------------------------------------

botonGirar.addEventListener("click", function () {

  botonGirar.disabled = true;

  resultado.textContent = "";

  // Grados aleatorios

  const gradosAleatorios = Math.floor(Math.random() * 360);

  // Varias vueltas completas

  rotacionActual += 1440 + gradosAleatorios;

  // Girar la ruleta

  ruleta.style.transform = `rotate(${rotacionActual}deg)`;

  // Esperar a que termine la animación

  setTimeout(function () {

    seleccionarPregunta();

    botonGirar.disabled = false;

  }, 4000);

});


// -----------------------------------------------------
// 6. SELECCIONAR UNA PREGUNTA ALEATORIA
// -----------------------------------------------------

function seleccionarPregunta() {

  // Reiniciar el banco cuando ya se usaron todas

  if (preguntasUsadas.length === preguntas.length) {
    preguntasUsadas = [];
  }

  let numeroAleatorio;

  do {

    numeroAleatorio = Math.floor(
      Math.random() * preguntas.length
    );

  } while (preguntasUsadas.includes(numeroAleatorio));

  preguntasUsadas.push(numeroAleatorio);

  preguntaActual = preguntas[numeroAleatorio];

  mostrarPregunta();

}


// -----------------------------------------------------
// 7. MOSTRAR LA PREGUNTA
// -----------------------------------------------------

function mostrarPregunta() {

  tarjetaPregunta.classList.remove("oculto");

  categoria.textContent = preguntaActual.categoria;

  tema.textContent = preguntaActual.tema;

  pregunta.textContent = preguntaActual.pregunta;

  resultado.textContent = "";

  // Eliminar opciones anteriores

  opciones.innerHTML = "";

  // Crear los botones de respuesta

  preguntaActual.opciones.forEach(function (opcion, indice) {

    const boton = document.createElement("button");

    boton.textContent = opcion;

    boton.classList.add("opcion");

    boton.addEventListener("click", function () {

      comprobarRespuesta(indice);

    });

    opciones.appendChild(boton);

  });

  // Mostrar la tarjeta

  tarjetaPregunta.scrollIntoView({
    behavior: "smooth",
    block: "nearest"
  });

}


// -----------------------------------------------------
// 8. COMPROBAR RESPUESTA
// -----------------------------------------------------

function comprobarRespuesta(indiceSeleccionado) {

  cantidadPreguntas++;

  const botones = document.querySelectorAll(".opcion");

  // Evitar responder más de una vez

  botones.forEach(function (boton) {

    boton.disabled = true;

  });

  if (indiceSeleccionado === preguntaActual.correcta) {

    resultado.textContent = "¡Respuesta correcta! +100 puntos";

    puntaje += 100;

  } else {

    resultado.textContent =
      "Respuesta incorrecta. La respuesta correcta era: " +
      preguntaActual.opciones[preguntaActual.correcta];

  }

  actualizarMarcador();

}


// -----------------------------------------------------
// 9. ACTUALIZAR MARCADOR
// -----------------------------------------------------

function actualizarMarcador() {

  marcadorPuntaje.textContent = puntaje;

  contador.textContent = cantidadPreguntas;

    }
