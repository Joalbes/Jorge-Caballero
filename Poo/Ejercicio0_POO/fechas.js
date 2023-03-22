let fecha2 = new Date('2023-03-21');
console.log(`Fecha2: ${fecha2}`);
let fecha1 = new Date('2023-04-01');
console.log(`fecha1: ${fecha1}`);
let diferencia = fecha2 - fecha1;
console.log(`diferencia: ${diferencia}`);
console.log(`Días: ${Math.abs(diferencia / (1000*60*60*24)) }`);