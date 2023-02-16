// Variables

const boton = document.querySelector('#boton');
const area1 = document.querySelector('.area1')

//eventos
boton.addEventListener('click', fguardar);

//funcion
function fguardar() {
    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const edad = document.querySelector('#edad').value;
    const fecha = document.querySelector('#fechanacimiento').value;
    const salario = document.querySelector('#salario').value;
    
    area1.innerHTML += `
        <div class="card">
            <img src="./assets/login.jpeg" alt="Imagen no disponible">
            <p id="nombrecard">${nombre}</p>
            <p id="apellidocard">${apellido}</p>
            <p id="salariocard">${salario}</p>
        </div>
    `;   

    

}
