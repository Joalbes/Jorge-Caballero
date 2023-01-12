/* 
Pedir un número y decir si es un número negativo, si es positivo o cero.
*/

const numero = parseFloat(prompt('Ingrese el número: '));

if(numero == 0){
    console.log('El número "' + numero + '" es cero');
}else{
    (numero > 0)? console.log('El número "' + numero + '" es mayor que cero') : console.log('El número "' + numero + '" es  menor que cero');
}