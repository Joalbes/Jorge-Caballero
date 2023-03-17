//Clase
class Persona {

    //Atributos
    cedula;
    nombres;
    apellidos;
    fechaNacimiento;
    edad;

    //constructor
    constructor(cedula, nombres, apellidos, fechaNacimiento, edad) {
        this.cedula = cedula;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.fechaNacimiento = fechaNacimiento;
        this.edad = edad;
    }

    //Métodos
    cacularEdad(fecha) {
        this.edad = 2023 - parseFloat(fecha.slice(0, 4));
        return this.edad;
    }

    nombreCompleto() {
        let nombreCompleto = `${this.nombres} ${this.apellidos}`
        return nombreCompleto;
    }

    birthday(fecha) {
        // Busca mes y dia actual
        const date = new Date();
        let mesActual = date.getMonth() + 1;
        let hoy = date.getDate();

        // Busca mes y dia de nacimiento
        let mesNacimiento = parseFloat(fecha.slice(5, 8));
        let diaNacimiento = parseFloat(fecha.slice(8, 11));


        if (hoy == diaNacimiento && mesActual == mesNacimiento) {
            return 'Si'
        } else {
            return 'No'
        }
    }
}

//*************Creacion del vector ***************//
//************************************************//

//variables
let vectorDatos = [];
let vectorCedulas = [];

//Referencia a vistas en html
const cedulaP = document.querySelector("#cedula");
const nombreP = document.querySelector("#nombre");
const apellidosP = document.querySelector("#apellidos");
const fechaNacimientoP = document.querySelector("#fecha");
const btn = document.querySelector('#btn');
const btnlupa = document.querySelector("#btnlupa");
const formulario = document.querySelector("#formulario");
const nombreslistas = document.querySelector("#nombreslistas");
const cumplelistas = document.querySelector("#cumplelistas");
const listaCedulas = document.querySelector("#cedulas");
const inputCedula = document.querySelector("#inputcedula")


//Eventos
btn.addEventListener('click', imprimir);
formulario.addEventListener("submit", form);
btnlupa.addEventListener('click', buscarCedula);

//Funciones
function imprimir() {
    //crecion de Objetos
    const usuario = new Persona(cedulaP.value, nombreP.value, apellidosP.value, fechaNacimientoP.value);
    usuario.edad = usuario.cacularEdad(fechaNacimientoP.value);
    vectorDatos.push(usuario);
    vectorCedulas.push(usuario.cedula);
    //datos tabla
    console.log(usuario.nombreCompleto());
    console.log(usuario.birthday(fechaNacimientoP.value));
    nombreslistas.innerHTML += `<p id="nombrelista text-center">${usuario.nombreCompleto()}</p>`
    cumplelistas.innerHTML += `<p id="cumplelistas text-center">${usuario.birthday(fechaNacimientoP.value)}</p>`
}


function form(e) {
    e.preventDefault();
}

function buscarCedula(){
    vectorCedulas.forEach(element => {        
        listaCedulas.innerHTML += `<option value="${element}"></option>`        
    });

    vectorCedulas.forEach(element => {
        if(inputCedula.value == element){
            console.log('cedula esta');

        }else{
            

        }
        
    });
    
}

