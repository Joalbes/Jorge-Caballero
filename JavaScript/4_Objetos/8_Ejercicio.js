const coex = {
  empleados: [
    {
      nombre: "Juanjose",
      edad: 23,
      direccion: {
        calle: 16,
        carrera: 66,
        orientacion: "w",
      },
      telefonos: ["1234567", "7654321"],
      hobbies: ["videojuegos", "peliculas"],
    },
    {
      nombre: "Pedro",
      edad: 25,
      direccion: {
        calle: 56,
        carrera: 42,
      },
      telefonos: ["65465458", "132138"],
      hobbies: ["futbol", "peliculas"],
    },
    {
      nombre: "Maria",
      edad: 27,
      direccion: {
        calle: 6,
        carrera: 12,
      },
      telefonos: ["1234567", "7654321"],
      hobbies: ["trotar"],
    },
    {
      nombre: "Luis",
      edad: 29,
      direccion: {
        calle: 66,
        carrera: 2,
        orientacion: "w",
      },
      telefonos: ["1234567", "7654321"],
      hobbies: ["futbol"],
    },
    {
      nombre: "Luisa",
      edad: 31,
      direccion: "conjunto el dorado apto 123",
      hobbies: ["cocinar", "programar"],
    },
  ],
};

console.log(coex);

// Imprimir nombre de los empleados
const { nombre } = coex.empleados;
coex.empleados.forEach((element) => {
  console.log(`Nombre: ${element.nombre}`);
});

//En un solo string imprimir la direccion completa de cada empleado.
let dir
const { direccion } = coex.empleados;
coex.empleados.forEach((element) => {
  if (element.direccion !== String) {
    if (element.direccion.carrera) {
    } else {
    }
  } else {
    console.log(`Direccion: ${element.direccion}`);
  }
});

//***************************************************************************************************************************//
//   //Imprimir el nombre de los empleados:
//   console.log('1.Estos son los colaboradores de Coex:');

//   coex.empleados.forEach(element => {
//     console.log(`Nombre: ${element.nombre}`);

//   });

//   //En un solo string imprimir la direccion completa de cada empleado.
//   console.log(`\n2. Estas son las direcciones de cada empleado`);
//   coex.empleados.forEach(element => {
//     console.log(`La direccion de ${element.nombre} es:\n Cr: ${element.direccion.carrera} con calle ${element.direccion.calle}, orientacion ${element.direccion.orientacion} y conjunto${element.direccion} `);

//   });

//Imprimir los Hobbies del primer y ultimo empleado.:
//   console.log('\n3. Imprimir los Hobbies del primer y ultimo empleado:');

//    primerUltimo = coex.empleados;
//     console.log(`EL hobby de ${ primerUltimo.shift().nombre} es:  ${ primerUltimo.shift().hobbies}`);
//     console.log(`EL hobby de ${ primerUltimo.pop().nombre} es:  ${ primerUltimo.pop().hobbies}`);

//Imprimir el nombre y la edad de los 3 ultimos empleados:
// console.log("\n4.Imprimir el nombre y la edad de los 3 ultimos empleados:");
// ultimosTres = coex.empleados.slice(2);
// console.log(coex.empleados);

// ultimosTres.forEach((element) => {
//   console.log(`Nombre: ${element.nombre} tiene ${element.edad} años`);
// });

//   //Imprimir el nombre y el primer telefono de todos los empleados.
//   console.log(`\n5 Nombre y primer telefono de todos los empleados`)
//   coex.empleados.forEach(el =>{
//     if(el.nombre != null && el.nombre != null){

//     console.log(`Nombre: ${el.nombre}.\nTelefono: ${el.telefonos[0]}`);
//     }else if(el.telefonos == null){

//     console.log(`Nombre: ${el.nombre}.\nTelefono: no tiene.`);
//     }

//   });
