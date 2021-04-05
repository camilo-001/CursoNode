require('colors');
const { inquirerMenu,pausa } = require('./helpers/inquirer'); // importando la función de inquireMenu 
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');



// creando la clase main 
 let opt = '';
const main = async () => { // utilizamos el async ya que al implementar varias funciónes estas deberán de ejecutarse en secuencia
    console.clear();

    do {
        // opt = await inquirerMenu(); // utilizando la función de inquirer 
        // console.log({ opt });}
        const tareas = new Tareas();
        const tarea = new Tarea('Comprar comida');
        tareas._listado[tarea.id] = tarea;
        console.log(tareas);

        await pausa();
    } while (opt !== '0') {

    }
}
main();