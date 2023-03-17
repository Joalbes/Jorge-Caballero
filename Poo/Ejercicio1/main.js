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

    nombreCompleto(){
        let nombreCompleto = `${this.nombres} ${this.apellidos}`
    }

    birthday(fecha){
        let cumple = (
            if()
        )
    }
}

//*************Creacion del vector ***************//
//************************************************//

//variables
let vectorDatos = [];

//Referencia a vistas en html
const cedulaP = document.querySelector("#cedula");
const nombreP = document.querySelector("#nombre");
const apellidosP = document.querySelector("#apellidos");
const fechaNacimientoP = document.querySelector("#fecha");
const btn = document.querySelector('#btn');
const formulario = document.querySelector("#formulario");

//Eventos
btn.addEventListener('click',imprimir);
formulario.addEventListener("submit",form)

//Funciones
function imprimir() { 
    //crecion de Objetos
    const usuario = new Persona(cedulaP.value,nombreP.value, apellidosP.value, fechaNacimientoP.value);    
    usuario.edad = usuario.cacularEdad(fechaNacimientoP.value);;
    vectorDatos.push(usuario);
    console.log(vectorDatos);  
}

function form(e){
e.preventDefault();
}


