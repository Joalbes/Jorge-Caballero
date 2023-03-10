/**************************************************** VARIABLES **************************************************/
//Creacion del array de palabras
const arregloPalabras = ["hola","coex","developer","javascript","html"];
//Referencia a objetos
const imagen = document.getElementById('imagen_ahorcado');
const palabraAvalidar = document.getElementById('contendor_palabra_a_validar');
const contedorHistorico = document.getElementById('contedor-historico');
const btnBuscarPalabra = document.getElementById('');
const btnJuagar = document.getElementById('btn_jugar');
const btnReset = document.getElementById('btn_reset');
//Otras variables
let palabra;
let numeroPosicionesPalabra;


/******************************************** OBTENIENDO VALORES ***********************************************/
const entradaLetras = document.querySelector('#contedor-historico').value;
/******************************************* ADICIONANDO EVENTOS ***********************************************/
btnBuscarPalabra.addEventListener('click',fBuscarPalabra);
btnJuagar.addEventListener('click',fJugar);
btnReset.addEventListener('click',fReset);
/************************************************ FUNCIONES ****************************************************/
function fBuscarPalabra(){
    palabra = arregloPalabras[Math.floor(Math.random() * arregloPalabras.length)];
    




}

function fJugar(){

}

function fReset() {
    
}

function validarPalabra() {
    
}

function resultadoJuego() {
    
}

