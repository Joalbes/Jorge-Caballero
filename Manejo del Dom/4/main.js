//variables
let i = 0;
let continuar = true;



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
const cajaFooter = document.querySelector(`#cajaresultadoboton`);
const validar = document.querySelector(`#validar`);

//eventos
validar.addEventListener("click", fvalidar); 

//funciones
function fvalidar() {
i++;
if (validar) {
  
} else {
  
}
}
console.log(i);


  
do {  

  switch (i) {
    case 0:
      console.log("entre a la opcion 0");
      cajaPregunta.innerHTML = `<p>${datos[i].pregunta}</p>`;
      cajaRespuesta.innerHTML = `
    <p class="hover:bg-orange-200">a. ${datos[i].opciones.a}</p>
    <p class="hover:bg-orange-200">b. ${datos[i].opciones.b}</p>
    <p class="hover:bg-orange-200">c. ${datos[i].opciones.c}</p>
    <p class="hover:bg-orange-200">d. ${datos[i].opciones.d}</p>`;
      break;

    case 1:
      console.log("entre a la opcion 1");
      cajaPregunta.innerHTML = `<p>${datos[i].pregunta}</p>`;
      cajaRespuesta.innerHTML = `
    <p class="hover:bg-orange-200">a. ${datos[i].opciones.a}</p>
    <p class="hover:bg-orange-200">b. ${datos[i].opciones.b}</p>
    <p class="hover:bg-orange-200">c. ${datos[i].opciones.c}</p>
    <p class="hover:bg-orange-200">d. ${datos[i].opciones.d}</p>`;
      break;

    case 2:
      console.log("entre a la opcion 2");
      cajaPregunta.innerHTML = `<p>${datos[i].pregunta}</p>`;
      cajaRespuesta.innerHTML = `
    <p class="hover:bg-orange-200">a. ${datos[i].opciones.a}</p>
    <p class="hover:bg-orange-200">b. ${datos[i].opciones.b}</p>
    <p class="hover:bg-orange-200">c. ${datos[i].opciones.c}</p>
    <p class="hover:bg-orange-200">d. ${datos[i].opciones.d}</p>`;
      break;

    case 3:
      console.log("entre a la opcion 3");
      cajaPregunta.innerHTML = `<p>${datos[i].pregunta}</p>`;
      cajaRespuesta.innerHTML = `
    <p class="hover:bg-orange-200">a. ${datos[i].opciones.a}</p>
    <p class="hover:bg-orange-200">b. ${datos[i].opciones.b}</p>
    <p class="hover:bg-orange-200">c. ${datos[i].opciones.c}</p>
    <p class="hover:bg-orange-200">d. ${datos[i].opciones.d}</p>`;
      break;

    default:
      continuar = false;
      break;
  }

} while (i <=5);
