//***********************Evaluando si el dato ya existe:************************************//
//******************************************************************************************//
//varibables
let numeroAProbar;
let vectorPrueba = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 10, 11, 12];
  numeroAProbar = parseFloat(prompt("Ingrese un numero:"));
    if (vectorPrueba.indexOf(numeroAProbar) == -1) {
      console.log("Se ejecuta el código");
    } else {
      console.log("NO se ejecuta.");
    }
//*****************************************************************************************//
//****************************************************************************************//
