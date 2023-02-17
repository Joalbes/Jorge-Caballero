//referencia a objetos
const ubicacion00 = document.querySelector('#ubicacion00');
const ubicacion01 = document.querySelector('#ubicacion01');
const ubicacion02 = document.querySelector('#ubicacion02');
const ubicacion10 = document.querySelector('#ubicacion10');
const ubicacion11 = document.querySelector('#ubicacion11');
const ubicacion12 = document.querySelector('#ubicacion12');
const ubicacion20 = document.querySelector('#ubicacion20');
const ubicacion21 = document.querySelector('#ubicacion21');
const ubicacion22 = document.querySelector('#ubicacion22');

//eventos
ubicacion00.addEventListener('click',fMarcar);

//funciones
function fMarcar() {
    ubicacion00.innerHTML = `<p class=marca>x</>`;    
}