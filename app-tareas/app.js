require('colors');
const { inquirerMenu, pausa , leerInput} = require('./helpers/inquirer'); // importando la función de inquireMenu 
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');



// creando la clase main 
let opt = '';

const tareas = new Tareas(); // inicializando las tareas
const main = async () => { // utilizamos el async ya que al implementar varias funciónes estas deberán de ejecutarse en secuencia

    do {
        opt = await inquirerMenu(); // utilizando la función de inquirer 
        
        switch(opt){
            case'1':
            const desc = await leerInput('Descripcion de la tarea:'); // utilizamos la función de leer inputt 
            tareas.crearTarea(desc); // utilizando el metodo de crear tarea enviamos la descripción de la tarea que ingreso el usaurio

            break;
            case'2':
            console.log(tareas._listado); // mostramos el listado de tareas creadas
            break;
        }
    
        await pausa();
    } while (opt !== '0') {

    }
}
main();