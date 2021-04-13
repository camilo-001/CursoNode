const inquirer = require('inquirer'); // importamos el inquire
require('colors');

const preguntas = [ // el arreglo de preguntas que posee un objeto con el listado de las opciones
    {
        // el inquirer solicita estas configuraciones
        type: 'list',
        name: 'opcion',
        message: '¿Que deseas hacer?',
        choices: [ // choices serán las opciones por las cuales el usuario podrá desplazarse
            {
                value: 1,
                name: '1. Buscar ciudad'
            },
            {
                value: 2,
                name: '2. Historial'
            },
            {
                value: 0,
                name: '0. Salir'
            },
        ]
    }
];

const inquirerMenu = async () => { // creamos la función con el async o sea está es una promesa
    console.clear();
    console.log('================='.green);
    console.log('Seleccione una opcion'.green);
    console.log('================='.green);

    const { opcion } = await inquirer.prompt(preguntas); // el inquirer.prompt recibe una colección de preguntas para mostrarlas en pantalla
    return opcion; // retornamos el opt el cual contiene a opcion seleccionada del usuario

}

const continuar = [
    {
        type: 'input',
        name: 'continuar',
        message: `Presiones ${`ENTER`.green} para continuar`,
    }
]

const pausa = async () => {
    const opt = await inquirer.prompt(continuar);
    return opt
}

const leerInput = async (message) => { // creamos la función para que el usuario ingrese la nueva tarea
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) { // validate nos permite validar el input del usuario
                if (value.length === 0) { // comprobamos que el usuario haya ingresado la descripción
                    return 'por favor ingrese un valor';
                }
                return true;
            }
        }
    ];
    const { desc } = await inquirer.prompt(question); // mostramos la pregunta al usuario y esta la desestructuramos para almacenarla en desc
    return desc; // retornamos el desc
}
// creamos el metodo para el listado de las tareas para borrar el cual recibe un arreglo
const listadoLugares = async (lugares = []) => {

    const choices = lugares.map((lugar, i) => { // usamos map para retornar un arreglo nuevo con las modificaciónes para las opciones
        const idx = `${i + 1}`.green;
        return { // retornamos las opciones
            value: lugar.id,
            name: `${idx} ${lugar.nombre}`
        }
    });

    choices.unshift({
        value: '0',
        name: '0.'.green + 'Cancelar'
    });
    const preguntas = [ // creamos el listado
        {
            type: 'list',
            name: 'id',
            message: 'Seleccione lugar:',
            choices // establecemos las opciones
        }
    ]
    const { id } = await inquirer.prompt(preguntas);
    return id;
}

// ahora creamos un metodo para confirmar si desea borrar la tarea
const confirmar = async (message) => {
    const question = [
        {
            type: 'confirm', // de tipo confirm 
            name: 'ok',
            message
        }
    ];
    const { ok } = await inquirer.prompt(question); // mostramos el prompt
    return ok;
}

// creando el listado de tarea para completarla
const mostrarListadoChecklist = async (tareas = []) => {

    const choices = tareas.map((tarea, i) => { // usamos map para retornar un arreglo nuevo con las modificaciónes para las opciones
        const idx = `${i + 1}`.green;
        return { // retornamos las opciones
            value: tarea.id,
            name: `${idx} ${tarea.desc}`,
            checked: (tarea.completadoEn) ? true : false // para mostrar las tareas ya completadas marcadas
        }
    });
    const preguntas = [ // creamos el listado
        {
            type: 'checkbox', // utilizando el checkbox
            name: 'ids', 
            message: 'Seleccion',
            choices // establecemos las opciones
        }
    ]
    const { ids } = await inquirer.prompt(preguntas);
    return ids;
}


module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listadoLugares,
    confirmar, 
    mostrarListadoChecklist
}