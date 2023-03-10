/**************************************************** VARIABLES **************************************************/
//Creacion del array de palabras
const arregloPalabras = ["hola","coex","developer","javascript","html"];
//Referencia a objetos
const imagen = document.getElementById('imagen_ahorcado');
const palabraAvalidar = document.getElementById('contendor_palabra_a_validar');
const contedorHistorico = document.getElementById('contedor-historico');
const btnBuscarPalabra = document.getElementById('btn_buscar_palabra');
const btnJuagar = document.getElementById('btn_jugar');
const btnReset = document.getElementById('btn_reset');
//Otras variables
let palabra;
let numeroPosicionesPalabra = '';


/******************************************** OBTENIENDO VALORES ***********************************************/
const entradaLetras = document.querySelector('#entrada_letra').value;
/******************************************* ADICIONANDO EVENTOS ***********************************************/
btnBuscarPalabra.addEventListener('click',fBuscarPalabra);
btnJuagar.addEventListener('click',fEnter);
btnReset.addEventListener('click',fReset);
/************************************************ FUNCIONES ****************************************************/
function fBuscarPalabra(){
     palabra = arregloPalabras[Math.floor(Math.random() * arregloPalabras.length)];
      for (let index = 0; index < palabra.length; index++) {
        numeroPosicionesPalabra +='__   ';       
        }
        palabraAvalidar.innerHTML = `<p>${numeroPosicionesPalabra}</p>`
                                 
}

function fEnter(){
    contedorHistorico.innerHTML = `<p>${entradaLetras}</p>`

}

function fReset() {
    
}

function validarPalabra() {
    
}

function resultadoJuego() {
    
}

