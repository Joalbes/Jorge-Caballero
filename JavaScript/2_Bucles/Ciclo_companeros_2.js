//Peso Promediio de niños,jovenes, adultos, viejos

let edad, peso;
let pesoPromedioNino = 0;
let pesoPromedioJoven = 0;
let pesoPromedioAdulto = 0;
let pesoPromedioViejo = 0;
let contNino = 0, contJoven = 0, contAdulto = 0, contViejo = 0;
let numeroPersonas = parseFloat(prompt('Ingrese el numero de personas: '))
if(!Number.isInteger(numeroPersonas) || numeroPersonas <= 0){
    alert('Error: Ingrese una edad valida');
}else{
do{
    switch(){}
}while(i < numeroPersonas)}

for(var i = 0; i < 20; i++){
    edad = parseFloat(prompt('Ingrese la edad: '));
    if(!Number.isInteger(edad) || edad < 0){
        alert('Error: Ingrese una edad valida');
    }else{
        peso = parseFloat(prompt('Ingrese el peso: '));
        if(peso <= 0){
            alert('Error: Ingrese un valor de peso valido'); 
        }else{
            if(edad >= 0 && edad <= 12 ){
                pesoPromedioNino += peso;
                contNino ++;
            }else{
                if(edad >= 13 && edad <= 29 ){
                    pesoPromedioJoven += peso;
                    contJoven++;
                }else{
                    if(edad >= 30 && edad <= 59 ){
                        pesoPromedioAdulto += peso;
                        contAdulto++;
                    }else{
                        if(edad >= 60 ){
                            pesoPromedioViejo += peso;
                            contViejo++;
                        }                        
        
                    }
                    
    
                }
                

            }
        }
    }
}
console.log('Peso promedio de los niños: ' + pesoPromedioNino / contNino );
console.log('Peso promedio de los Jovenes: ' + pesoPromedioJoven / contJoven);
console.log('Peso promedio de los Adulto: ' + pesoPromedioAdulto / contAdulto);
console.log('Peso promedio de los Viejo: ' + pesoPromedioViejo / contViejo);
