let vector = ['hola', 2,5,7,2,8,'juanjo',14,'tablero','cable'];
let vectorLetras = []
let acumulador = 0;
let acumulador1 = 0;



for (let index = 0; index < vector.length; index++) {
    if(!isNaN(vector[index])){
        acumulador += vector[index];
    }   
    
    
}
console.log(acumulador);



vector.forEach(element => {
    if(isNaN(element)){
        vectorLetras.push(element)
    }   
});

console.log(vectorLetras);



esString = function(valor){
    if(isNaN(valor)){
        return valor;
    }  
}

let vector2 = vector.filter(esString)
console.log(vector2)  

