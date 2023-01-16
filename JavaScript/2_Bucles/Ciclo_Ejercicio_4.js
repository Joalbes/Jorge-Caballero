// Escriba un numero entero positivo, el programa debe imprimir los numeros impares que hay 
// desde 0 hasta ese numero.

//Variables
let  residuo;
let numero = parseFloat(prompt('Ingrese un numero entero y positivo'));
if(!Number.isInteger(numero) || numero <= 0){
    alert('Error: Ingrese un numero valido.')
}else{
    for(var i = 0; i < numero; i++ ){
        residuo = i % 2;
        if(residuo != 0){
            console.log('El numero: ' + i + ' es impar');
        }
        
    }
}

//
