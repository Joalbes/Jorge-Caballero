const vectorPalabras = ["color", "sabor", "comida", "frutas", "vegetales"];
vectorCuerpo = ['cabeza','tronco','brazo dercho','brazo izquierdo','pierna derecha',' pierna izquierda']
console.log(`Vector Base de palabras: ${vectorPalabras}`);
let palabra;
let vectorPalabra = [];
let vectorEspacios = [];
let cont,contElse = 0;

palabra = 'vegetales'
console.log(`Palabra seleccionada del arreglo : ${palabra}`);

vectorPalabra = palabra.split('');
console.log(`Palabra convertida a vector: ${vectorPalabra}`);

for (let index = 0; index < vectorPalabra.length; index++) {
    vectorEspacios[index] = '__ '

}
console.log(`Vector de espacions: ${vectorEspacios}`);


do {
    let letra = prompt('Ingrese una letra');
    for (let index = 0; index < vectorPalabra.length; index++) {
        if (vectorPalabra[index] == letra) {
            vectorEspacios[index] = `${letra} `;
            console.log(`la palabra reemplazada es: ${vectorEspacios}`);
            cont--;            

        }else{
            console.log(`Parte del cuerpo: ${vectorCuerpo[contElse]}`);
            contElse++;
        }
    }
    console.log(`la palabra reemplazada es: ${vectorEspacios}`);
    cont++;
} while (contElse <= 6)










