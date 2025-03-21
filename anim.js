// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "ERES PARA MI", time: 18 },
  { text: "ME LO HA DICHO EL VIENTO", time: 22 },
  { text: "ERES PARA MI", time: 24 },
  { text: "LO OIGO TODO EL TIEMPO", time: 27 },
  { text: "ERES PARA MI", time: 28 },
  { text: "ME LO HA DICHO EL VIENTO", time: 31 },
  { text: "ERES PARA MI", time: 34 },
  { text: "LA SOMBRA QUE PASA LA LUZ QUE ME ABRAZA", time: 39 },
  { text: "TUS OJOS MIRANDOME", time: 41 },
  { text: "LA CALLE QUE CANTA SU CANTO DE DIARIO EL MUNDO MOVIENDOSE", time: 44 },
  { text: "Y YO SE QUE TIENES MIEDO", time: 49 },
  { text: "Y NO ES UN BUEN MOMENTO PARA TI", time: 52 },
  { text: "Y PARA ESTO QUE NOS VIENE SUCEDIENDO", time: 55 },
  { text: "PERO ERES PARA MI", time: 60 },
  { text: "ME LO HA DICHO EL VIENTO", time: 64 },
  { text: "ERES PARA MI", time: 66 },
  { text: "LO OIGO TODO EL TIEMPO", time: 68 },
  { text: "ERES PARA MI", time: 71 },
  { text: "ME LO HA DICHO EL VIENTO", time: 74 },
  { text: "ERES PARA MI", time: 76 },
  { text: "EL ESPEJO QUE DA SU REFLEJO EN TODO", time: 81 },
  { text: "LO PINTA TAL COMO ES", time: 84 },
  { text: "MI CUERPO QUE NO TIENE PESO SI ESCUCHO TU VOZ LLAMANDOME", time: 85 },
  { text: "Y YO SE QUE TIENES MIEDO", time: 92 },
  { text: "Y NO ES UN BUEN MOMENTO PARA TI", time: 93 },
  { text: "Y PARA ESTO QUE NOS VIENE SUCEDIENDO", time: 97 },
  { text: "TEMES SENTIR MAS DE LA CUENTA", time: 103 },
  { text: "EL CORAZON ES UN MUSCULO SI NO LATE, REVIENTA", time: 106 },
  { text: "EXTRAÑO MIRARTE DE LEJOS", time: 108 },
  { text: "DE HACERNOS LOS TONTOS PARECEMOS TAN VIEJOS", time: 110 },
  { text: "TIEMPO, QUIERES MAS TIEMPO", time: 113 },
  { text: "MIRAME LA PIEL", time: 115 },
  { text: "NO VES ACASO LO QUE SIENTO", time: 117 },
  { text: "TU ERES PARA MI YO SOY PARA TI", time: 118 },
  { text: "EL VIENTO ME LO DIJO CON UN SOPLECILLO", time: 120 },
  { text: "Y YO SE QUE TIENES MIEDO", time: 123 },
  { text: "Y NO ES UN BUEN MOMENTO PARA TI", time: 126 },
  { text: "Y PARA ESTO QUE NOS VIENE SUCEDIENDO", time: 129 },
  { text: "PERO ERES PARA MI", time: 134 },
  { text: "ME LO HA DICHO EL VIENTO", time: 138 },
  { text: "ERES PARA MI", time: 140 },
  { text: "LO OIGO TODO EL TIEMPO", time: 143 },
  { text: "ERES PARA MI", time: 145 },
  { text: "ME LO HA DICHO EL VIENTO", time: 148 },
  { text: "ERES PARA MI", time: 150 },
  { text: "PERO ERES PARA MI", time: 155 },
  { text: "ERES PARA MI", time: 160 },
  { text: "LO OIGO TODO EL TIEMPO", time: 163 },
  { text: "ERES PARA MI", time: 165 },
  { text: "ME LO HA DICHO EL VIENTO", time: 168 },
  { text: "ERES PARA MI", time: 170 },
  { text: "LO OIGO TODO EL TIEMPO", time: 175 },
  { text: "ERES PARA MI", time: 180 },

];


// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
