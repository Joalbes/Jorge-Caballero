/*
Desarrolle un algoritma que reciba un numero entero e imprima si el numero es par o impar.
Ademas el numero debe ser positivo.
*/
//datos
let numero = parseFloat(prompt('Digite un numero entero y mayor que cero'));

//logica
if(!Number.isInteger(numero) || numero <=0){
    console.log('Digite un dato que sea un numero entero y mayor que cero ');
}else{
    residuo = numero % 2;
    if(residuo == 0){
        console.log('El número ' + numero + ' es par');
    }else{
        console.log('El número ' + numero + ' es impar');
    }
}
