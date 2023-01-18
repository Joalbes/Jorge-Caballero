/*desarrolle un algoritmo para saber cuantos niños,niñas,jovenes hombres,jovenes mujeres, 
adultos hombres, adultos mujeres, ancianos hombres ,ancianos mujeres
hay en una fundacion.(hacerlo con 10 personas)
La cual controla pacientes con distintos tipos de enfermedades terminales siendo estas cancer,
enfermedades del corazon, enfermedades pulmonares.
Imprima cual es el porcentaje de cada uno en cada enfermedad,
basandose en la siguiente tabla de edades.
Los niños estan entre 0-12 años
jovenes estan entre 13-19 años
adultos estan entre 20-50 años
ancianos estan de 51 años en adelante.
*/

let ninosCancer = 0
let ninosCorazon = 0
let ninosPulmonar = 0
let ninos = 0

let jovenesCancer = 0
let jovenesCorazon = 0
let jovenesPulmonar = 0
let jovenes = 0

let adultosCancer = 0
let adultosCorazon = 0
let adultosPulmonar = 0
let adultos = 0

let ancianosCancer = 0
let ancianosCorazon = 0
let ancianosPulmonar = 0
let ancianos = 0


let numeroPersonas = 1
let edad
let enfermedad

do {
    edad = parseFloat(prompt('Ingrese la edad en un numero entero'))
    if (!Number.isInteger(edad) || edad < 0) {
        alert('Error: Dato invalido, intente nuevamente')
    } else {
        enfermedad = parseFloat(prompt('Ingrese el tipo de enfermedad que posee asi: " 1 " Para cancer. " 2 " Para Corazón. " 3" Pulmonar'))
        if (!Number.isInteger(enfermedad) || enfermedad < 1 || enfermedad > 3) {
            alert('Error: Dato invalido, intente nuevamente')
        } else {
            switch (enfermedad) {

                case 1: //cancer
                    switch (true) {

                        case (edad >= 0 && edad <= 12):
                            ninos++
                            switch (enfermedad) {
                                case 1:
                                    ninosCancer += 1
                                    console.log(ninosCancer)
                                    break

                                case 2:
                                    ninosCorazon += 1
                                    break

                                case 3:
                                    ninosPulmonar += 1
                                    break


                            }


                        case (edad >= 13 && edad <= 19):
                            jovenes++
                            switch (enfermedad) {
                                case 1:
                                    jovenesCancer += 1
                                    break

                                case 2:
                                    jovenesCorazon += 1
                                    break

                                case 3:
                                    jovenesPulmonar += 1
                                    break
                            }
                            break

                        case (edad >= 20 && edad <= 50):
                            adultos++
                            switch (enfermedad) {
                                case 1:
                                    adultosCancer += 1
                                    break

                                case 2:
                                    adultosCorazon += 1
                                    break

                                case 3:
                                    adultosPulmonar += 1
                                    break
                            }
                            break

                        case (edad > 50):
                            ancianos++
                            switch (enfermedad) {
                                case 1:
                                    ancianosCancer += 1
                                    break;

                                case 2:
                                    ancianosCorazon += 1
                                    break;

                                case 3:
                                    ancianosPulmonar += 1
                                    break;
                            }
                            break;

                        default:
                            console.log('')


                    }
                    break;

                case 2: //Enfermedad cardiaca
                    switch (true) {

                        case (edad >= 0 && edad <= 12):
                            ninos++
                            switch (enfermedad) {
                                case 1:
                                    ninosCancer += 1
                                    console.log(ninosCancer)
                                    break

                                case 2:
                                    ninosCorazon += 1
                                    break

                                case 3:
                                    ninosPulmonar += 1
                                    break


                            }


                        case (edad >= 13 && edad <= 19):
                            jovenes++
                            switch (enfermedad) {
                                case 1:
                                    jovenesCancer += 1
                                    break

                                case 2:
                                    jovenesCorazon += 1
                                    break

                                case 3:
                                    jovenesPulmonar += 1
                                    break
                            }
                            break

                        case (edad >= 20 && edad <= 50):
                            adultos++
                            switch (enfermedad) {
                                case 1:
                                    adultosCancer += 1
                                    break

                                case 2:
                                    adultosCorazon += 1
                                    break

                                case 3:
                                    adultosPulmonar += 1
                                    break
                            }
                            break

                        case (edad > 50):
                            ancianos++
                            switch (enfermedad) {
                                case 1:
                                    ancianosCancer += 1
                                    break;

                                case 2:
                                    ancianosCorazon += 1
                                    break;

                                case 3:
                                    ancianosPulmonar += 1
                                    break;
                            }
                            break;

                        default:
                            console.log('')


                    }
                    break;

                case 3: //Enfermedad pulmonar

                    switch (true) {

                        case (edad >= 0 && edad <= 12):
                            ninos++
                            switch (enfermedad) {
                                case 1:
                                    ninosCancer += 1
                                    console.log(ninosCancer)
                                    break

                                case 2:
                                    ninosCorazon += 1
                                    break

                                case 3:
                                    ninosPulmonar += 1
                                    break


                            }


                        case (edad >= 13 && edad <= 19):
                            jovenes++
                            switch (enfermedad) {
                                case 1:
                                    jovenesCancer += 1
                                    break

                                case 2:
                                    jovenesCorazon += 1
                                    break

                                case 3:
                                    jovenesPulmonar += 1
                                    break
                            }
                            break

                        case (edad >= 20 && edad <= 50):
                            adultos++
                            switch (enfermedad) {
                                case 1:
                                    adultosCancer += 1
                                    break

                                case 2:
                                    adultosCorazon += 1
                                    break

                                case 3:
                                    adultosPulmonar += 1
                                    break
                            }
                            break

                        case (edad > 50):
                            ancianos++
                            switch (enfermedad) {
                                case 1:
                                    ancianosCancer += 1
                                    break;

                                case 2:
                                    ancianosCorazon += 1
                                    break;

                                case 3:
                                    ancianosPulmonar += 1
                                    break;
                            }
                            break;

                        default:
                            console.log('')


                    }
                    break;

                default:
                    console.log('No selecciono ninguna enfermedad')

            }


        }
    }
    numeroPersonas++;
} while (numeroPersonas <= 2)


const pcn = (ninosCancer / ninos) * 100
const pcorn = (ninosCorazon / ninos) * 100
const ppn = (ninosPulmonar / ninos) * 100

console.log('El numero niños con cancer es: ', pcn, '%');
console.log('El numero niños con enfermedes del corazon es:', pcorn, '%');
console.log('El numero niños con enfermedades pulmonares es: ', ppn, '%');