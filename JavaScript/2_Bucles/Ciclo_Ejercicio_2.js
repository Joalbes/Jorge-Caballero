//Imprimir numeros aleatorios entre 0 y 10, mientras el numero no sea igaul a  cero.

let numero
do {
    numero = Math.floor(10 * Math.random());
    if (numero == 0) {
        continue
    } else {
        console.log('Numero = ' + numero);
    }
} while (numero !== 0)