const fs = require('fs'); // requieriendo el fileSystem que se encuentra dentro de los paquetes de node
const { crearArchivoMultiplicar } = require('./helpers/multiplicar') // importamos la función de crear archivo con las operaicones

console.clear();

const [, , arg3 = 'base=5'] = process.argv;
const [, base = 1] = arg3.split('=')

// const base = 3;

crearArchivoMultiplicar(base)// llamamos a la función enviandole el parametro
.then(nombreArchivo  => console.log(nombreArchivo,'creado')) 
.catch(err => console.log(err));