//variables
cont = 1;
terminartJuego = false;

//referencia a objetos
const ubicacion00 = document.querySelector("#ubicacion00");
const ubicacion01 = document.querySelector("#ubicacion01");
const ubicacion02 = document.querySelector("#ubicacion02");
const ubicacion10 = document.querySelector("#ubicacion10");
const ubicacion11 = document.querySelector("#ubicacion11");
const ubicacion12 = document.querySelector("#ubicacion12");
const ubicacion20 = document.querySelector("#ubicacion20");
const ubicacion21 = document.querySelector("#ubicacion21");
const ubicacion22 = document.querySelector("#ubicacion22");
const mensaje = document.querySelector("#resultado");

//eventos
ubicacion00.addEventListener("click", f00Marcar);
ubicacion01.addEventListener("click", f01Marcar);
ubicacion02.addEventListener("click", f02Marcar);
ubicacion10.addEventListener("click", f10Marcar);
ubicacion11.addEventListener("click", f11Marcar);
ubicacion12.addEventListener("click", f12Marcar);
ubicacion20.addEventListener("click", f20Marcar);
ubicacion21.addEventListener("click", f21Marcar);
ubicacion22.addEventListener("click", f22Marcar);

//funciones
function f00Marcar() {
  if (cont % 2 == 0) {
    ubicacion00.innerHTML = `<p class=marca>x</>`;
  } else {
    ubicacion00.innerHTML = `<p class=marca>o</>`;
  }
  cont++;
  validacion();
}

function f01Marcar() {
  if (cont % 2 == 0) {
    ubicacion01.innerHTML = `<p class=marca>x</>`;
  } else {
    ubicacion01.innerHTML = `<p class=marca>o</>`;
  }
  cont++;
  //validacion();
}

function f02Marcar() {
  if (cont % 2 == 0) {
    ubicacion02.innerHTML = `<p class=marca>x</>`;
  } else {
    ubicacion02.innerHTML = `<p class=marca>o</>`;
  }
  cont++;
  //validacion();
}

function f10Marcar() {
  if (cont % 2 == 0) {
    ubicacion10.innerHTML = `<p class=marca>x</>`;
  } else {
    ubicacion10.innerHTML = `<p class=marca>o</>`;
  }
  cont++;
  //validacion();
}

function f11Marcar() {
  if (cont % 2 == 0) {
    ubicacion11.innerHTML = `<p class=marca>x</>`;
  } else {
    ubicacion11.innerHTML = `<p class=marca>o</>`;
  }
  cont++;
  //alidacion();
}

function f12Marcar() {
  if (cont % 2 == 0) {
    ubicacion12.innerHTML = `<p class=marca>x</>`;
  } else {
    ubicacion12.innerHTML = `<p class=marca>o</>`;
  }
  cont++;
  //validacion();
}

function f20Marcar() {
  if (cont % 2 == 0) {
    ubicacion20.innerHTML = `<p class=marca>x</>`;
  } else {
    ubicacion20.innerHTML = `<p class=marca>o</>`;
  }
  cont++;
  //validacion();
}

function f21Marcar() {
  if (cont % 2 == 0) {
    ubicacion21.innerHTML = `<p class=marca>x</>`;
  } else {
    ubicacion21.innerHTML = `<p class=marca>o</>`;
  }
  cont++;
  //validacion();
}

function f22Marcar() {
  if (cont % 2 == 0) {
    ubicacion22.innerHTML = `<p class=marca>x</>`;
  } else {
    ubicacion22.innerHTML = `<p class=marca>o</>`;
  }
  cont++;
  //validacion();
}

//funcion validacion triki
function validacion() {
  const ubicacion00V = document.querySelector('#ubicacion00').value;
  const ubicacion01V = document.querySelector('#ubicacion01').value;
  const ubicacion02V = document.querySelector('#ubicacion02').value;
  const ubicacion10V = document.querySelector('#ubicacion10').value;
  const ubicacion11V = document.querySelector('#ubicacion11').value;
  const ubicacion12V = document.querySelector('#ubicacion12').value;
  const ubicacion20V = document.querySelector('#ubicacion20').value;
  const ubicacion21V = document.querySelector('#ubicacion21').value;
  const ubicacion22V = document.querySelector('#ubicacion22').value;

  
  console.log(`${ubicacion00V}`);

//   if (
//     ubicacion00V == ubicacion01V &&
//     ubicacion00V == ubicacion02V 
//   ) {
//     terminarJuego = true;
//     mensaje.innerHTML = `<p>Ganó</p>`;
//   }

//   if (
//     ubicacion10.value == ubicacion11.value &&
//     ubicacion10.value == ubicacion12.value
//   ) {
//     terminarJuego = true;
//     mensaje.innerHTML = `<p>Ganó</p>`;
//   }

//   if (
//     ubicacion20.value == ubicacion21.value &&
//     ubicacion20.value == ubicacion22.value
//   ) {
//     terminarJuego = true;
//     mensaje.innerHTML = `<p>Ganó</p>`;
//   }

//   if (
//     ubicacion00.value == ubicacion10.value &&
//     ubicacion00.value == ubicacion20.value
//   ) {
//     terminarJuego = true;
//     mensaje.innerHTML = `<p>Ganó</p>`;
//   }

//   if (
//     ubicacion01.value == ubicacion11.value &&
//     ubicacion01.value == ubicacion21.value
//   ) {
//     terminarJuego = true;
//     mensaje.innerHTML = `<p>Ganó</p>`;
//   }

//   if (
//     ubicacion02.value == ubicacion12.value &&
//     ubicacion02.value == ubicacion22.value
//   ) {
//     terminarJuego = true;
//     mensaje.innerHTML = `<p>Ganó</p>`;
//   }

//   if (
//     ubicacion00.value == ubicacion11.value &&
//     ubicacion00.value == ubicacion22.value
//   ) {
//     terminarJuego = true;
//     mensaje.innerHTML = `<h1>Ganó</h1>`;
//   }
}
