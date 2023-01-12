/* Desarrolle un algortimo que reciba un numero entero y escriba si dicho numero es par o impar. */

//datos
let numero = parseFloat(prompt('Digite un numero entero'));

//logica
if(!Number.isInteger(numero) ){
    console.log('Digite un dato que sea un numero entero');
}else{
    residuo = numero % 2;
    if(residuo == 0){
        console.log('El número ' + numero + ' es par');
    }else{
        console.log('El número ' + numero + ' es impar');
    }
}
