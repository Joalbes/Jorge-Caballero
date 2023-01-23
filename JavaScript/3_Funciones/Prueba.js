
//validacion de numero si es entero y esta en un intervalo

datoAEvaluar = parseFloat(prompt('Ingrese un numero entero'))
limiteInferior = parseFloat(prompt('Ingrese ellimite inferior del intervalo que desea evaluar'))
limiteSuperior = parseFloat(prompt('Ingrese ellimite inferior del intervalo que desea evaluar'))

function validacionEntero(datoAEvaluar, limiteInferior, limiteSuperior) {


    if (datoAEvaluar < limiteInferior || datoAEvaluar > limiteSuperior || Number.isInteger(datoAEvaluar)) {
        alert('Error: Dato no valido. Ingrese un numero entre', limiteInferior, 'y', limiteSuperior, 'y ademas que sea entero.')
    } else {
        return console.log(datoAEvaluar)
         
    }

}

