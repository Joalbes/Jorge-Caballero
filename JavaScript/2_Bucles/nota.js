
let nota;
const estudiantes = parseFloat(prompt('Ingrese el numero de estuduantes: '));

for (const i = 0; i <= estudiantes; i++) {
    // Ingresar nota del alumno
    nota = parseFloat(prompt('Ingrese la nota del estudiante: '));

    //Evaluando si el estudiante aprobó o perdió la materia
    if (nota >= 3.5) {
        console.log('Estuadiante aprobó la materia');
    } else {
        console.log('Estuadiante perdio la materia');

    }

}

