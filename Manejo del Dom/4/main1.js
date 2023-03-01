//variables
let i = 0;
let rtaCorrestas = 0;
let rtaInrrestas = 0;


//Objeto con información:
datos = [
  {
    pregunta: "¿A cuanto esta el dolar?",
    opciones: {
      a: "4944",
      b: "5000",
      c: "5200",
      d: "3000",
    },
    respuestaCorrecta: "4944",
  },
  {
    pregunta: "¿Como se llama el profesor?",
    opciones: {
      a: "jose jose",
      b: "el mono",
      c: "juan jose",
      d: "chayanne",
    },
    respuestaCorrecta: "juan jose",
  },
  {
    pregunta:
      "¿Como se llama el metodo para ordenar un arreglo de palabras en orden alfabetico?",
    opciones: {
      a: "foreach",
      b: "sort",
      c: "map",
      d: "includes",
    },
    respuestaCorrecta: "sort",
  },
  {
    pregunta: "¿Que me devuelve un .map?",
    opciones: {
      a: "recorre el arreglo",
      b: "ordena el arreglo",
      c: "filtra el arreglo",
      d: "mapea el arreglo segun una condicion",
    },
    respuestaCorrecta: "mapea el arreglo segun una condicion",
  },
];


//referencia a  etiquetas html
const cajaPregunta = document.querySelector(`#cajapregunta`);
const cajaRespuesta = document.querySelector(`#cajarespuestas`);
const cajaInforme = document.querySelector(`#resultado`);
const siguiente = document.querySelector(`#siguiente`);




//funciones
function fSiguiente() {

  if (i >= 3) {
    setTimeout(() => {
      cajaPregunta.innerHTML = `<p>Juego Terminado</p>`;
      cajaRespuesta.innerHTML = `
                              <p id="A" class="hover:bg-orange-200">Número de preguntas:${i + 1}</p>
                              <p id="B" class="hover:bg-orange-200">Respuestas correctas:${rtaCorrestas}</p>
                              <p id="C" class="hover:bg-orange-200">Respuestas incorrectas:${rtaInrrestas}</p>
                              `;
    }, 3000);


  }


  cajaPregunta.innerHTML = `<p>${datos[i].pregunta}</p>`;
  cajaRespuesta.innerHTML = `
                          <p id="A" class="hover:bg-orange-200">${datos[i].opciones.a}</p>
                          <p id="B" class="hover:bg-orange-200">${datos[i].opciones.b}</p>
                          <p id="C" class="hover:bg-orange-200">${datos[i].opciones.c}</p>
                          <p id="D" class="hover:bg-orange-200">${datos[i].opciones.d}</p>`;

  //ACCEDIENDO A LAS ETIQUETAS DE HTML
  const etiquetaRespuestaA = document.querySelector('#A');
  const etiquetaRespuestaB = document.querySelector('#B');
  const etiquetaRespuestaC = document.querySelector('#C');
  const etiquetaRespuestaD = document.querySelector('#D');


  //GENERANDO EVENTOS CUANDO HAGA CLICK SOBRE LAS ETIQUETAS
  etiquetaRespuestaA.addEventListener('click', fValidar1);
  etiquetaRespuestaB.addEventListener('click', fValidar2);
  etiquetaRespuestaC.addEventListener('click', fValidar3);
  etiquetaRespuestaD.addEventListener('click', fValidar4);

  console.log('ejecuté los event listener de nuevo');

}




// *********************funciones para validar ****************************//
function fValidar1() {
  let respuestaA = document.querySelector('#A').innerText;
  if (respuestaA == datos[i].respuestaCorrecta) {
    alert('Respuesta correcta');
    rtaCorrestas++;
  } else {
    alert('Respuesta NO correcta');
    rtaInrrestas++;
  }
  i++;
  fSiguiente();

}

function fValidar2() {
  let respuestaB = document.querySelector('#B').innerText;
  if (respuestaB == datos[i].respuestaCorrecta) {
    alert('Respuesta correcta');
    rtaCorrestas++;
  } else {
    alert('Respuesta NO correcta');
    rtaInrrestas++;
  }
  i++;
  fSiguiente();

}

function fValidar3() {
  let respuestaC = document.querySelector('#C').innerText;
  if (respuestaC == datos[i].respuestaCorrecta) {
    alert('Respuesta correcta');
    rtaCorrestas++;
  } else {
    alert('Respuesta NO correcta');
    rtaInrrestas++;
  }
  i++;
  fSiguiente();

}

function fValidar4() {
  let respuestaD = document.querySelector('#D').innerText;
  if (respuestaD == datos[i].respuestaCorrecta) {
    alert('Respuesta correcta');
    rtaCorrestas++;
  } else {
    alert('Respuesta No correcta');
    rtaInrrestas++;  
  }
  i++;
    fSiguiente();
}

// Lógica
cajaPregunta.innerHTML = `<p>${datos[i].pregunta}</p>`;
cajaRespuesta.innerHTML = `
                          <p id="A" class="hover:bg-orange-200">${datos[i].opciones.a}</p>
                          <p id="B" class="hover:bg-orange-200">${datos[i].opciones.b}</p>
                          <p id="C" class="hover:bg-orange-200">${datos[i].opciones.c}</p>
                          <p id="D" class="hover:bg-orange-200">${datos[i].opciones.d}</p>`;


//ACCEDIENDO A LAS ETIQUETAS DE HTML
const etiquetaRespuestaA = document.querySelector('#A');
const etiquetaRespuestaB = document.querySelector('#B');
const etiquetaRespuestaC = document.querySelector('#C');
const etiquetaRespuestaD = document.querySelector('#D');


//GENERANDO EVENTOS CUANDO HAGA CLICK SOBRE LAS ETIQUETAS
etiquetaRespuestaA.addEventListener('click', fValidar1);
etiquetaRespuestaB.addEventListener('click', fValidar2);
etiquetaRespuestaC.addEventListener('click', fValidar3);
etiquetaRespuestaD.addEventListener('click', fValidar4);


