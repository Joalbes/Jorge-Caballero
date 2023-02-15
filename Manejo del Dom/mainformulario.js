// Variables

const boton = document.querySelector('#boton');

//eventos
boton.addEventListener('click', fguardar);

//funcion
function fguardar() {
    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const edad = document.querySelector('#edad').value;
    const fecha = document.querySelector('#fechanacimiento').value;
    const salario = document.querySelector('#salario').value;
    //creacion del objeto
    const obj = {
        nombre,
        apellido,
        edad,
        fecha,
        salario
    }

    console.log(obj);

}
