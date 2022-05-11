
//TODO:   fs (File System) es un paquete que esta implicito en node y sirve para acceder a lor archivos del sistema con la consola de Node, esto es abrir, modificar o crear archivos nuevos.
const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = "";
    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }

    if(listar){
      console.log("=========================".rainbow);
      console.log(`tabla del:`, base);
      console.log("=========================".rainbow);
      console.log(colors.rainbow(salida));
      }

      // console.log(colors.rainbow(salida));
    

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt creado`;
  } catch (error) {
    throw error;
  }
};

//TODO: module.export permite exportar codigo a otros archivos
module.exports = {
  crearArchivo,
};
