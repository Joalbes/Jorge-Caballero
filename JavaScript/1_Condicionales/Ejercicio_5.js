/*
Desarrolle un algoritmo que permit convertir calificaciones numericas, segun la siguiente tabla:
    A = 19 y 20.
    B = 16, 17 y 18.
    C = 13, 14 y 15. 
    D = 10, 11 y 12.
    E = 1 hasta 9.

Las notas solo pueden ser numeros entre 1 y 20.
*/

//Validacion de los datos
const nota = parseFloat(prompt('Ingrese una nota que este entre 1 y 20 y que sea entera'));
if (!Number.isInteger(nota) || nota < 1 || nota > 20) {
    alert('Ingrese un valor valido');
} else {
    if (nota >= 1 && nota <= 9) {
        console.log('La calificacón correspondiente a "' + nota + '" es: ' + '"E"');
    } else {
        if (nota >= 10 && nota <= 12) {
            console.log('La calificacón correspondiente a "' + nota + '" es: ' + '"D"');
        } else {
            if (nota >= 13 && nota <= 15) {
                console.log('La calificacón correspondiente a "' + nota + '" es: ' + '"C"');
            } else {
                if (nota >= 16 && nota <= 18) {
                    console.log('La calificacón correspondiente a "' + nota + '" es: ' + '"B"');
                } else {
                    if (nota >= 19 && nota <= 20) {
                        console.log('La calificacón correspondiente a "' + nota + '" es: ' + '"A"');
                    }
                }

            }

        }
    }
}