// Un zoólogico pretende determinar el % de animales que hay en 3 catergorias
// de edades:
// 0 a 1 años
// Mas de un 1 año y menos de 3 años
// De de 3 años o mas.

// El zoólogico todavía no esta seguro del animal que va a estudiar.
// Si decide elefantes tomará una muestra de 20 de ellos
// Si decide jirafas tomará una muestra de 15 de ellos
// Si decide chimpanses tomará una muestra de 40 de ellos


//Definiendo variable para el tipo de animal.
let tipoAnimal; 


//Definicion de varaibles numeroDeMuestra, edad y contadores respectivos
let numeroMuestras , edad;

let contadorElefanteCeroAUno = 0;
let contadorElefanteUnoATres = 0;
let contadorElefanteTresAMas = 0;

let contadorJirafaCeroAUno = 0;
let contadorJirafaUnoATres = 0;
let contadorJirafaTresAMas = 0;

let contadorChimpanseCeroAUno = 0;
let contadorChimpanseUnoATres = 0;
let contadorChimpanseTresAMas = 0;


do{
    tipoAnimal = parseFloat(prompt('Ingrese el tipo de animal a estudiar, Asi:\n'
                                     + '" 1 " para Elefante. \n'
                                     + '" 2 " para Jirafa. \n'
                                     + '" 3 " para Chimpase. \n'
                                     + '" 0 "para salir ' ));
    if (!Number.isInteger(tipoAnimal) || tipoAnimal < 1 || tipoAnimal >3) {
        alert('Ingrese un dato valido');
    } else {
        
        switch (tipoAnimal) {

            case 1:
                numeroMuestras = 2;
                for(var p = 1; p <= numeroMuestras; p++){
                    edad = parseFloat(prompt('Ingrese la edad del animal:'));  
                    if(edad < 0){
                        alert('Error: ingrese cero o un numero positivo');
                    }else{
                        switch (true) {

                            case edad >= 0 && edad <= 1:
                                contadorElefanteCeroAUno++
                                break;

                            case edad > 1 && edad < 3:
                                contadorElefanteUnoATres++
                                break; 

                            case edad >= 3:
                                contadorElefanteTresAMas++
                                break;           
                        
                            default:
                                console.log('No ingreso a ningun intrevalo de los elefantes')
                                break;
                        }
                    }                
                    
                        
                } 
                console.log('El porcentaje de Elefantes  de  0 a 1 año es de: ' + 100 * (contadorElefanteCeroAUno / numeroMuestras) + '%')
                console.log('El porcentaje de Elefantes  mayores a 1 y menores a 3 años es de: ' + 100 * (contadorElefanteUnoATres / numeroMuestras ) + '%')
                console.log('El porcentaje de Elefantes  de  3 años o más es de: ' + 100 * (contadorElefanteTresAMas / numeroMuestras ) + '%')              
                break;

            case 2:
                numeroMuestras = 3;
                for(var p = 1; p <= numeroMuestras; p++){
                    edad = parseFloat(prompt('Ingrese la edad del animal:'));  
                    if(edad < 0){
                        alert('Error: ingrese cero o un numero positivo');
                    }else{
                        switch (true) {

                            case edad >= 0 && edad <= 1:
                                contadorJirafaCeroAUno++
                                break;

                            case edad > 1 && edad < 3:
                                contadorJirafaUnoATres++
                                break; 

                            case edad >= 3:
                                contadorJirafaTresAMas++
                                break;
                                
                                
                        
                            default:
                                console.log('No ingreso a ningun intrevalo de las Jirafas')
                                break;
                        }
                    }                
                    
                        
                } 
                console.log('El porcentaje de Jirafas  de  0 a 1 año es de: ' + 100 * (contadorJirafaCeroAUno / numeroMuestras) + '%')
                console.log('El porcentaje de Jirafas  mayores a 1 y menores a 3 años es de: ' + 100 * (contadorJirafaUnoATres / numeroMuestras ) + '%')
                console.log('El porcentaje de Jirafas  de  3 años o más es de: ' + 100 * (contadorJirafaTresAMas / numeroMuestras ) + '%')    
                break; 
            
            case 3:
                numeroMuestras = 4;
                for(var p = 1; p <= numeroMuestras; p++){
                    edad = parseFloat(prompt('Ingrese la edad del animal:'));  
                    if(edad < 0){
                        alert('Error: ingrese cero o un numero positivo');
                    }else{
                        switch (true) {

                            case edad >= 0 && edad <= 1:
                                contadorChimpanseCeroAUno++
                                break;

                            case edad > 1 && edad < 3:
                                contadorChimpanseUnoATres++
                                break; 

                            case edad >= 3:
                                contadorChimpanseTresAMas++
                                break;
                                
                                
                        
                            default:
                                console.log('No ingreso a ningun intrevalo de los Chimpanses')
                                break;
                        }
                    }                
                    
                        
                } 
                console.log('El porcentaje de Chimpanses  de  0 a 1 año es de: ' + 100 * (contadorChimpanseCeroAUno / numeroMuestras) + '%')
                console.log('El porcentaje de Chimpanses  mayores a 1 y menores a 3 años es de: ' + 100 * (contadorChimpanseUnoATres / numeroMuestras ) + '%')
                console.log('El porcentaje de Chimpanses  de  3 años o más es de: ' + 100 * (contadorChimpanseTresAMas / numeroMuestras ) + '%')
                
                break;       
        
            default:
                console.log('No tiene muestras asignadas. ');
                break;
        }

    


     

} 

}while(tipoAnimal !== 0)


