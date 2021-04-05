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
                value: '1',
                name: '1. Crear tarea'
            },
            {
                value: '2',
                name: '2. Listar tareas'
            },
            {
                value: '3',
                name: '3. Listar tareas completadas'
            },
            {
                value: '4',
                name: '4. Listar tareas pendientes '
            },
            {
                value: '5',
                name: '5. Completar tarea '
            },
            {
                value: '6',
                name: '6. Borrar tarea '
            },
            {
                value: '0',
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
            validate(value){ // validate nos permite validar el input del usuario
                if(value.length === 0){ // comprobamos que el usuario haya ingresado la descripción
                    return 'por favor ingrese un valor';
                }
                return true;
            }
        }
    ];
    const {desc} = await inquirer.prompt(question); // mostramos la pregunta al usuario y esta la desestructuramos para almacenarla en desc
    return desc; // retornamos el desc
}
module.exports = {
    inquirerMenu,
    pausa,
    leerInput
}