require('colors');
const { guardarDb, leerDb } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer'); // importando la función de inquireMenu 
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');



// creando la clase main 
let opt = '';

const tareas = new Tareas(); // inicializando la clase tareas
const main = async () => { // utilizamos el async ya que al implementar varias funciónes estas deberán de ejecutarse en secuencia

    const tareasDb = leerDb(); // leyendo toda la data que se encuentra en nuestro bd (archivo json)
    if (tareasDb) { // verficamos si existe el listado
        tareas.cargarTareasFromArray(tareasDb) // si existe llamamos al metodo para cargar las tareas al listado del programa enviando el array del documento
    }

    do {
        opt = await inquirerMenu(); // utilizando la función de inquirer para imprimir el menu

        switch (opt) {
            case '1':
                const desc = await leerInput('Descripcion de la tarea:'); // utilizamos la función de leer inputt 
                tareas.crearTarea(desc); // utilizando el metodo de crear tarea enviamos la descripción de la tarea que ingreso el usaurio

                break;
            case '2':
                console.log(tareas.listadoArr); // mostramos el listado de tareas creadas
                break;
        }

        guardarDb(tareas.listadoArr); // llamamos al metodo de guardar el archivo

        await pausa();
    } while (opt !== '0') {

    }
}
main();