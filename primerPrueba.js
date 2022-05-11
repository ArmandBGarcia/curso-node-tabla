//TODO: La linea de abajo trae las funciones del File System y las guarda en fs
// const fs = require("fs");

// console.clear();
// console.log("=========================");
// console.log("tabla del 5");
// console.log("=========================");

// const tabla = (num = 5) => {
//   console.log(`Tabla del: ${num}`);
//   console.log("=========================");
//   for (let i = 1; i < 11; i++) {
//     console.log(`${num} * ${i} = ${i * num}`);
//   }
// };
// tabla(8);

// // const base = 8;
// let salida = "";

// for (let i = 1; i <= 10; i++) {
//   salida += `${base} x ${i} = ${base * i}\n`;
// }

console.log(salida);
//TODO: la funcion writeFile de node crea un archivo con base en el resultado del segundo parametro,  el cual esta haciendo referencia al resultado de generar la tabla
fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
  if (err) throw err;
  console.log(`tabla-${base}.txt creado`);
});
//TODO: writeFileSync cumple la misma funcion de arriba pero de manera sincrona, y mas sencilla, para atrapar un error  en esta funcion se tendria que utilizar try catch...
fs.writeFileSync(`tabla-${base}.txt`, salida);
console.log(`tabla-${base}.txt creado`);

const { crearArchivo } = require("./helpers/multiplicar");

console.clear();


// TODO: la constantes de abajo se estan utilizando para destructurar el arreglo que viene desde la consola ↓↓↓
// TODO: La propiedad process.argv devuelve una matriz que contiene los argumentos de la línea de comandos, el primer elemmento es el exactPath, el segundo la ruta, Los elementos restantes serán cualquier argumento de línea de comando adicional.↓↓↓
const [, , arg3 = "base=10"] = process.argv;
const [, base] = arg3.split("=");

// const base = 5;

crearArchivo(base)
  .then((nombreArchivo) => console.log(nombreArchivo, "creado"))
  .catch((err) => console.log(err));

// TODO: --base=numero se utiliza en la consola de node para acceder a la base de la funcion multiplicar y cambiar su valor ↑↑↑

