
const btnAtras = document.querySelector("#btnatras");
const datos = document.querySelector("#datos");
const mensajeFinal = document.querySelector("#mensajefinal")

btnAtras.addEventListener('click',atras);

datos.innerHTML = `<p class="text-2xl font-bold">Nombre:<p>
                   <p class="text-sm mb-[2rem]">${localStorage.getItem("nombreCompleto")}</p>
                   <p class="text-2xl font-bold">Fecha de Nacimiento:<p>
                   <p class="text-sm">${localStorage.getItem("Fecha Cumpleaños")}</p>`


if (localStorage.getItem("Cumple Años") == 'true') {
    mensajeFinal.innerHTML = `<p class="text-4xl font-bold text-green-700">Está cumpliendo Años</p>`    
} else {
    mensajeFinal.innerHTML = `<p>No está cumpliendo Años</p>`     
}
                  

function atras() {
    location.href = 'index.html';    
}
