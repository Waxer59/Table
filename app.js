const { crearArchivo } = require("./helpers/multiplicar"); // importar una un objeto
const colors = require('colors');
const argv = require('./config/yargs')

console.clear(); // limpiar la consola

crearArchivo(argv.b,argv.l,argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo.rainbow, "creada".rainbow))
  .catch((err) => console.log(err));


// const [,,arg3 = 'base=5'] = process.argv;
// const [,base = 5] = arg3.split('=')

/*
fs.writeFile( `tabla-${base}.txt`, salida, (err)=>{ // 1. nombre de archivo y destino 2. contenido de archivo 3. callback
  if(err) throw err;
  console.log("Archivo txt creado")
} )
*/
