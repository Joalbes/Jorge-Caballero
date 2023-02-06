let arreglo = [];
let obj = {};
let cod;

//creacion de un arreglo de objetos
for (let index = 0; index < 3; index++) {
    obj.nombre = prompt('Ingrese un nombre: ');
    obj.codigo = prompt('Ingrese el codigo');
    arreglo[index] = obj;
    obj = {};
    
}
console.log(arreglo);

cod = 'ca';
arreglo.forEach(el =>{
    if (el.codigo == cod) {
        console.log('codigo repetido');
        
    } else {
        console.log('codigo no esta repetido');
        
    }
})
