//Clase
class Persona {

    //Atributos
    cedula;
    nombres;
    apellidos;
    fechaNacimiento;
    edad;

    //constructor
    constructor(cedula,nombres,apellidos,fechaNacimiento,edad){
        this.cedula = cedula;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.fechaNacimiento = fechaNacimiento;
        this.edad = edad;
    }

    //Métodos
    cacularEdad(fecha){
        this.edad = 2023 - parseFloat(fecha.slice(0,4));
        return this.edad;
    }
}

//*************Creacion del vector ***************//
//************************************************//

//variables
let vectorDatos = [];

//Referencia a vistas
const cedulaP = document.querySelector("#cedula");
const nombreP = document.querySelector("#nombre");
const apellidosP = document.querySelector("#apellidos");
const fechaNacimientoP = document.querySelector("#fecha");
const btnSubmit = document.querySelector('#submit');

//Eventos
btnSubmit.addEventListener('click',imprimir);

//Funciones
function imprimir() { 
    //crecion de Objetos
    const usuario = new Persona(cedulaP.value,nombreP.value, apellidosP.value, fechaNacimientoP.value);
    let edadActual = usuario.cacularEdad(fechaNacimientoP.value);
    usuario.edad = edadActual;
    vectorDatos.push(usuario);
    console.log(vectorDatos);       
}
