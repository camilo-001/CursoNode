/*-1- el readline nos permite creaer ua interface para poder manipular stdi y el stdout*/

/* -2- El objeto process es una variable global disponible en NodeJS que nos ofrece diversas informaciones y utilidades acerca del proceso que está ejecutando un script Node. 
Contiene diversos métodos, eventos y propiedades que nos sirven no solo para obtener datos del proceso actual, sino también para controlarlo*/


require('colors');
// Estamos creando la interfaz de nuestra app 

const mostrarMenu = () => {  // Creando el menu de opciones

    return new Promise(resolve => {
        console.clear();
        console.log('================='.green);
        console.log('Seleccione una opcion'.green);
        console.log('================='.green);

        console.log(`${'1.'.green} Crear tarea`);
        console.log(`${'2.'.green} Listar tareas`);
        console.log(`${'3.'.green} Listar tareas completadas`);
        console.log(`${'4.'.green} Listar tareas pendiente`);
        console.log(`${'5.'.green} Completar tarea`);
        console.log(`${'6.'.green} Borrar tarea \n`);
        console.log(`${'0.'.green} Salir`);

        const readline = require('readline').createInterface({ //Para crear nuestra interfaz donde el usuario pueda ingresar los valores utilizando el process.stdin y el.out
            input: process.stdin, // (2)
            output: process.stdout
        });

        readline.question('Seleccione una opción: ', (opt) => { // readline nos oferce la opción de question la cual retorna un callback
            readline.close(); //debemos cerrar el readline
            resolve(opt); // enviamos la opción seleccionada
        });
    });


}
const pausa = () => {

    return new Promise(resolve => {
        const readline = require('readline').createInterface({ //Para crear nuestra interfaz donde el usuario pueda ingresar los valores utilizando el process.stdin y el.out
            input: process.stdin, // (2)
            output: process.stdout
        });

        readline.question(`\n Presiones ${'ENTER'.green} para continuar `, (opt) => { // readline nos oferce la opción de question la cual retorna un callback
            readline.close(); //debemos cerrar el readline
            resolve();
        });
    })


}

module.exports = {
    mostrarMenu,
    pausa
}