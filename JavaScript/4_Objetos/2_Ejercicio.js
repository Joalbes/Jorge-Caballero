//****************notas de un grupo*****************//
//Imprimir arreglo y mostrar el promedio.
//Pedir nombre,edad, nota para crear un objeto.

//variables
let numeroEstudiantes;
let entrar = true;
let estudiantes;
let estudiante;
let valorNombre, valorEdad, valorNota;
let notaAcumulada = 0;
let vectorEstudiante = [];

while (entrar) {
    numeroEstudiantes = parseFloat(prompt('Ingrese el numero de estudiantes del grupo'));
    if (numeroEstudiantes <= 0 || !Number.isInteger(numeroEstudiantes)) {
        alert('Error: Número invalido. Ingrese un numero de estudiantes que sea entero y positivo')
    } else {
        entrar = false
    }
}

for( var i = 0; i < numeroEstudiantes; i++){
    valorNombre = prompt(`Ingrese el nombre del estudiante ${i}: `);
    valorEdad = parseFloat(prompt(`Ingrese la edad: `));
    valorNota = parseFloat(prompt(`Ingrese la nota:`));
    estudiante = {nombre : valorNombre , edad : valorEdad , nota : valorNota};
    vectorEstudiante.push(estudiante);
}
console.log(vectorEstudiante);

for(var j = 0; j < numeroEstudiantes; j++){ 
    notaAcumulada += vectorEstudiante[j].nota;    
}
console.log(`La nota promedio del grupo es: ${notaAcumulada / numeroEstudiantes}`);
console.log(vectorEstudiante);



