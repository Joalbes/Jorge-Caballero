/*
1.Desarrolle un algoritmo que permita leer 3 números enteros.
El algoritmo debe imprimir cual es el numero mayor y cual es el numero menor entre los 3.
Ademas ninguno de los 3 numeros ingresados pueden ser iguales.
En caso de que el usuario ingrese 2 numeros iguales debe mostrar una alerta.
*/


// Validadcion de datos ingresasados: Numeros enteros, mayores que cero, y diferentes entre si
let num1 = parseFloat(prompt('Digite un número entero y que sea mayor que cero:'));
if (!Number.isInteger(num1) || num1 <= 0){
    alert('El número no es entero o es menor que cero, ingrese un número valido')
}else{
    let num2 = parseFloat(prompt('Digite otro número entero y que sea mayor que cero:'));
    if(!Number.isInteger(num2) || num2 <= 0 || num1==num2){
        alert('Ingrese un numero valido: que sea entero, mayor que cero y diferente al los numeros ingresados')
    }else{
        let num3 = parseFloat(prompt('Ingrese un número entero, mayor que cero y diferente a los números anteriores: '));
        if(!Number.isInteger(num3) || num3 <= 0 || num3==num1 || num3==num2){
            alert('Ingrese un numero valido: que sea entero, mayor que cero y diferente al los numeros ingresados')
        }else{

            //Validando cual es el mayor
            if(num1 > num2 && num1 > num3){
                console.log('El numero mayor es: ' + num1);    
                        }
            if(num2 > num1 && num2 > num3){
                console.log('El numero mayor es: ' + num2);    
                        } 
            if(num3 > num1 && num3 > num2){
                console.log('El numero mayor es: ' + num3);    
                        }     
                        
            //Validando cual es el menor
            if(num1 < num2 && num1 < num3){
                console.log('El numero menor es: ' + num1);    
                        }
            if(num2 < num1 && num2 < num3){
                console.log('El numero menor es: ' + num2);    
                        } 
            if(num3 < num1 && num3 < num2){
                console.log('El numero menor es: ' + num3);    
                        } 
            let numeroPrueba = num1;                           
        } 
    }

}
