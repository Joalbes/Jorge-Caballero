
<<<<<<< HEAD

//variables
let numero1, numero2, opcionMenu;
let entrar = true;

//funcion de validacion nuemro diferente de cero
const noCero = (numero) => {
    if (numero == 0) {
        entrar = true;
        while (entrar) {
            if (numero == 0) {                
            numero = parseFloat(prompt('Error: Numero invalido.\nIngrese el segundo numero  diferente de cero'));
            } else {
                entrar = false
            }
        }
        return numero;
    }
}

//Validar que sea ingresado sea un numero
const esNumero = (numero) =>{
    let continuar = true
    while(continuar){
        if(isNaN(numero)){
            numero = parseFloat(prompt('Error: Numero Invalido.\n Ingrese un numero de nuevo'));
        }else{
            continuar = false            
        }
    }
    return numero;    
}

//Validacion del menu
while (entrar) {

    opcionMenu = parseFloat(prompt(`Ingrese la opcion deseada:\n
                                 1 Suma de dos números\n
                                 2 Resta de dos números\n
                                 3 Multiplicación de dos números\n
                                 4 División de dos números\n
                                 5 Potenciacion\n
                                 6 Radicacion\n
                                 0 Salir.\n`));



    //logica

    switch (opcionMenu) {

        case 0:
            entrar = false;
            break;

        case 1:
            numero1 = parseFloat(prompt('Ingrese el primer numero '));
            numero1= esNumero(numero1);
            numero2 = parseFloat(prompt('Ingrese el segundo numero '));
            numero2 = esNumero(numero2);
            console.log(`La suma de ${numero1} y ${numero2} es: ${numero1 + numero2} `);
            break;

        case 2:
            numero1 = parseFloat(prompt('Ingrese el primer numero '));
            numero1= esNumero(numero1);
            numero2 = parseFloat(prompt('Ingrese el segundo numero '));
            numero2 = esNumero(numero2);
            console.log(`La resta de ${numero1} y ${numero2} es: ${numero1 - numero2} `);
            break;

        case 3:
            numero1 = parseFloat(prompt('Ingrese el primer numero '));
            numero1= esNumero(numero1);
            numero2 = parseFloat(prompt('Ingrese el segundo numero '));
            numero2 = esNumero(numero2);
            console.log(`La multiplicación de ${numero1} por ${numero2} es: ${numero1 * numero2} `);
            break;

        case 4:
                        numero1 = parseFloat(prompt('Ingrese el primer numero '));
            numero1= esNumero(numero1);
            numero2 = parseFloat(prompt('Ingrese el segundo numero '));
            numero2 = esNumero(numero2);
            numero2 = noCero(numero2);
            console.log(`La división de ${numero1} entre ${numero2} es: ${numero1 / numero2} `);
            break;

        case 5:
            numero1 = parseFloat(prompt('Ingrese la base de la potencia '));
            numero1= esNumero(numero1);
            numero2 = parseFloat(prompt('Ingrese el expoente al que desea elevar la base '));
            numero2 = esNumero(numero2);
            console.log(`La base ${numero1} elevada a la ${numero2} es: ${Math.pow(numero1, numero2)}`);
            break;

        case 6:
            numero1 = parseFloat(prompt('Ingrese el numero al que le desea obtener la raíz cuadrada '));
            numero1= esNumero(numero1);
            console.log(`La raíz cuadrada de ${numero1} es: ${Math.sqrt(numero1)}`);
            break;

        default:
            alert('Error: opción no valida.')
            break;

=======
//validacion de numero si es entero y esta en un intervalo

function validacionEntero(datoAEvaluar, limiteInferior, limiteSuperior) {


    if (datoAEvaluar < limiteInferior || datoAEvaluar > limiteSuperior || Number.isInteger(datoAEvaluar)) {
        alert('Error: Dato no valido. Ingrese un numero entre', limiteInferior, 'y', limiteSuperior, 'y ademas que sea entero.')
    } else {
        return datoAEvaluar
        entrar = false;         
>>>>>>> 4b76020303f154635c86c97fcb211cd4b4d633a9
    }
}

