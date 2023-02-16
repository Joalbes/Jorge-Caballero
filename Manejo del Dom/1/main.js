
//variables
const body = document.getElementById('body');
const contenido = document.getElementById('content')
const entradas = document.getElementById('entradas');
const platosfuertes = document.getElementById('platosfuertes');
const ensaladas = document.getElementById('ensaladas');
const postres = document.getElementById('postres');
const bebidas = document.getElementById('bebidas');

//adicionando eventos
entradas.addEventListener('click',fEntradas);
platosfuertes.addEventListener('click',fPlatosFuertes);
ensaladas.addEventListener('click',fEnsaladas);
postres.addEventListener('click',fPostres);
bebidas.addEventListener('click',fBebidas);


//funciones
function fEntradas(){
    content.innerHTML=`<h2>Entradas</h2>
    <p>La arepa de afrecho y zanahoria es una variación más saludable de la arepa tradicional. La idea de este
        tipo de arepa es sustituir un poco de harina de maíz por ingredientes con más fibra, como la zanahoria y
        el afrecho..</p>
    <img src="https://www.laylita.com/recetas/wp-content/uploads/2022/12/Arepas-de-afrecho-y-zanahoria-receta-1024x683.jpg" alt="">
    <p>Observe que, la imagen también se redimensiona.</p>`

}

function fPlatosFuertes(){
    content.innerHTML=`
    <h2>Platos Fuertes</h2>
    <p>Esta es una receta fácil para preparar un delicioso tiradito de salmón con maracuyá. El tiradito es un
        plato típico peruano que consiste en laminas finas de pescado crudo (tipo sashimi) cubierto con una
        salsa acídica y picante. A diferencia del ceviche, el tiradito se consume al momento de prepararlo, o
        sea no se deja marinar. Se podría decir que el tiradito es una fusión del ceviche y el sashimi (o el
        crudo italiano).</p>
    <img src="https://www.laylita.com/recetas/wp-content/uploads/2022/04/Receta-del-tiradito-de-salmon-1024x768.jpg" alt="">
    <p>Observe que, la imagen también se redimensiona.</p>`
}

function fEnsaladas(){
    content.innerHTML=`
    <h2>Ensaladas</h2>
    <p>El ceviche de palmito es un clásico ceviche ecuatoriano, esta receta es popular en la Sierra ecuatoriana.
        Este ceviche vegano es super fácil de preparar. Lo más importante, aparte de usar ingredientes frescos y
        buena calidad, es asegurarse de que los ingredientes estén bien marinados para ayudar a maximizar el
        sabor del ceviche. Se puede servir solo o también le agregar aguacate (imprescindible para mí) o ají
        picadito para un toque picante. Incluso le puede agregar ingredientes adicionales como mango para un
        toque dulce o un poco de pulpa o jugo puro de maracuyá para darle un saborcito tropical..</p>
    <img src="https://www.laylita.com/recetas/wp-content/uploads/2022/01/Ceviche-de-palmito-y-aguacate-1024x682.jpg" alt="">
    <p>Observe que, la imagen también se redimensiona.</p>`
    
}

function fPostres(){
    content.innerHTML=`<h2>Postres</h2>
    <p>Corta el hojaldre en cubos, en un cubo de base, rellénalo con Arequipe Alquería frío y pon el otro encima
        y cierra los bordes con un tenedor.
    </p>
    <img src="https://www.laylita.com/recetas/wp-content/uploads/2022/04/Receta-del-tiradito-de-salmon-1024x768.jpg" alt="">
    <p>Observe que, la imagen también se redimensiona.</p>`
}

function fBebidas(){
    content.innerHTML=`
    <h2>Bebidas</h2>
        <p>M Añade al vaso de la licuadora la LECHE CONDENSADA LA LECHERA® ligth, el zumo de limón, el agua, el
            hielo, las hojas de hierbabuena y licua a velocidad alta hasta que la hierbabuena quede totalmente
            triturada.</p>
        <img src="https://www.recetasnestle.com.co/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/e177cb09bc3aa29503dfb4f80ea7e62c.webp?itok=-ePmBQzq"
            alt="">
        <p>Observe que, la imagen también se redimensiona.</p>`
    
}

