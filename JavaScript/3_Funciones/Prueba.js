
//validacion de numero si es entero y esta en un intervalo

function validacionEntero(datoAEvaluar, limiteInferior, limiteSuperior) {


    if (datoAEvaluar < limiteInferior || datoAEvaluar > limiteSuperior || Number.isInteger(datoAEvaluar)) {
        alert('Error: Dato no valido. Ingrese un numero entre', limiteInferior, 'y', limiteSuperior, 'y ademas que sea entero.')
    } else {
        return datoAEvaluar
        entrar = false;         
    }

}

