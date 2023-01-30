/*
El administrador de una oficina quiere tomar un inventario de los usarios y contraseñas de sus 
empleados en el sistema de contabilidad que manejan. Para esto el ha solicitado que usted
desarrolle un programa en el cual el ingrese estos datos de cada empleado junto con el nombre
y los almacene

1.Empleados cuyo nombre tenga la letra 'e'
2.Empleados cuyo usuario tenga la letra 'J'
3.Contraseña: 'a' , 'e' reemplazar 'X'

*/

//variables
let numeroEmpleados = 0;
let entrar = true;
let inventario = [];
let inventarioA = [];
let inventarioB = [];
let datos = {};
let valorNombre, valorUsuario, valorContrasena, password;

//ingresando el numero de empleados
while (entrar) {
    numeroEmpleados = parseFloat(prompt('Ingrese el numero de empleados a los que desea valida'));
    if (numeroEmpleados < 0 || !Number.isInteger(numeroEmpleados)) {
        alert('Error: Numero ingresado no valido. Intente nuevamente');
    } else {
        entrar = false;
    }

}

//Ingresando los datos del inventario
for (let index = 0; index < numeroEmpleados; index++) {

    valorNombre = prompt(`Ingrese el nombre del empleado ${index + 1}`);
    valorUsuario = prompt(`Ingrese el usuario de ${valorNombre}: `);
    valorContrasena = prompt(`Ingrese la contraseña de ${valorNombre}: `)

    datos = { nombre: valorNombre, usuario: valorUsuario, contrasena: valorContrasena };
    inventario.push(datos);
    
    if(valorNombre.includes('e')){
        inventarioA.push(datos);      
        
    }

    if(valorUsuario.includes('J') ){
        inventarioB.push(datos);      
        
    }

}


//Imprimiendo el inventario cuyo nombre tenga la letra e
console.log('\nImprimiendo el inventario cuyo nombre tenga la letra e:');
inventarioA.forEach(element => {  
        password = element.contrasena
        password = password.replaceAll('a','X');
        password = password.replaceAll('e','X');
    
    console.log(`\nEl nombre es: ${element.nombre}`);
    console.log(`EL usuario es: ${element.usuario}`);
    console.log(`La contraseña es: ${password} `);
});


//Imprimiendo el inventario cuyo usuario tenga la letra J
console.log('\nImprimiendo el inventario cuyo usuario tenga la letra J:');
inventarioB.forEach(element => {  
        password = element.contrasena
        password = password.replaceAll('a','X');
        password = password.replaceAll('e','X');
    
    console.log(`\nEl nombre es: ${element.nombre}`);
    console.log(`EL usuario es: ${element.usuario}`);
    console.log(`La contraseña es: ${password} `);
});

//Imprimiendo el inventario
console.log('\nImprimiendo todo el inventario:');
inventario.forEach(element => {    
    console.log(`\nEl nombre es: ${element.nombre}`);
    console.log(`EL usuario es: ${element.usuario}`);
    console.log(`La contraseña es: ${element.contrasena} `);
});
