/*
Una compañia de seguros tiene contratados a n vendedores. Cada uno hace tres ventas a la semana
Su politica de pagos es que cada vendedor recibe un sueldo base y el 10% de comision sobre sus ventas.
El gerente de la compañia quiere saber cuanto dinero obtendra a la semana cada vendedor por concepto
de comisiones por las tres ventas realizadas y cuanto tomando en cuenta su sueldo base y sus comisiones
*/

let numeroVendedores
//se define la variable que sera la condicion del bucle do while
let i = 1;
let ventas = 0;

let salario
let comisionSemana = 0;
let comisionAcumulada = 0;
let salir = true;

//***********************************Definiendo funciones*********************************//

//Validacion dato salario
function validacionSalario(salario) {
    if(salario <= 0){
        alert('Error: El salario base debe ser mayor que cero.')
    }else{
        salir = false;
    }
}

//validacion numero de vendedores.
function validacionNumeroVendedores(numeroVendedores) {
    if(numeroVendedores <= 0 || !Number.isInteger(numeroVendedores)){
        alert('Error: El numero de vendedores debe ser mayor que cero.');
    }else{
        salir = false;
    }
}


//Funcion comision
 function comision (ventas){
    return  0.1 * ventas;
}

//Funcion salario
function salarioSemanal(salario,comisionAcumulada){
    return salario + comisionAcumulada;
}

//*********************************Logica *******************************************************//

do{//Ingreso del salario del vendedor

    salario = parseFloat(prompt('Ingrese el salario base de los vendedores'));
    validacionSalario(salario);
    
}while(salir)


do{//Ingreso del numero de vendedores

    numeroVendedores = parseFloat(prompt('Ingrese el numero de vendedores: '));
    validacionNumeroVendedores(numeroVendedores);
    
}while(salir)



do{
    
        for(var j = 1; j <= numeroVendedores; j++){
            for(var k = 1; k <= 4; k++){
                ventas = parseFloat(prompt('Ingrese el valor de las tres ventas semana ' + k  + ' del vendedor ' + j))
            if(ventas < 0){
                alert('Error: Ingrese un valor valido de comision:');
            }else{
                comisionSemana = comision(ventas);
                comisionAcumulada += comisionSemana;

                console.log('EL valor de la comision del vendedor ' + j + ' de la semana ' + k + ' es: ' + comisionSemana);
            }
            }
            salario = salarioSemanal(salario,comisionAcumulada);
            console.log('La comision del mes del vendedor'+ j +' es: ' + comisionAcumulada)
            console.log('EL valor del salario más comision del vendedor ' + j + ' de esta semana es: ' + salario);
            comisionAcumulada = 0;
            

        }
    

    i++;
    console.log('Valor de variable bandera: ' + i);
}while(  i < numeroVendedores )


console.log('Numero Vendedores' + numeroVendedores);