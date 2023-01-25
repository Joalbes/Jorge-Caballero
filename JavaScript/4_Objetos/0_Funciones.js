

//********************** Longitud de una cadena: .lenght *****************//

let fullName = 'Jorge Alberto Caballero Espindola'
console.log(`Mi nombres completo es: ${fullName} y tiene una logitud de ${fullName.length} posiciones`);




//********************** slice() Extrae una parte del string y retorna esa parte *****************//

console.log(`Mis nombres son: ${fullName.slice(0,13)}\ny mis apellidos: ${fullName.slice(14)}`);



//********************** replace() reemplaza el primer valor que coincida por el que se designe *****************//
console.log(`Voy a cambia el nombre Jorge Alberto por George Albert y quedando asi mi nombre: ${fullName.replace(/a/g,"X")}`);




