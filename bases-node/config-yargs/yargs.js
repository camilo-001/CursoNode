const argv = require('yargs') // importando yargs
    .option('b', { // yarhs nos permite usar opciones donde definimos una variable la cual recibira valores
        alias: 'base', // tambien definimos el alias de esa variable
        type: 'number', // el tipo de dato que recibe 
        demandOption: true, // si este es requiro
        describe:' Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'list',
        type: 'boolean',
        demandOption: false,
        default: false,
        describe:'Muestra la tabla en consola'
    })
    .option('h',{
    alias:'hasta',
    type:'number',
    demandOption: false,
    default:10,
    describe:'Define hasta que numero se creara la tabla de multiplicar'
    })
    .check((argv, options) => { // el check es utilizado para verificar las el tipo de dato de la varibale enviada, y retornar un error
        if (isNaN(argv.b)) { // establecemos la condicion de que si el argv.b se define como isNaN 
            throw 'la base tiene que ser un numero compa'
        }
        return true; // al finalizar la evaluación debemos indicar si esta no dio verdadera entonces que retorne un true indicando que se evaluó
    })
    .argv;

    module.exports = argv;