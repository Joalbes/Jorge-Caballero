//******************Generar factura del resturante*********************//

//variables
let opcionMenu;
let entrar = true;
let ObjDatosFactura = {};
let numeroPersonas;
let platosArroz = 0;
let platosPastas = 0;
let platosMute = 0;
let platosPescado = 0;
let platosSobrebarriga = 0;
let platos = 0;
let pagoTotal = 0;

//validacion del numero de personas
while (entrar) {
    numeroPersonas = parseFloat(prompt('Ingrese el numero de personas que van a pedir un plato'));
    if (numeroPersonas <= 0 || !Number.isInteger(numeroPersonas)) {
        alert('Error: Numero invalido.');
    } else {
        entrar = false

    }
}

for (var i = 0; i < numeroPersonas; i++) {
    opcionMenu = parseFloat(prompt(`Seleccione el numero del plato que desea:\n
                                1 Arroz con pollo 15K\n
                                2 Pastas          20K\n
                                3 Mute            12K\n
                                4 Pescado Frito   17K\n
                                5 Sobrebarriga    25K\n`
    ));

    switch (opcionMenu) {

        case 1:
            platosArroz++;
            platos++;
            break;

        case 2:
            platosPastas++;
            platos++;
            break;

        case 3:
            platosMute++;
            platos++;
            break;

        case 4:
            platosPescado++;
            platos++;
            break;

        case 5:
            platosSobrebarriga++;
            platos++;
            break;

        default:
            console.log('Error:Este plato no esta en el menu, vuelva a realizar el pedido');
            i++;
            break;
    }




}

//Rellenando el objeto factura
ObjDatosFactura.ArrozConPollo = platosArroz;
ObjDatosFactura.pastas = platosPastas;
ObjDatosFactura.mute = platosMute;
ObjDatosFactura.pescado = platosPescado;
ObjDatosFactura.sobrebarriga = platosSobrebarriga;

//calculando el pago total
pagoTotal = 15000 * platosArroz + 20000 * platosPastas + 12000 * platosMute + 17000 * platosPescado + 25000 * platosSobrebarriga

//Imprimiendo la factura

console.log(`Factura:\n`);
if (platosArroz != 0){
    console.log(`${platosArroz} Platos de Arroz con Pollo valen:$ ${15000 * platosArroz}`);
} 
if(platosPastas != 0){
    console.log(`${platosPastas} Platos de Pastas valen:$ ${20000 * platosPastas}`);
}
if(platosMute != 0){
    console.log(`${platosMute} Platos de Mute valen:$ ${12000 * platosMute}`);
} 
if(platosPescado != 0){
    console.log(`${platosPescado} Platos de Pescado Frito valen:$ ${17000 * platosPescado}`);
} 
if(platosSobrebarriga != 0){
    console.log(`${platosSobrebarriga} Platos de Sobrebarriga valen:$ ${25000 * platosSobrebarriga}`);
}
console.log(`Total de platos: ${platos}`);
console.log(`Valor a pagar  : ${pagoTotal}`);
