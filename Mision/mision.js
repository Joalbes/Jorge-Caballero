// En la escuela Pequeños Brocolitos, se desea registrar y calcular la nota
// de cada estudiante. Para calcular la nota definitiva de un estudiante y
// saber si aprueba, se toma en cuenta las notas de la siguiente manera:
// • El promedio de las notas de 3 Exámenes que corresponde al 55%
// • El promedio de las notas de 2 Trabajos que corresponde al 15%
// • La nota del examen final que será el 20%
// • El promedio de la nota de autoevaluación y co-evaluación realizada 
//   por el estudiante y el profesor respectivamente que será del 10%

// Realice un programa que permita registrar las notas que deben estar en
// un rango de 0-5. En caso de que una de las notas, se encuentre por
// fuera de este rango, se debe mostrar un mensaje que indique error.
// Luego, debe evaluar, según la nota definitiva obtenida por el estudiante,
// e informar el nivel en el que se encuentra y si aprueba el curso.
// Para aprobar el curso la nota definitiva debe ser igual o superior a 3.

// Los niveles que los estudiantes pueden alcanzar son los siguientes:
// Evalúe los requerimientos de la situación planteada y determine las
// variables y operaciones y condicionales requeridas para dar solución al
// mismo y escriba él código.

// Nivel Rango
// Superior 4.7 a 5.0
// Alto 4.0 a 4.6
// Básico 3.0 a 3.9
//  Bajo 2.0 a 2.9
//  Muy bajo 0 a 1.9

//Variables
let entrar = true
let numeroEstudiantes


//Ingresando el numero de estudiantes de la escuela.
do {
    numeroEstudiantes = parseFloat(prompt('Ingrese el numero de estudiantes de la escuela'))
    if (!Number.isInteger(numeroEstudiantes) || numeroEstudiantes <= 0) {
        alert('Error: Numero invalido. Recuerde que el numero ingresado debe ser entero y mayor que cero.')
    } else {
        entrar = false
    }

} while (entrar)
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------


for (var i = 1; i <= numeroEstudiantes; i++) {//Ingresando los datos por estudiante
let nota = 0
let notaAcumuladaTresExamenes = 0
let notaAcumuladaDosTrabajos = 0

    //Ingresando las 3 primeras notas del estudiante
    for (var j = 1; j <= 3; j++) {
        entrar = true //Entrada de la nota y validacion de la nota >= 0
        do {
            nota = parseFloat(prompt('Ingrese la nota del examen' + j + ':'))
            if (nota < 0 || nota > 5) {
                alert('Error: Numero invalido. Recuerde que el la nota debe estar entre 0 y 5.')
            } else {
                entrar = false
            }

        } while (entrar)
        notaAcumuladaTresExamenes += nota; //Var que acumula la nota de los tres primeros examenes
    }
    notaTresExamenes = 0.55 * (notaAcumuladaTresExamenes / 3); //Primera nota del 55%
    console.log(notaTresExamenes)
    //--------------------------------------------------------------------------------------------
    //--------------------------------------------------------------------------------------------

    //Ingresando las notas de los 2 trabajos    
    for (var j = 1; j <= 2; j++) {
        entrar = true //Entrada de la nota y validacion de la nota >= 0
        do {
            nota = parseFloat(prompt('Ingrese la nota del trabajo' + j + ':'))
            if (nota < 0 || nota > 5) {
                alert('Error: Numero invalido. Recuerde que el la nota debe estar entre 0 y 5.')
            } else {
                entrar = false
            }

        } while (entrar)
        notaAcumuladaDosTrabajos += nota; //Var que acumula la nota de los dos trabajos
    }
    notaDosTrabajos = 0.15 * notaAcumuladaDosTrabajos / 2; //Segunda nota del 15%
    console.log(notaAcumuladaDosTrabajos)
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------



    //Ingresando nota del examen final
    entrar = true //Entrada de la nota y validacion de la nota >= 0
    do {
        nota = parseFloat(prompt('Ingrese la nota del examen final:'))
        if (nota < 0 || nota > 5) {
            alert('Error: Numero invalido. Recuerde que el la nota debe estar entre 0 y 5.')
        } else {
            entrar = false
        }

    } while (entrar)
    notaExamenFinal = 0.2 * nota; //Tercera nota del 20%
    console.log(notaExamenFinal)
    //------------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------


    //Ingresando cuatra nota Autoevaluacion y Nota Apreciativa del profesor

    //Auto evaluacion
    entrar = true //Entrada de la nota y validacion de la nota >= 0
    do {
        nota = parseFloat(prompt('Ingrese la nota de la autoevaluacion: '))
        if (nota < 0 || nota > 5) {
            alert('Error: Numero invalido. Recuerde que el la nota debe estar entre 0 y 5.')
        } else {
            entrar = false
        }

    } while (entrar)
    notaAutoEvaluacion = 0.05 * nota; //Nota autoevaluacion que equivale al 5%
    console.log(notaAutoEvaluacion)

    //****************************************************************************************
    //coevaluacion por parte del profesor
    entrar = true //Entrada de la nota y validacion de la nota >= 0
    do {
        nota = parseFloat(prompt('Ingrese la nota de la coevaluacion asigmnada por el profesor: '))
        if (nota < 0 || nota > 5) {
            alert('Error: Numero invalido. Recuerde que el la nota debe estar entre 0 y 5.')
        } else {
            entrar = false
        }

    } while (entrar)
    notaCoEvaluacion = 0.05 * nota; //Nota coevaluacion vale el 5% 
    console.log(notaCoEvaluacion)
    //-------------------------------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------
    notaDefinitiva = notaTresExamenes + notaDosTrabajos + notaExamenFinal + notaAutoEvaluacion + notaCoEvaluacion
    console.log(notaDefinitiva);

    //--------------------------------------------------------------------------------------------------------
    //--------------------------------------------------------------------------------------------------------

    //Aprovó o no aprovó el curso.
    if (notaDefinitiva >= 3) {
        console.log('Aprobó el curso con una nota de: ' + notaDefinitiva);
    } else {
        console.log('Perdio el curso con una nota de: ' + notaDefinitiva);
    }
    //--------------------------------------------------------------------------------------------------------
    //--------------------------------------------------------------------------------------------------------
    switch (true) {// Segmentacion del estudiante por sus calificaciones

        case (notaDefinitiva >= 4.7 && notaDefinitiva <= 5.0):
            console.log('Por sus calificaciones la escuela lo cataloga como un estudiate de nivel: SUPERIOR')
            break;

        case (notaDefinitiva >= 4.0 && notaDefinitiva <= 4.6):
            console.log('Por sus calificaciones la escuela lo cataloga como un estudiate de nivel: ALTO')
            break;

        case (notaDefinitiva >= 3.0 && notaDefinitiva <= 3.9):
            console.log('Por sus calificaciones la escuela lo cataloga como un estudiate de nivel: BASICO')
            break;

        case (notaDefinitiva >= 2.0 && notaDefinitiva <= 2.9):
            console.log('Por sus calificaciones la escuela lo cataloga como un estudiate de nivel: BAJO')
            break;

        case (notaDefinitiva >= 0 && notaDefinitiva <= 1.9):
            console.log('Por sus calificaciones la escuela lo cataloga como un estudiate de nivel: MUY BAJO')
            break;

        default:
            console.log('Error: Se ha presentado una falla. Intente de nuevo')
            break;
    }


}