/*
Pedir tres números enteros con un valor del 1 al 10,
sacar el promedio de los tres números 
y mostrar true si el promedio es mayor a 5 
caso contrario mostrar false,
utilizar el operador ternario.
*/

// Validación de información
let numero1 = parseFloat(prompt('Ingrese un numero que este entre 1 y 10'));
if(!Number.isInteger(numero1) || numero1 < 1 || numero1 > 10){
    alert('Ingrese un numero valido');
}else{
    let numero2 = parseFloat(prompt('Ingrese un numero que este entre 1 y 10'));
    if(!Number.isInteger(numero2) || numero2 < 1 || numero2 > 10){
        alert('Ingrese un numero valido');
    }else{
        let numero3 = parseFloat(prompt('Ingrese un numero que este entre 1 y 10'));
        if(!Number.isInteger(numero3) || numero3 < 1 || numero3 > 10){
            alert('Ingrese un numero valido');
        }else{
            let promedio = (numero1 + numero2 + numero3) / 3;
            (promedio > 5)? console.log('Promedio: ' + promedio +'. True') : console.log('Promedio: ' + promedio +'. False');
        }
    }
}