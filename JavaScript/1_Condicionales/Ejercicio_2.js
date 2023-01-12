/*
.Desarrolle un algoritmo que reciba la base y altura de un triangulo en cm.

 Los 2 valores ingresados no pueden ser iguales,
 ademas el algoritmo  debe calcular el area del triangulo si la base es mayor a 5cm y la altura es mayor a 4cm,

 si no lo son el algoritmo debe imprimir el valor de la
 base multiplicado por 2 y sumarle 10.
*/

// Validación de los datos
let base = parseFloat(prompt('Ingrese la base del triangulo, el valor debe ser mayor que cero y positivo.'));

if (base <= 0) {
    alert('Ingrese un número mayor que cero y positivo');
} else {
    let altura = parseFloat(prompt('Ingrese la altura del triangulo, debe ser mayor que cero y diferente al valor de la base.'));
    if (altura <= 0 || altura == base) {
        alert('Digite un valor que sea mayor a cero y diferente del valor de la base.');
    } else {
        let area;
        if (base > 5 && altura > 4) {
             area = (base * altura) / 2;
        } else {
            area = 2 * base + 10;
        }

        console.log('El area del triangulo que tiene como base ' + base + ' y altura ' + altura + ' es ' + area + 'cm');
    }
}