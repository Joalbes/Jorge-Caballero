//******************************* Creación de Arreglos Iniciales ***************************************//
//********************************************************************************************//
const arrayPalabras = ["color", "sabor", "comida", "frutas", "vegetales"];
vectorCuerpo = [
  "cabeza",
  "tronco",
  "brazo dercho",
  "brazo izquierdo",
  "pierna derecha",
  " pierna izquierda",
];
//******************************* Creación de Variables ****************************************//
//********************************************************************************************//
let letraRepetida = 0;
let gano = 0;
let contador = 0;
let hayLetra = 0;
let palabra = "";
let posicionesPalabra = "";
let contadorFallas = 0;
let vectorPalabra = [];
let vectorPosicionesPalabra = [];
let nuevasPosiciones = [];
let vectorEspacios = [];
let vectorHistorial = [];
let banderaPosiciones = 1;
//******************************* Referencias a las vistas ****************************************//
//********************************************************************************************//
const contenedorImagen = document.getElementById("imagen_ahorcado");
const contenedorPalabraAvalidar = document.getElementById("contendor_palabra_a_validar");
const contedorHistorico = document.getElementById("contedor-historico");
const btnEnviar = document.getElementById("btn_enviar");
const btnReiniciar = document.getElementById("btn_reiniciar");
const entrada = document.getElementById("entrada_letra");
const imagen = document.getElementById("imagen_ahorcado");
const cajaEntradaDatos = document.getElementById("caja_entrada_datos");
const cajaBotones = document.getElementById("botones");
//******************************* Obteniendo Valortes ****************************************//
//********************************************************************************************//
const entradaLetras = document.querySelector("#entrada_letra").value;
//******************************* Creracion de eventos ****************************************//
//********************************************************************************************//
btnEnviar.addEventListener("click", fEnter);
btnReiniciar.addEventListener("click", fReset);
//Este script permite responder cuando se pulsa enter en el documento
document.addEventListener("keypress", function (evt) {
  if (evt.keyCode == "13") {
    event.preventDefault();
    fEnter();
  }
});
//************************************************** LOGICA ****************************************************//
//**************************************************************************************************************//
//Agrega palabra de datos vacios al html
fBuscarPalabra();

//************************************************ FUNCIONES ****************************************************//
//***************************************************************************************************************//
function fBuscarPalabra() {
  //Busca la palabra en el array inicial
  palabra = arrayPalabras[Math.floor(Math.random() * arrayPalabras.length)];
  console.log(palabra);
  //Crea string de "datos vacios".
  for (let index = 0; index < palabra.length; index++) {
    posicionesPalabra += "__   ";
  }
  //Agrega string de datos vacios al contenedor correspondiente de html.
  contenedorPalabraAvalidar.innerHTML = `<p class="text-center">${posicionesPalabra}</p>`;
}

function fEnter() {
  //Lee la letra ingresada por teclado.
  let entradaLetras = document.querySelector("#entrada_letra").value;
  //Agrega letra al contenedor de historicos.
  contedorHistorico.innerHTML += `<p>${entradaLetras}, </p>`;
  //Limpia el input
  document.getElementById("entrada_letra").value = "";
  //Coloca la letra en el string de datos vacios
  //La Bandera hace que se ejecute una sola vez la creacion del vector palabra y datos vacios
  //para poder sobreescribir y que no se borren las letras ya rellenadas
  if (banderaPosiciones == 1) {
    palabraVector = palabra.split("");
    vectorPosicionesPalabra = palabraVector.map(fEspacios);
  }
  banderaPosiciones = 0;
  //Relleno el vectorPosicionesPalabra con las letras coincidentes.
  palabraVector.map(fValidarLetra);
  function fValidarLetra(currentValue, i) {
    if (currentValue == entradaLetras) {
      //Reemplazando las letras que coinciden en el arreglo de espacios
      vectorPosicionesPalabra[i] = currentValue;
      //Bandera si existe la letra en la palabra
      hayLetra = 1;
    }
  }
  //convierto el vectorPocisionesPalbra a un string
  posicionesPalabra = vectorPosicionesPalabra.toString().replace(/,/g, " ");
  console.log(posicionesPalabra);

  //Imprimo ese string en el contendor correspondiente
  contenedorPalabraAvalidar.innerHTML = `<p class="text-center font-bold text-2xl italic">${posicionesPalabra}</p>`;
  //Contador que controla el numero de vidas u opciones(son 6) que tiene el jugador
  contador++;
  //Este script me permite controlar el contador cuando hay aciertos(disminuyendolo)
  //adicionalmente imprime una parte del cuerpo si hubo fallas.
  if (hayLetra == 1) {
    contador--;
    hayLetra = 0;
  } else {
    contadorFallas++;
    imagen.innerHTML = `<img src="./assets/ahorcado${contadorFallas}.png" alt="">`

  }
  console.log(`Imprimiendo veco posiciones: ${vectorPosicionesPalabra}`);
  console.log(`contador actualizado ANTES ${contador}`);
  // Este Script nos permite validar si la palabra ya esta completa
  if (vectorPosicionesPalabra.findIndex(fTerminar) == -1) {
    contador = 6;
    console.log(`contador actualizado DURANTE ${contador}`);
    gano = 1;
  }
  console.log(`contador actualizado DESPUES ${contador}`);
  //Este script permite saber si el juego terminó y si el jugador ganó o perdió.
  if (contador == 6) {
    if (gano == 1) {
      imagen.innerHTML = `<p class="text-center font-bold text-4xl text-yellow-500 ">¡¡¡ Ganó !!!</p>`
      contenedorPalabraAvalidar.innerHTML = ``;
      contedorHistorico.innerHTML = ``;
      cajaEntradaDatos.innerHTML =``;
      cajaBotones.innerHTML = `<button id="btn_reiniciar" class=" text-center p-[1rem] bg-lime-700 rounded m-[2rem] w-[6rem]">Reiniciar</button>`
    } else {
      imagen.innerHTML = `<p class="text-center font-bold text-4xl text-rose-700 "> Perdió </p>`                          
      contenedorPalabraAvalidar.innerHTML = ``;
      contedorHistorico.innerHTML = ``;
      cajaEntradaDatos.innerHTML =``;
      cajaBotones.innerHTML = `<button id="btn_reiniciar" class=" text-center p-[1rem] bg-lime-700 rounded m-[2rem] w-[6rem]">Reiniciar</button>`
      const btnReiniciar = document.getElementById("btn_reiniciar");
      btnReiniciar.addEventListener("click", fReset);
    }
  }

  function fEspacios(element) {
    return "__";
  }
}

//Función que compara cada elemento del vectorEspacios para validar si existen elementos vacios
//Si hay elementos vacios retorna la posición del elemento vacio, si no encuentra elementos
//retorna -1.
function fTerminar(element) {
  return element == "__";
}

function fReset() {
  //Eliminar palabra
  let indexReset = arrayPalabras.indexOf(palabra);
  arrayPalabras.splice(indexReset, 1);
  console.log(arrayPalabras);  
  //reiniciar variables
   

}



// //******************************* Logica ******************************************************//
// //********************************************************************************************//
// //Extracion de la palabra para Jugar.
// let palabra = arrayPalabras[Math.floor(Math.random() * arrayPalabras.length)];
// //Eliminando la palabra del arreglo.
// let index = arrayPalabras.indexOf(palabra);
// arrayPalabras.splice(index, 1);
// //Crreando un vector con la palabra elegida.
// vectorPalabra = palabra.split("");
// //Creando un vector de guiones para el juego.
// vectorEspacios = vectorPalabra.map(fEspacios);
// function fEspacios(element) {
//   return "__";
// }
// //Escibiendo la palabra seleccionada en html
// word.innerHTML = `${palabra}`;

// //**************************** Programa Fuente **************************************************//
// //***********************************************************************************************//
// do {
//   //Ingreseo de la letra
//   let letra = prompt("Ingrese una letra");
//   //Agregando al historial
//   vectorHistorial.push(letra);
//   //validando si la letra esta contenida en la palabra que ahora es un vector
//   vectorPalabra.map(fValidarLetra);
//   function fValidarLetra(currentValue, i) {
//     if (currentValue == letra) {
//       //Reemplazando las letras que coinciden en el arreglo de espacios
//       vectorEspacios[i] = currentValue;
//       //Bandera si existe la letra en la palabra
//       hayLetra = 1;
//     }
//   }
//   //Contador que controla el numero de vidas u opciones(son 6) que tiene el jugador
//   contador++;
//   //Este script me permite controlar el contador cuando hay aciertos(disminuyendolo)
//   //adicionalmente imprime una parte del cuerpo si hubo fallas.
//   if (hayLetra == 1) {
//     contador--;
//     hayLetra = 0;
//   } else {
//     console.log(`figura añadida: ${vectorCuerpo[contadorFallas]}`);
//     contadorFallas++;
//   }
//   // Imprimiendo el vector de espacios actualizados.
//   parrafo.innerHTML = `${vectorEspacios.toString().replace(/,/g, " ")}`;
//   // Este Script nos permite validar si la palabra ya esta completa
//   if (vectorEspacios.findIndex(fTerminar) == -1) {
//     contador = 6;
//     gano = 1;
//   }
//   //Este script permite saber si el juego terminó y si el jugador ganó o perdió.
//   if (contador == 6) {
//     if (gano == 1) {
//       console.log("Juego Terminado:Ganó ");
//     } else {
//       console.log("Juego Terminado:Perdió ");
//     }
//   }
//   //Bandera que permite capturar el primer dato y luego comparar
//   letraRepetida = 1;
// } while (contador < 6);
// //Función que compara cada elemento del vectorEspacios para validar si existen elementos vacios
// //Si hay elementos vacios retorna la posición del elemento vacio, si no encuentra elementos
// //retorna -1.
// function fTerminar(element) {
//   return element == "__";
// }
