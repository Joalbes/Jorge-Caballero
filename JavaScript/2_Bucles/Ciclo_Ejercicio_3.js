//Imprimir 5 numeros aleatoris en el rango de 1 a 100

//Declaracion de variables
let contador = 1;
let numero;

//Logica
do {
    numero = Math.floor(100 * Math.random())
    if (numero < 1) {
        continue
    } else {
        console.log('Numero = ' + contador + ' : ' + numero);
        contador++;
    }

} while (contador <= 5)