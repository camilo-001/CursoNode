const {crearArchivo} = require('./helpers/multiplicar');

console.clear(); // limpia consola antes de ejecutar codigo


const[,,arg3 = 'base=4'] = process.argv;
const[, base = 5 ] = arg3.split('=');
console.log(base);

crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo,'fue creado'))
console.log(1 + "1");