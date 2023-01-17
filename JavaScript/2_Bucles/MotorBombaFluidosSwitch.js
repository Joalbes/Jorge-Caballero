// Considera estás desarrollando un script donde trabajas con tipos de motor
// (suponemos que se trata del tipo de motor de una bomba para mover fluidos).
// Crea una función denominada dimeTipoMotor() donde pidas el tipo de motor al usuario (indicando que los valores posibles son 1, 2, 3, 4)
// y a través de un condicional switch hagas lo siguiente:

// a) Si el tipo de motor es 0, mostrar un mensaje indicando “No hay establecido un valor definido para el tipo de bomba”.

// b) Si el tipo de motor es 1, mostrar un mensaje indicando “La bomba es una bomba de agua”.

// c) Si el tipo de motor es 2, mostrar un mensaje indicando “La bomba es una bomba de gasolina”.

// d) Si el tipo de motor es 3, mostrar un mensaje indicando “La bomba es una bomba de hormigón”.

// e) Si el tipo de motor es 4,mostrar un mensaje indicando “La bomba es una bomba de pasta alimenticia”.

// f) Si no se cumple ninguno de los valores anteriores mostrar el mensaje “No existe un valor válido para tipo de bomba”.

//Definiendo variables
let tipoMotor

do{
    //Ingresando el tipo de motor
    tipoMotor = parseFloat(prompt('Ingrese un numero de 1 a 4 de la siguiente manera:\n'
     + 'Maque " 0 " si no hay establecido un valor definido para el tipo de bomba.\n "'
     + 'Maque " 1 " si no hay establecido un valor definido para el tipo de bomba.\n "'
     + 'Maque " 2 " si no hay establecido un valor definido para el tipo de bomba.\n "'
     + 'Maque " 3 " si no hay establecido un valor definido para el tipo de bomba.\n "'
     + 'Maque " 4 " si no hay establecido un valor definido para el tipo de bomba.\n "'
     + 'Maque " -1 " para salir.\n "'));

     if(!Number.isInteger(tipoMotor) || tipoMotor< -1 || tipoMotor > 4){
        alert('Error: Ingrese un numero valido');
     }else{

     switch(tipoMotor){
        case 0:
        console.log('“No hay establecido un valor definido para el tipo de bomba”');
        break;

        case 1:
        console.log('"La bomba es una bomba de agua”');

        case 2:
        console.log('“La bomba es una bomba de gasolina”');
        break;

        case 3:
        console.log('“La bomba es una bomba de hormigón”');
        break;

        case 4:
        console.log('“La bomba es una bomba de pasta alimenticia”');
        break;

        default:
        console.log('“No existe un valor válido para tipo de bomba”');
        break;
     }
    }

    }while(tipoMotor !==-1)