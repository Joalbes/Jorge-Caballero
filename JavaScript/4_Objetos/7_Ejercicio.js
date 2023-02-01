/*
Se desea llenar una lista con 20 animales, y le han pedido a usted que sabe
 programar que les ayude para solicitar esos 20 nombres,
 
 mostrarlos ordenados alfabéticamente,
 
 Luego solicitar al usuario un número entre el 1 y el 20 y que le
 permita ver cuales animales se encuentra entre el número dicho 
y el final de la lista.

También cree una opción que permita al usuario escribir el 
nombre de un animal y verificar si ese animal se encuentra en la lista
*/

//ordenar -> sort
//partir -> slice
//buscar -> search o find

//*************************** Inicio ****************************************//

//varaibles
let numeroAnimales;
let entrar = true;
let listaAnimales = [];
let listaModificada = [];
let opcion, indice;
//Ingresar el numero de animales
while (entrar) {
    numeroAnimales = parseFloat(prompt('Ingrese el numero de animales: '));
    if (numeroAnimales <= 0 || !Number.isInteger(numeroAnimales)) {
        alert('Error: Numero de animales invalido. Intente nuevamente.');
    } else {
        entrar = false;
    }
}

//Creando el arreglo con el nombre de cada animal.
for (let i = 0; i < numeroAnimales; i++) {
    listaAnimales.push(prompt(`Ingrese el nombre del anumal numero ${i + 1}: `));
}


//Ordenando Alfabeticamente el arreglo
listaAnimales = listaAnimales.sort();
console.log(listaAnimales);

//creación del menu

entrar = true;
while (entrar) {
    opcion = prompt(`Selecione la opción deseada:\n1. Crear una sublista de animales.\n2. Buscar si el animal esta en la lista principal.\n3. Salir`);      
    indice = 0;

    switch (opcion) {

        case '1':// creacion de un sublista  
            indice = parseFloat(prompt(`Ingrese un número entre 1 y 20, apartir de este número se creara una nueva lista`));
            if (indice < 1 || indice > 20 || !Number.isInteger(indice)) {
                alert('Error: Nombre no existe en la lista');
            } else {
                
                listaModificada = listaAnimales.slice(indice);
                console.log(listaModificada);
                
            }
            break;

        case '2':// Buscar un animal en la lista        
            nombreAnimal = prompt(`Ingrese el nombre del animal que desea validar si esta en la lista`);      
            indice = listaAnimales.indexOf(nombreAnimal);
            if (indice != -1) {
                console.log(`EL animal: ${nombreAnimal} si esta en la lista.`);
            } else {
                alert('Error: Nombre no existe en la lista');
            }
            break;

        case '3':
            entrar = false;
            break;

        default:
            alert('No ha ingresado una opcion valida.');
            break;

    }     
}