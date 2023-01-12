/* Pedir dos números y decir si non múltiplos o no. */
const num1 = parseInt(prompt('Ingrese un número entero: '));
const num2 = parseInt(prompt('Ingrese oto número entero: '));

// Verificando si son multiplos:
if (num1 > num2){
    resultado = num1 % num2;
}else{
    resultado = num2 % num1;
}

if (resultado == 0){
    console.log('los numeros SI son multiplos:');
} else{
    console.log('Los numeros NO son multiplos;');
}