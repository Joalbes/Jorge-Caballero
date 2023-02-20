//variables
let cont = 1;
let terminartJuego = false;
let matriz = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let variable;


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
const boton = document.querySelector("#reset")

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
boton.addEventListener('click',fReset);

//funciones
function f00Marcar() {
  if (terminartJuego) {

  } else {
    if (cont % 2 == 0) {
      ubicacion00.innerHTML = `<p class=marca>x</>`;
      matriz[0][0] = 1;
      ubicacion00.removeEventListener('click',f00Marcar);
      
    } else {
      ubicacion00.innerHTML = `<p class=marca>o</>`;
      matriz[0][0] = 2;
      ubicacion00.removeEventListener('click',f00Marcar);

    }
    cont++;
    validacion();
  }

}

function f01Marcar() {
  if (terminartJuego) {

  } else {
    if (cont % 2 == 0) {
      ubicacion01.innerHTML = `<p class=marca>x</>`;
      matriz[0][1] = 1;
      ubicacion01.removeEventListener('click',f01Marcar);
    } else {
      ubicacion01.innerHTML = `<p class=marca>o</>`;
      matriz[0][1] = 2;
      ubicacion01.removeEventListener('click',f01Marcar);
    }
    cont++;
    validacion();

  }

}

function f02Marcar() {
  if (terminartJuego) {

  } else {
    if (cont % 2 == 0) {
      ubicacion02.innerHTML = `<p class=marca>x</>`;
      matriz[0][2] = 1;
      ubicacion02.removeEventListener('click',f02Marcar);
    } else {
      ubicacion02.innerHTML = `<p class=marca>o</>`;
      matriz[0][2] = 2;
      ubicacion02.removeEventListener('click',f02Marcar);
    }
    cont++;
    validacion();
  }

}

function f10Marcar() {
  if (terminartJuego) {

  } else {
    if (cont % 2 == 0) {
      ubicacion10.innerHTML = `<p class=marca>x</>`;
      matriz[1][0] = 1;
      ubicacion10.removeEventListener('click',f10Marcar);
    } else {
      ubicacion10.innerHTML = `<p class=marca>o</>`;
      matriz[1][0] = 2;
      ubicacion10.removeEventListener('click',f10Marcar);
    }
    cont++;
    validacion();
  }

}

function f11Marcar() {
  if (terminartJuego) {

  } else {
    if (cont % 2 == 0) {
      ubicacion11.innerHTML = `<p class=marca>x</>`;
      matriz[1][1] = 1;
      ubicacion11.removeEventListener('click',f11Marcar);
    } else {
      ubicacion11.innerHTML = `<p class=marca>o</>`;
      matriz[1][1] = 2;
      ubicacion11.removeEventListener('click',f11Marcar);
    }
    cont++;
    validacion();

  }

}

function f12Marcar() {
  if (terminartJuego) {

  } else {
    if (cont % 2 == 0) {
      ubicacion12.innerHTML = `<p class=marca>x</>`;
      matriz[1][2] = 1;
      ubicacion12.removeEventListener('click',f12Marcar);
    } else {
      ubicacion12.innerHTML = `<p class=marca>o</>`;
      matriz[1][2] = 2;
      ubicacion12.removeEventListener('click',f12Marcar);
    }
    cont++;
    validacion();

  }

}

function f20Marcar() {
  if (terminartJuego) {

  } else {
    if (cont % 2 == 0) {
      ubicacion20.innerHTML = `<p class=marca>x</>`;
      matriz[2][0] = 1;
      ubicacion20.removeEventListener('click',f20Marcar);
    } else {
      ubicacion20.innerHTML = `<p class=marca>o</>`;
      matriz[2][0] = 2;
      ubicacion20.removeEventListener('click',f20Marcar);
    }
    cont++;
    validacion();

  }

}

function f21Marcar() {
  if (terminartJuego) {

  } else {

    if (cont % 2 == 0) {
      ubicacion21.innerHTML = `<p class=marca>x</>`;
      matriz[2][1] = 1;
      ubicacion21.removeEventListener('click',f21Marcar);
    } else {
      ubicacion21.innerHTML = `<p class=marca>o</>`;
      matriz[2][1] = 2;
      ubicacion21.removeEventListener('click',f21Marcar);
    }
    cont++;
    validacion();

  }
}

function f22Marcar() {
  if (terminartJuego) {

  } else {

    if (cont % 2 == 0) {
      ubicacion22.innerHTML = `<p class=marca>x</>`;
      matriz[2][2] = 1;
      ubicacion22.removeEventListener('click',f22Marcar);
    } else {
      ubicacion22.innerHTML = `<p class=marca>o</>`;
      matriz[2][2] = 2;
      ubicacion22.removeEventListener('click',f22Marcar);
    }
    cont++;
    validacion();

  }
}

//*********************************************funcion validacion triki*********************************************************//
function validacion() {

  console.log(matriz);
  if ( // valida primera fila
    matriz[0][0] == matriz[0][1] &&
    matriz[0][0] == matriz[0][2] &&
    matriz[0][0] != 0
  ) {
    terminartJuego = true;
    variable = matriz[0][0];
    if (variable == 1) {
      
    } else {
      
    }
    
    mensaje.innerHTML = `<p>Ganó ${variable}</p>`;
  }

  if ( // valida 2da fila
    matriz[1][0] == matriz[1][1] &&
    matriz[1][0] == matriz[1][2] &&
    matriz[1][0] != 0
  ) {
    terminartJuego = true;
    mensaje.innerHTML = `<p>Ganó ${matriz[1][0]}</p>`;
  }

  if ( // tercera fila
    matriz[2][0] == matriz[2][1] &&
    matriz[2][0] == matriz[2][2] &&
    matriz[2][0] != 0
  ) {
    terminartJuego = true;
    mensaje.innerHTML = `<p>Ganó ${matriz[2][0]}</p>`;
  }

  if (//primera columna
    matriz[0][0] == matriz[1][0] &&
    matriz[0][0] == matriz[2][0] &&
    matriz[0][0] != 0
  ) {
    terminartJuego = true;
    mensaje.innerHTML = `<p>Ganó ${matriz[0][0]}</p>`;
  }

  if (//2da columna
    matriz[0][1] == matriz[1][1] &&
    matriz[0][1] == matriz[2][1] &&
    matriz[0][1] != 0
  ) {
    terminartJuego = true;
    mensaje.innerHTML = `<p>Ganó${matriz[0][1]}</p>`;
  }

  if (//3ra columna
    matriz[0][2] == matriz[1][2] &&
    matriz[0][2] == matriz[2][2] &&
    matriz[0][2] != 0
  ) {
    terminartJuego = true;
    mensaje.innerHTML = `<p>Ganó${matriz[0][2]}</p>`;
  }

  if (//diagonal
    matriz[0][0] == matriz[1][1] &&
    matriz[0][0] == matriz[2][2] &&
    matriz[0][0] != 0
  ) {
    terminartJuego = true;
    mensaje.innerHTML = `<p>Ganó ${matriz[0][0]}</p>`;
  }
}

//****************funcion reset**************************************//
function fReset (){
cont = 1;
terminartJuego = false;
matriz = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
ubicacion00.innerHTML = `<p></>`;
ubicacion01.innerHTML = `<p></>`;
ubicacion02.innerHTML = `<p></>`;
ubicacion10.innerHTML = `<p></>`;
ubicacion11.innerHTML = `<p></>`;
ubicacion12.innerHTML = `<p></>`;
ubicacion20.innerHTML = `<p></>`;
ubicacion21.innerHTML = `<p></>`;
ubicacion22.innerHTML = `<p></>`;
mensaje.innerHTML = `<p></p>`;


ubicacion00.addEventListener("click", f00Marcar);
ubicacion01.addEventListener("click", f01Marcar);
ubicacion02.addEventListener("click", f02Marcar);
ubicacion10.addEventListener("click", f10Marcar);
ubicacion11.addEventListener("click", f11Marcar);
ubicacion12.addEventListener("click", f12Marcar);
ubicacion20.addEventListener("click", f20Marcar);
ubicacion21.addEventListener("click", f21Marcar);
ubicacion22.addEventListener("click", f22Marcar);


}
