

//Sumar N numeros positivos, mientras que el numero ingresado sea diferente de cero.

//Ingreso de los numeros
let numero;
let suma = 0;


//logica con ciclo while
do {

   numero = parseFloat(prompt('Ingrese un numero: '));
   if (numero < 0) {
      continue;
   } else {
      suma += numero; // agrega suma 
   }

   console.log(numero);

} while (numero !== 0)

//Imprimiendo salida
console.log('La suma total es: ' + suma);