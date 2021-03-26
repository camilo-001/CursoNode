const fs = require('fs'); // requieriendo el fileSystem que se encuentra dentro de los paquetes de node
const { crearArchivoMultiplicar } = require('./helpers/multiplicar') // importamos la función de crear archivo con las operaicones

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true
    })
    .option('l',{
        alias: 'list',
        type: 'boolean',
        demandOption: false,
        default:false
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'la base tiene que ser un numero compa'
        }
        return true;
    })
    .argv;


console.clear();

console.log(argv);

console.log('base: yargs', argv.b);
// const [, , arg3 = 'base=5'] = process.argv; // con el process.argv podemos capturar lo que se ejecute en consola
// const [, base = 1] = arg3.split('=') // con el split podemos especificar que despues del = está lo que nos interesa

// const base = 3;

crearArchivoMultiplicar(argv.b, argv.l)// llamamos a la función enviandole el parametro
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))  // como llamamos a la función la cual es ahora una asyncFunction está retorna una promesa
    .catch(err => console.log(err));