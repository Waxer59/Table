const fs = require("fs");
const colors = require("colors");

const crearArchivo = (base = 5, listar = false, hasta = 10) => {
  return new Promise((resolve, reject) => {
    let salida = '';
    let consola = '';

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} * ${i} = ${base * i}\n`;
      consola += `${base} ${"x".blue} ${i} ${"=".blue} ${base * i}\n`;
    }
    if (listar) {
      console.log("==================".green);
      console.log(`tabla de ${base}`.green);
      console.log("==================".green);
      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    resolve("Tabla del " + base);
  });
};

module.exports = {
  crearArchivo,
};
