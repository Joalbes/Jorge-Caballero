//****Instituto Turbo Coex ******/

//variables de entrada
let numeroEstudiantes;
let nombre;
let codigo;
let nivel;
let nota;
let opcionMenu;
let estudiantes = new Array();
let alumno = { nombre: "", codigo: "", nivel: "", nota1: 0, nota2: 0, nota3: 3, promedio: 0, aprobo: "" }

//variables de proceso
let entrarMenu = true;
let entrarValidacionEntero = true;
let entrarValidacionCodigo = true;
let entrarMenuNivel = true;
let entrarNotaValida = true;
let notaAcumulada = 0;


//variables bandera
let banderaNumeroEstudiantes = false;
let banderaRegistroEstudiantes = false;
let banderaNotas = false;

//varaibles de salida
let promedioEstuduiante;
let promedioGrupo;

//******Definición de funciones*********//

//Valida si el dato ingresado es un entero mayor que cero
function validacionEntero(dato, tipoDato) {
    while (entrarValidacionEntero) {
        dato = parseFloat(prompt(`Ingrese el ${tipoDato}: `))
        if (dato <= 0 || !Number.isInteger(dato)) {
            entrarValidacionEntero = true;
            alert(`Error: Dato Invalido. Intente ingresar un ${tipoDato} correcto.`)
        } else {
            entrarValidacionEntero = false;
            return dato;
        }

    }
}

//Valida que no exista un codigo igual.
function validacionCodigoDiferente(arreglo, cod) {
    let k = 0;
    do {
        if (arreglo[k].codigo.includes(cod)) {
            alert('Error: Codigo Repetido');
            cod = prompt('Ingrese un codigo nuevo');
            k--;
            
        } else {
            entrarValidacionCodigo = false;
            return cod;
            
        }
        k++;
        
    } while (entrarValidacionCodigo);
    

}

//Funcion Menu nivel
function menuNivel(numero){    
    while (entrarMenuNivel) {
        switch (numero) {
            case "1":
                return "Beginner";                
                break;

            case "2":
                return "Junior";            
                break;

            case "3":
                return "Senior";            
                break;

            case "4":
                entrarMenuNivel = false;            
                break;
    
            default:
                alert('Ingrese un numero valido.');
                numero = prompt(`Ingrese el nivel segun la experiencia:\n1. Beginner.\n2. Junior.\n3. Senior. `);
                break;
        }
        
    }
}

//Nota Valida
function notaValida(nota) {
    while (entrarNotaValida) {
        if(nota < 0 || isNaN(nota)){
            alert('Error: Numero no valido.Intente de nuevo.')
            nota = parseFloat(prompt('Ingrese una nota valida.'))
        }else{
            entrarNotaValida = false;
            return nota;    
        }
        
    }
    
    
}
//**** Logica *******//

//creacion del menu
while (entrarMenu) {
    opcionMenu = prompt(`Seleccione una de las siguientes opciones:
    1. Ingrese el número de estudiantes
    2. Ingrese los datos de los estudiantes
    3. Mostrar listado de estudiantes
    4. Registrar notas de estudiantes
    5. Imprimir notas de estudiantes.
    6. Salir.`);

    switch (opcionMenu) {

        case '1'://Ingreso numero de estudiantes
            numeroEstudiantes = validacionEntero(numeroEstudiantes, 'Número de estudiantes');
            banderaNumeroEstudiantes = true;
            entrarValidacionEntero = true;
            console.log(`Numero de estudiantes: ${numeroEstudiantes}`);
            break;

        case '2'://Ingreso datos basicos del estudiante.
            if (banderaNumeroEstudiantes) {
                for (let i = 0; i < numeroEstudiantes; i++) {
                    alumno.nombre = prompt(`Ingrese el nombre del estudiante ${i + 1}:`);

                    alumno.codigo = prompt(`Ingrese el codigo de ${i + 1}:`);
                    //alumno.codigo = validacionCodigoDiferente(estudiantes,alumno.codigo);
                    //entrarValidacionCodigo = true;

                    alumno.nivel = prompt(`Ingrese el nivel segun la experiencia:\n1. Beginner.\n2. Junior.\n3. Senior. `);
                    alumno.nivel= menuNivel(alumno.nivel);
                    entrarMenuNivel = true; 

                    estudiantes[i] = alumno;
                    alumno = {};

                }
                banderaRegistroEstudiantes = true;

            } else {
                alert('Error:No ha ingresado el número de estudiantes, Vuelva a la opción "1" del menu principal');
            }

            break;

        case '3': //Mostar datos de estudiantes
            if (banderaNumeroEstudiantes == false) {
                alert('Error: Ingrese primero el numero de estudiantes. Vaya a la opción "1" del menu principal.');
            } else {
                if (banderaRegistroEstudiantes == false) {
                    alert('Error: Ingrese primero los datos b{asicos de los estudiantes. Vaya a la opción "2" del menu principal.');

                } else {
                    console.log('El listado de estudiantes es:');
                    estudiantes.forEach(element => {
                        console.log(`Estudiante: ${element.nombre}.\nCódigo: ${element.codigo}.\nNivel: ${element.nivel}`);

                    })


                }

            }
            break;

        case '4': //Registrar notas de estudiantes
            if (banderaNumeroEstudiantes == false) {
                alert('Error: Ingrese primero el numero de estudiantes. Vaya a la opción "1" del menu principal.');
            } else {
                if (banderaRegistroEstudiantes == false) {
                    alert('Error: Ingrese primero los datos básicos de los estudiantes. Vaya a la opción "2" del menu principal.');

                } else {

                    for (let j = 0; j < estudiantes.length; j++) {

                        estudiantes[j].nota1 = parseFloat(prompt(`Ingrese la nota 1 de ${estudiantes[j].nombre}:`));
                        estudiantes[j].nota1 = notaValida(estudiantes[j].nota1);
                        entrarNotaValida = true;

                        estudiantes[j].nota2 = parseFloat(prompt(`Ingrese la nota 2 de ${estudiantes[j].nombre}:`));
                        estudiantes[j].nota2 = notaValida(estudiantes[j].nota2);
                        entrarNotaValida = true;

                        estudiantes[j].nota3 = parseFloat(prompt(`Ingrese la nota 3 de ${estudiantes[j].nombre}:`));
                        estudiantes[j].nota3 = notaValida(estudiantes[j].nota3);
                        entrarNotaValida = true;

                        estudiantes[j].promedio = (estudiantes[j].nota1 + estudiantes[j].nota2 + estudiantes[j].nota3) / 3;
                        if (estudiantes[j].promedio >= 3.5) {
                            estudiantes[j].aprobo = "Si.";
                        } else {
                            estudiantes[j].aprobo = "No."
                        }

                    }
                    banderaNotas = true;

                }

            }



            break;

        case '5':// Imprimir notas de estudiantes
            if (banderaNumeroEstudiantes == false) {
                alert('Error: Ingrese primero el numero de estudiantes. Vaya a la opción "1" del menu principal.');
            } else {
                if (banderaRegistroEstudiantes == false) {
                    alert('Error: Ingrese primero los datos básicos de los estudiantes. Vaya a la opción "2" del menu principal.');

                } else {
                    if (banderaNotas == false) {
                        alert('Error: Ingrese primero las notas de los estudiantes. Vaya a la opción "3" del menu principal.');

                    } else {

                        estudiantes.forEach(el => {
                            console.log(`Estudiante: ${el.nombre}.\nNota1: ${el.nota1}.\nNota2: ${el.nota2}.\nNota3: ${el.nota3}.\nNota Final: ${el.promedio}.\nAprobó: ${el.aprobo}.\n`);
                            notaAcumulada += el.promedio;

                        })

                    }

                }

            }
            console.log('La nota promedio del grupo es: ' + (notaAcumulada / numeroEstudiantes));

            break;

        case '6'://salir
            entrarMenu = false;
            break;

        default:
            alert('Error: Ingrese una opción valida. Intente nuevamente');
            break;
    }



}