class Persona {
    //Declaro atributos de la clase
    nombre;
    peso;
    estatura;
    edad;
    cedula;

    //Declaro constructor
    constructor(nombre, peso, estatura, edad, cedula) {
        this.nombre = nombre;
        this.peso = peso;
        this.estatura = estatura;
        this.edad = edad;
        this.cedula = cedula;
    }
    //Declaro métodos
    calcularIMC() {
        const imc = this.peso / Math.pow(this.estatura, 2);
        return imc;
    }

    info() {
        return `\nNombre: ${this.nombre}  \nCc:${this.cedula}`
    }

}
//******************************Creacion de Objetos ********************************************//
//*********************************************************************************************//
const santiago = new Persona('santiago', 70, 1.65, 19, '13.000.000');
console.log(`Nombre:${santiago.nombre}`);
console.log(`Cc: ${santiago.cedula}`);
console.log(`Peso: ${santiago.peso}`);
console.log(`Estatura: ${santiago.estatura}`);
console.log(`Edad: ${santiago.edad}`);
console.log(`IMC: ${santiago.calcularIMC()}`);
console.log(`Informacion: ${santiago.info()}`);
console.log('***************************************');

const yefer = new Persona('Yefer', 70, 1.68, 19, '14.000.000');
console.log(`Nombre:${yefer.nombre}`);
console.log(`Cc: ${yefer.cedula}`);
console.log(`Peso: ${yefer.peso}`);
console.log(`Estatura: ${yefer.estatura}`);
console.log(`Edad: ${yefer.edad}`);
console.log(`IMC: ${yefer.calcularIMC()}`);
console.log(`Informacion: ${yefer.info()}`);
console.log('***************************************');

const camilo = new Persona('Camilo', 1.67, 70, 22, '15.000.000');
console.log(`Nombre:${camilo.nombre}`);
console.log(`Cc: ${camilo.cedula}`);
console.log(`Peso: ${camilo.peso}`);
console.log(`Estatura: ${camilo.estatura}`);
console.log(`Edad: ${camilo.edad}`);
console.log(`IMC: ${camilo.calcularIMC()}`);
console.log(`Informacion: ${camilo.info()}`);
console.log('***************************************');





