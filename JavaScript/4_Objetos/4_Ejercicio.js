//Arreglo de palabras y letra , buscar letra en cada palabra del arreglo y reemplazar por X mayuscula y usar forEch

let arreglo = ["Jorge" , "Alberto" , "Caballero" , "Espindola" , "estudia" , "en coex"]
let letra = prompt('Ingrese una letra')
let i = 0;

function reemplazar(letra,array){
array.forEach(element => {    
    array[i] = element.replaceAll(letra,"X");
    i++       
});
return array;
}

console.log(reemplazar(letra, arreglo))

