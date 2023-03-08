//
const url = 'https://pokeapi.co/api/v2/pokemon/'

const btnbuscar = document.getElementById('boton')
btnbuscar.addEventListener('click', buscar)




async function buscar() {
    const valorEntrada = document.querySelector('#entrada').value;
    const response = await fetch(url + valorEntrada);
    console.log(response);
    const dato = await response.json();
    console.log(dato);

    const cajaImagen = document.getElementById('cajaimagen');
    cajaImagen.innerHTML = `<img src="${dato.sprites.front_default}" alt="Imagen de pokemon">
                             <h2>Datos:</h2>
                             <p>Nombre:${dato.name}</p>
                             <p>Experiencia Base: ${dato.base_experience}</p>
                             <p>Altura: ${dato.height}</p>
                             <p>Peso: ${dato.weight}</p>
                             <p>Orden:${dato.order}</p><br><br>
                             
                             <h2>Habilidades</h2>
                             <p>${dato.abilities[0].ability.name} - oculta:${dato.abilities[0].is_hidden}</p>
                             <p>${dato.abilities[1].ability.name} - oculta:${dato.abilities[1].is_hidden}</p><br><br>
                             
                             <h2>Estadisticas</h2>
                             <p>${dato.stats[0].stat.name} = ${dato.stats[0].base_stat} - effort: ${dato.stats[0].effort}</p>
                             <p>${dato.stats[1].stat.name} = ${dato.stats[1].base_stat} - effort: ${dato.stats[1].effort}</p>
                             <p>${dato.stats[2].stat.name} = ${dato.stats[2].base_stat} - effort: ${dato.stats[2].effort}</p>
                             <p>${dato.stats[3].stat.name} = ${dato.stats[3].base_stat} - effort: ${dato.stats[3].effort}</p>
                             <p>${dato.stats[4].stat.name} = ${dato.stats[4].base_stat} - effort: ${dato.stats[4].effort}</p>
                             <p>${dato.stats[5].stat.name} = ${dato.stats[5].base_stat} - effort: ${dato.stats[5].effort}</p>
                             `


}

