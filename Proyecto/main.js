/**************************************************** VARIABLES **************************************************/
//Creacion del array de palabras
const arregloPalabras = ["hola", "coex", "developer", "javascript", "html"];
//Referencia a objetos
const imagen = document.getElementById('imagen_ahorcado');
const palabraAvalidar = document.getElementById('contendor_palabra_a_validar');
const contedorHistorico = document.getElementById('contedor-historico');
const btnBuscarPalabra = document.getElementById('btn_buscar_palabra');
const btnJuagar = document.getElementById('btn_jugar');
const btnReset = document.getElementById('btn_reset');
const entrada = document.getElementById('entrada_letra');

//Otras variables
let palabra;
let numeroPosicionesPalabra = '';
let palabraVector = [];


/******************************************** OBTENIENDO VALORES ***********************************************/
const entradaLetras = document.querySelector('#entrada_letra').value;

/******************************************* ADICIONANDO EVENTOS ***********************************************/
btnBuscarPalabra.addEventListener('click', fBuscarPalabra);
btnJuagar.addEventListener('click', fEnter);
btnReset.addEventListener('click', fReset);
document.addEventListener("keypress", function (evt) {
  if (evt.keyCode == '13') {
    event.preventDefault()
    fEnter();
    console.log('hola');  
    document.getElementById("entrada_letra").value = "";
  }
});
/************************************************ FUNCIONES ****************************************************/
function fBuscarPalabra() {
  palabra = arregloPalabras[Math.floor(Math.random() * arregloPalabras.length)];
  for (let index = 0; index < palabra.length; index++) {
    numeroPosicionesPalabra += '__   ';
  }
  palabraAvalidar.innerHTML = `<p>${numeroPosicionesPalabra}</p>`

}

function fEnter() {
  let entradaLetras = document.querySelector('#entrada_letra').value;
  contedorHistorico.innerHTML += `<p>${entradaLetras}, </p>`
  entradaLetras.innerHTML="";
  palabraVector = palabra.split('');
  console.log(palabraVector);
  for (let i = 0; i < palabraVector.length; i++) {
    if (entradaLetras == palabraVector[i]) {
      numeroPosicionesPalabra[i]=`${entradaLetras}`
    } else {
      
    }
    
  }

  palabraAvalidar.innerHTML = `<p>${numeroPosicionesPalabra}</p>`

  let index = palabraVector.indexOf("entradaLetras");
  console.log("indice: " + index);

}


function fReset() {

}

function validarPalabra() {

}

function resultadoJuego() {

}
