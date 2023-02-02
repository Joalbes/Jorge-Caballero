//************************ IMC *****************************************//

//********* variables ****************//
//var de entrada
let opcionMenu;
let numeroFamiliares;
let parentesco;
let altura;
let peso;
let datos = {};
let familiares = [];

//var de proceso
let entrar = true;
let entrarf = true;
let entrarC = true;

let banderaNumeroFamiliares = false;
let banderaDatosIngresados = false;
let banderaMostarDatos = false;

//var de salida
let imc;

//*************** Definición de funciones ****************//
// funcion para validar que el dato ingresado sea un numero y sea positivo
function numeroPositivo(numero,tipoDato) {
    while (entrarf) {
            if (numero <= 0 || isNaN(numero)) {
            alert('Error: Dato invalido.');  
            numero = parseFloat(prompt(`Por favor ingrese un numero positivo para ${tipoDato}`));          
        }else{
            entrarf = false;
            return numero;
        }
        
    }   
    
}  

//funcion valida que exista un string
function hayString(cadena,tipoDato) {       
    while (entrarC) {
            if (!isNaN(cadena)) {
            alert('Error: Dato invalido.');  
            cadena = prompt(`Por favor ingrese un string para ${tipoDato}`);          
        }else{
            entrarC = false;
            return cadena;
        }
        
    }   
    
}


//****************************************** Menu de entrada ************************************//
while (entrar) {
  opcionMenu = prompt(`\nSeleccione una opción del siguiente Menu:
    1. Ingrese el numero de familiares
    2. Ingresar datos necesarios para realizar calculos
    3. Mostar resultados
    4. Salir`);

  switch (opcionMenu) {

    case "1": // INgresando numero de familiares
        numeroFamiliares = parseFloat(prompt("Ingrese el numero de familiares que desea registrar:"));

        if (numeroFamiliares <= 0 || !Number.isInteger(numeroFamiliares)) {
          alert("Error: El dato ingresado debe ser un número positivo. Volvera al Menu principal")
          banderaNumeroFamiliares = false;
          }else{
            banderaNumeroFamiliares = true;
          };
        break;

    case "2":
        if(banderaNumeroFamiliares){
            for (let i = 0; i < numeroFamiliares; i++) {

                datos.nombre = prompt(`Ingrese el nombre del familiar ${i+1} :`);
                datos.nombre = hayString(datos.nombre,'nombre');
                entrarC = true;
                datos.parentesco = prompt(`Ingrese el parentesco de ${datos.nombre} :`);
                datos.parentesco = hayString(datos.parentesco,'parentesco');
                entrarC = true;
                datos.altura = parseFloat(prompt(`Ingrese la altura en metros de ${datos.nombre} :`));
                datos.altura = numeroPositivo(datos.altura,'altura');
                entrarf = true;
                datos.peso = parseFloat(prompt(`Ingrese el peso en Kilogramos de ${datos.nombre} :`)); 
                datos.peso = numeroPositivo(datos.peso,'peso');
                entrarf = true;
                
                //calculando el Imc:
                datos.imc = Math.round( datos.peso / (datos.altura**2));

                //definiendo el mensaje
                if (datos.imc < 18.5) {
                    datos.mensaje = 'Bajo Peso';                    
                } else {
                    if (datos.imc >= 18.5 && datos.imc < 25) {
                        datos.mensaje = 'Peso Normal';
                    } else {
                        if (datos.imc >= 25.0 && datos.imc <= 28.9) {
                            datos.mensaje = 'Sobrepeso';
                        } else {
                            if (datos.imc > 28.9 && datos.imc <= 34.9) {
                                datos.mensaje = 'Obeso tipo I';                                
                            } else {
                                datos.mensaje = 'Obeso tipo II';                                 
                            }
                            
                        }
                        
                    }
                    
                }

                //Agregando el objeto al vector
                familiares.push(datos);            
                
            }
            banderaMostarDatos = true;

        }else{
            alert('Error: No ha ingresado el número de familiares, por favor ingreselos primero');

            banderaDatosIngresados = false;
        }       

      break;

    case "3":

        if (banderaNumeroFamiliares == false) {
            alert('Error: No ha ingresado el numero de familiares a registrar. Vaya a la opción 1 del menu principal');            
        } else {
                       
            if (banderaMostarDatos == false) {
                alert('Error: No ha ingresasdo los datos de los familiares. Vaya a la opción 2 del menu');
                
            } else {
                familiares.forEach(el =>{
                             console.log(`\nNombre: ${el.nombre}.\nParentesco: ${el.parentesco}.\nAltura: ${el.altura}.\nPeso: ${el.peso}.\nImc: ${el.imc}.\nMensaje: ${el.mensaje}.`);;
                         }); 

                
            }
        }

      break;

    case "4":
      entrar = false;

      break;

    default:
      alert("Error: Opción no valida. Intente nuevamente");

      break;
  }
}
