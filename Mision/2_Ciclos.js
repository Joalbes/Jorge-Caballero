//*************************************** Venta de Celulares ***********************************//

//********* Definicion de varaibles***********************//
let inventarioSamsung = 0;
let inventarioIphone = 0;
let inventarioXiami = 0;
let inventarioMotorola = 0;
let inventarioHuawei = 0;
let inventarioOppo = 0;

let telefonosVendidos = 0;
let telefonosSamsungVendidos = 0;
let telefonosIphoneVendidos = 0;
let telefonosXiaomiVendidos = 0;
let telefonosMotorolaVendidos = 0;
let telefonosHuaweiVendidos = 0;
let telefonosOppoVendidos = 0;

let entrar = true;

let ventaTotal = 0;


//**************Generando inventario ********************************//

//Inventario para samsung.
while (entrar) {
    inventarioSamsung = parseFloat(prompt('Ingrese el número de telefonos Samsung existentes'));
    if (inventarioSamsung < 0 || !Number.isInteger(inventarioSamsung)) {
        alert('Error: Número invalido. Ingrese un número de telefonos que sea valido.')
    } else {
        entrar = false;
    }
}

//Inventario para Iphone.
entrar = true;
while (entrar) {
    inventarioIphone = parseFloat(prompt('Ingrese el número de telefonos Iphone existentes'));
    if (inventarioIphone < 0 || !Number.isInteger(inventarioIphone)) {
        alert('Error: Número invalido. Ingrese un número de telefonos que sea valido.')
    } else {
        entrar = false;
    }
}

//Inventario para Xiami.
entrar = true;
while (entrar) {
    inventarioXiami = parseFloat(prompt('Ingrese el número de telefonos Xiamoi existentes'));
    if (inventarioXiami < 0 || !Number.isInteger(inventarioXiami)) {
        alert('Error: Número invalido. Ingrese un número de telefonos que sea valido.')
    } else {
        entrar = false;
    }
}

//Inventario para Motorola.
entrar = true;
while (entrar) {
    inventarioMotorola = parseFloat(prompt('Ingrese el número de telefonos Motorola existentes'));
    if (inventarioMotorola < 0 || !Number.isInteger(inventarioMotorola)) {
        alert('Error: Número invalido. Ingrese un número de telefonos que sea valido.')
    } else {
        entrar = false;
    }
}

//Inventario para Huawei.
entrar = true;
while (entrar) {
    inventarioHuawei = parseFloat(prompt('Ingrese el número de telefonos Huawei existentes'));
    if (inventarioHuawei < 0 || !Number.isInteger(inventarioHuawei)) {
        alert('Error: Número invalido. Ingrese un número de telefonos que sea valido.')
    } else {
        entrar = false;
    }
}

//Inventario para OPPO.
entrar = true;
while (entrar) {
    inventarioOppo = parseFloat(prompt('Ingrese el número de telefonos OPPO existentes'));
    if (inventarioOppo < 0 || !Number.isInteger(inventarioOppo)) {
        alert('Error: Número invalido. Ingrese un número de telefonos que sea valido.')
    } else {
        entrar = false;
    }
}

//************** Realizando Ventas ********************************//
// Menu Ventas
entrar = true;
while (entrar) {
    opcionMenu = parseFloat(prompt('Escoja un numero dependiendo de la marca que quiere vender:'
        + '\n1 Samsung.'
        + '\n2 Iphone.'
        + '\n3 Xiaomi.'
        + '\n4 Motorola.'
        + '\n5 Huawei.'
        + '\n6 OPPO.'
        + '\n7 Salir.'));

    switch (opcionMenu) {
        case 1:
            telefonosSamsungVendidos = parseFloat(prompt('Ingrese el numero de telefonos Samsung que va a vender: '));
            if (telefonosSamsungVendidos < 0 || !Number.isInteger(telefonosSamsungVendidos)) {
                alert('Error: Numero Invalido. Volvera al menu principal.')
            } else {
                if (telefonosSamsungVendidos > inventarioSamsung) {
                    alert('Error: El numero de telefonos vendidos no puede ser mayor al inventario. Volvera al menu principal')
                } else {
                    inventarioSamsung -= telefonosSamsungVendidos;
                    telefonosVendidos += telefonosSamsungVendidos;
                }

            }
            break;

        case 2:
            telefonosIphoneVendidos = parseFloat(prompt('Ingrese el numero de telefonos Iphone que va a vender: '));
            if (telefonosIphoneVendidos < 0 || !Number.isInteger(telefonosIphoneVendidos)) {
                alert('Error: Numero Invalido. Volvera al menu principal.')
            } else {
                if (telefonosIphoneVendidos > inventarioIphone) {
                    alert('Error: El numero de telefonos vendidos no puede ser mayor al inventario. Volvera al menu principal')
                } else {
                    inventarioIphone -= telefonosIphoneVendidos;
                    telefonosVendidos += telefonosIphoneVendidos;
                }                
            }
            break;


        case 3:
            telefonosXiaomiVendidos = parseFloat(prompt('Ingrese el numero de telefonos Xiaomi que va a vender: '));
            if (telefonosXiaomiVendidos < 0 || !Number.isInteger(telefonosXiaomiVendidos)) {
                alert('Error: Numero Invalido. Volvera al menu principal.')
            } else {
                if (telefonosXiaomiVendidos > inventarioXiami) {
                    alert('Error: El numero de telefonos vendidos no puede ser mayor al inventario. Volvera al menu principal')
                } else {
                    inventarioXiami -= telefonosXiaomiVendidos;
                    telefonosVendidos += telefonosXiaomiVendidos
                }
            }
            break;

        case 4:
            telefonosMotorolaVendidos = parseFloat(prompt('Ingrese el numero de telefonos Motorola que va a vender: '));
            if (telefonosMotorolaVendidos < 0 || !Number.isInteger(telefonosMotorolaVendidos)) {
                alert('Error: Numero Invalido. Volvera al menu principal.')
            } else {
                if (telefonosMotorolaVendidos > inventarioMotorola) {
                    alert('Error: El numero de telefonos vendidos no puede ser mayor al inventario. Volvera al menu principal')
                } else {
                    inventarioMotorola -= telefonosMotorolaVendidos;
                    telefonosVendidos += telefonosMotorolaVendidos;
                }
            }
            break;

        case 5:
            telefonosHuaweiVendidos = parseFloat(prompt('Ingrese el numero de telefonos Huawei que va a vender: '));
            if (telefonosHuaweiVendidos < 0 || !Number.isInteger(telefonosHuaweiVendidos)) {
                alert('Error: Numero Invalido. Volvera al menu principal.')
            } else {
                if (telefonosHuaweiVendidos > inventarioHuawei) {
                    alert('Error: El numero de telefonos vendidos no puede ser mayor al inventario. Volvera al menu principal')
                } else {
                    inventarioHuawei -= telefonosHuaweiVendidos;
                    telefonosVendidos += telefonosHuaweiVendidos;
                }
            }
            break;

        case 6:
            telefonosOppoVendidos = parseFloat(prompt('Ingrese el numero de telefonos OPPO que va a vender: '));
            if (telefonosOppoVendidos < 0 || !Number.isInteger(telefonosOppoVendidos)) {
                alert('Error: Numero Invalido. Volvera al menu principal.')
            } else {
                if (telefonosOppoVendidos > inventarioOppo) {
                    alert('Error: El numero de telefonos vendidos no puede ser mayor al inventario. Volvera al menu principal')
                } else {
                    inventarioOppo -= telefonosOppoVendidos;
                    telefonosVendidos += telefonosOppoVendidos;
                }
            }
            break;

        case 7:
            entrar = false;
            break;

        default:
            alert('Error ingresó un dato invalido, intente nuevamente.')
            break;
    }


}



//******************Impresion de la informacion de salidad */
//Inventario Actualizado
console.log(`Inventario Actualizado:`
    + `\n1. Samsung: ${inventarioSamsung} telefonos.`
    + `\n2. Iphone: ${inventarioIphone} telefonos.`
    + `\n3. Xiomi: ${inventarioXiami} telefonos.`
    + `\n4. Motorola: ${inventarioMotorola} telefonos.`
    + `\n5. Huawei: ${inventarioHuawei} telefonos.`
    + `\n6. OPPO: ${inventarioOppo} telefonos.`)

//Numero de telefonos vendidos y venta total
console.log(`Venta discrinminada por Marca:`
    + `\n1. Samsung Vendidos: ${telefonosSamsungVendidos}, por valor de:$${10 * telefonosSamsungVendidos}.`
    + `\n2. Iphone Vendidos: ${telefonosIphoneVendidos}, por valor de:$${20 * telefonosIphoneVendidos}.`
    + `\n3. Xiaomi Vendidos: ${telefonosXiaomiVendidos}, por valor de:$${30 * telefonosXiaomiVendidos}.`
    + `\n4. Motorola Vendidos: ${telefonosMotorolaVendidos}, por valor de:$${40 * telefonosMotorolaVendidos}.`
    + `\n5. Huawei Vendidos: ${telefonosHuaweiVendidos}, por valor de:$${50 * telefonosHuaweiVendidos}.`
    + `\n6. OPPO Vendidos: ${telefonosOppoVendidos}, por valor de:$${60 * telefonosOppoVendidos}.`)

//Numero de celulares vendidos y valor total de la venta    
console.log(`Total de unidades vendidas: ${telefonosVendidos}.\nVenta Total: $${10 * telefonosSamsungVendidos 
                                                                             + 20 * telefonosIphoneVendidos
                                                                             + 30 * telefonosXiaomiVendidos
                                                                             + 40 * telefonosMotorolaVendidos
                                                                             + 50 * telefonosHuaweiVendidos
                                                                             + 60 * telefonosOppoVendidos }`);
