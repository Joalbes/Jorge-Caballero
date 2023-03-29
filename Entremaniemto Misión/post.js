//refencia a la vista
const contenedorCartas = document.getElementById("contenedorCartas");
const cajaComentarios = document.getElementById("cajaComentarios");
const btnAtras = document.getElementById("btnAtras");

//eventos
btnAtras.addEventListener("click", () => {
  location.href = "./index.html";
});

const main = async () => {
  //Extraer id de local storage.
  let id;
  id = localStorage.getItem("id");
  //consulta de datos de la Api por id
  const responses = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const responsesComents = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);  
  //conversion a formato json
  const data = await responses.json();
  const dataComents = await responsesComents.json();

  contenedorCartas.innerHTML = `
  <div id="contenedorCard" class="flex flex-col items-center justify-center bg-[#E6E6E6]  rounded-lg py-[2rem] px-[4rem] w-[60%]">        
    <p class="font-bold text-2xl py-[1rem]">Post ${data.title}</p>
    <p>${data.body}</p>     
  </div>
  `;
  dataComents.forEach(element => {
    cajaComentarios.innerHTML+=`
    <div class="flex flex-row p-[1rem] bg-[#7d7d7d] rounded-lg my-[1rem]">
          <figure class="w-[15%]">
            <img src="./user.png" alt="" />
          </figure>
          <div class="w-[85%]">
            <p class="p-[1rem]">${element.name}</p>
            <p class="px-[1rem]">${element.body}</p>
          </div>
        </div>
    `
    
  });

};

main();
