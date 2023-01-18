/*
Hallar el promerdio de calificaciones de un estudiante, teniendo en cuenta el nombre del estudiante
 y 5 notas;  calculando la nota final de acuerdo a estos porcentajes:
 Dos notas valen el 40% y tres notas valen el 60%
*/

//Definicionlet nombre;
let nota = 0;
let promedioAcumulado = 0;
let i = 1; 

nombre = prompt('Ingrese el nombre del estudiante: ');

//Logica 
do{
    nota = parseFloat(prompt('Ingrese la nota ' + i + ' entre 0 y 5 '  + ': '))
    if(isNaN(nota)  || nota < 0 || nota > 5){  
        alert('Error: La minima nota es cero y la mayor es 5, solo son validos  valores numericos ');
        i--;
    }else{
        promedioAcumulado += 0.2 * nota;        
    }  
    
    i++; 
}while(i <= 5)

//Imprimiendo Promedio
console.log('El estudiante: ' + nombre + ' tiene un promedio final de: ' + promedioAcumulado);
