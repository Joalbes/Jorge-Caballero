
//refencia a la vista
const contenedorCartas = document.getElementById("contenedorCard");
//const carta = document.getElementsByTagName("id");


function setLocal(event) {
    localStorage.setItem('id', event.target.id)
    //location.href = 'index2.html'
    location.href ='./post.html'
}

const main = async ()=> {
    const responses = await fetch('https://jsonplaceholder.typicode.com/posts')
    console.log(responses);
    const data = await responses.json();

    for (let i = 0; i < 20; i++) {
        contenedorCartas.innerHTML +=                    
        `<!-- card -->
            <div id="${data[i].id}" class=" w-[15rem] bg-orange-400 rounded-lg p-[1rem]">
                <h1 id="${data[i].id}" class="font-bold text-sm  pb-[1rem]">${data[i].title}</h1>
                <p id="${data[i].id}" class="text-xs">${data[i].body}</p>
            </div>`      
                
    } 

    for (let index = 0; index < 20; index++) {
      document.getElementById(`${data[index].id}`).addEventListener('click',setLocal)
        
    }   
}
main();