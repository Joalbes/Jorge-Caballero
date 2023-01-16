//Hacer un algoritmo que imprima el nombre de 4 articulos
//precio original y su precio con descuento.
//El descuento lo hace con base a su forma de pago:
// si es en efectivo 10%
// si es a credito   20%

// definicion de variables
const nombre = [];
const formaDePago = [];
const precioConDescuento = [];
const precio = [];


//Ingreso de informacion de los cuatro articulos:
for(var i = 0; i < 4; i++){

    nombre[i] = prompt('Ingrese un nombre del articulo: ' + (i + 1))
    precio[i]= parseFloat(prompt('Ingrese el precio del articulo: '+ (i + 1)));
    formaDePago[i] = parseFloat(prompt('Ingrese "1" si el pago es en efectivo y "2" si el pago es a credito.'));
    
}

for(var j = 0; j < 4; j++){
    console.log('Nombre del articulo ' + (j+1) +':' + nombre[j]);
    console.log('Precio del articulo: ' + (j+1) +':' + precio[j]);
    if(formaDePago[j] === 1){
        precioConDescuento[j] = precio[j] * 0.9;
        console.log('Precio con descuento del 10%: ' + precioConDescuento[j]);
    }else{
        precioConDescuento[j] = precio[j] * 0.8;
        console.log('Precio con descuento del 20%: ' + precioConDescuento[j]);
    } 
    
}