let arrayCarta = []
let arrayIds = []
//refencia a la vista
const contenedorCartas = document.getElementById("contenedorCard");
//const carta = document.getElementsByTagName("id");



const main = async ()=> {
    const responses = await fetch('https://jsonplaceholder.typicode.com/posts')
    console.log(responses);
    const data = await responses.json();

    for (let i = 0; i < 20; i++) {
        contenedorCartas.innerHTML +=                    
        `<!-- card -->
            <div id="${data[i].id}" class=" w-[15rem] bg-orange-400 rounded-lg p-[1rem]">
                <h1 class="font-bold text-sm  pb-[1rem]">${data[i].title}</h1>
                <p class="text-xs">${data[i].body}</p>
            </div>`  
         arrayCarta[i] = 'carta'.concat(`${i}`) 
         arrayIds[i] = data[i].id        
                
    } 

    
}

function crearReferencias() {
     
    const carta0 = document.querySelector(`id0`);
    console.log(carta0);

    
}


main();
crearReferencias();