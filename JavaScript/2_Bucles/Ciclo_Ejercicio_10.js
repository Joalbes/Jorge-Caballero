/*
Una agencia de venta de autos paga a su personal de ventas un salario de 950.000,
 mas  una comision de 170.000 por auto vendido,mas 5% del valor de la venta.

 Diseñar un algoritmo para calcular el salario  del vendedor en un determinado mes
 realizando la lectura por pantalla del numero de automoviles vendidos y el valor de cada 
 auto para hallar el monto total de ventas.

 Entrdas:
 Numero automoviles vendidos.
 valor por automovil.

 Salida:
 salario mensual del vendedor
*/

//variables
let autosVendidos = 0;
let valorAuto = 0;
let seguirEjecutandoseguirEjecutando = true;
const salarioBase = 950000;
let salarioMensual = 0;
let ventaTotal = 0;

do{
    autosVendidos = parseFloat(prompt('Ingrese la cantidad de autos vendidos: '));
    if(!Number.isInteger(autosVendidos) || autosVendidos < 0){
        alert('Error: La cantidad de autos vendidos deber ser un numero entero y mayor que cero');
    }else{

        for(var i = 1; i <= autosVendidos; i++){ // Calculando la venta total de autos
            valorAuto = parseFloat(prompt('Ingrese el valor de venta del auto numero ' + i + ' :'));
            if(valorAuto <= 0){
                alert('Error: El valor de la venta ser un numero mayor que cero');
            }else{
                ventaTotal += valorAuto;
            }

        }
        
        salarioMensual = salarioBase + autosVendidos * 170000 + ventaTotal * 0.05;
        console.log('El salario menesual es $' + salarioMensual);
        seguirEjecutando = false;
        
    }

}while(seguirEjecutando)