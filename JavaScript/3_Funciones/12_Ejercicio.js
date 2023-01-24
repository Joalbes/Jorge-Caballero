/*
Clasificacíon regalos para un matrimonio
*/

//definicion de variables
let tipoRegalo
let contadorPersonasConPresente = 0;
let contadorPersonasSinPresentes = 0;
let contadorSobresConDinero = 0;
let contadorPersonasConRegalo = 0;
let contadorPersonasConBonoParaCompra = 0;
let contadorWhile = 1;


//validacion de numero, y que clasifica segun tipo de reagalo
function validacionEntero(datoAEvaluar, limiteInferior, limiteSuperior) {


    if (datoAEvaluar < limiteInferior || datoAEvaluar > limiteSuperior || !Number.isInteger(datoAEvaluar)) {
        alert('Error: Dato no valido. Ingrese un numero entre', limiteInferior, 'y', limiteSuperior, 'y ademas que sea entero.')
        contadorWhile--;
    } else {
        
        switch (tipoRegalo) {

            case 1: //Sobre con dinero
                contadorSobresConDinero++;  
                contadorPersonasConPresente++;              
                break;

            case 2: //Regalo
                contadorPersonasConRegalo++;
                contadorPersonasConPresente++;  
                break;   
             
    
            case 3: //Bono almacen Casa Bonita
                contadorPersonasConBonoParaCompra++;  
                contadorPersonasConPresente++;                
                break; 
                
            case 4: //Olvido el regalo
                contadorPersonasSinPresentes++;          
                break; 

            default: // Sistema no entra al default por validacion de datos realizada anteriormente
                break;

                
        }
       
    }

}


do{
    tipoRegalo = parseFloat(prompt('Selecione el numero entre 1 y 3 dependiendo del tipo de regalo, asi: \n'
                 + '" 1 " Sobre con dinero \n'
                 + '" 2 " Regalo \n'
                 + '" 3 " Bono almacen Casa Bonita \n'
                 + '" 4 " Olvido el regalo. \n'));

    validacionEntero(tipoRegalo,0,4)             

    contadorWhile++;

}while(contadorWhile <= 6) // se modifica la cantidad de invitados a 5 para efectos de prueba

console.log('La cantidad de personas con un presente : ' + contadorPersonasConPresente);
console.log('La cantidad de personas sin un presente : ' + contadorPersonasSinPresentes);
console.log('La cantidad de personas que trajeron un sobre con dinero presente : ' + contadorSobresConDinero);
console.log('La cantidad de personas que trajeron un "Regalo normal" para los novios es : ' + contadorPersonasConRegalo);
console.log('La cantidad de personas que trajeroon un bono del almacen Casa Bonita es :' + contadorPersonasConBonoParaCompra);


