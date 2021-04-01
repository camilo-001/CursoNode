const inquirer = require('inquirer'); // importamos el inquire
require('colors');

const preguntas = [ // el arreglo de preguntas que posee un objeto con el listado de las opciones
    {
         // el inquirer solicita estas configuraciones
        type: 'list',
        name: 'opcion',
        message: '¿Que deseas hacer?',
        choices: ['opt1', 'opt2', 'opt3'] // choices serán las opciones por las cuales el usuario podrá desplazarse
    }
];

const inquirerMenu = async () => { // creamos la función con el async o sea está es una promesa
    console.clear();
    console.log('================='.green);
    console.log('Seleccione una opcion'.green);
    console.log('================='.green);

    const opt = await inquirer.prompt(preguntas); // el inquirer.prompt recibe una colección de preguntas para mostrarlas en pantalla
    return opt; // retornamos el opt el cual contiene a opcion seleccionada del usuario

}

module.exports = {
    inquirerMenu
}