require('colors');
const { guardarDb, leerDb } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput, listadoTareasBorrar, confirmar, mostrarListadoChecklist } = require('./helpers/inquirer'); // importando la función de inquireMenu 
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
                tareas.listadoCompleto();
                //console.log (tareas.listadoArr); // mostramos el listado de tareas creadas

                break;

            case '3':
                tareas.listarPendientesCompletadas(true)
                break;

            case '4':
                tareas.listarPendientesCompletadas(false)
                break;
            case '5':
                const ids = await mostrarListadoChecklist(tareas.listadoArr); // Mostrar el listado con checklist
                tareas.toogleCompletadas(ids)
                break;
            case '6':
                const id = await listadoTareasBorrar(tareas.listadoArr); // traemos el metodo para listar las tareas para borrar una 
                if (id !== '0') {
                    const ok = await confirmar('Esta seguro que desea borrarlo?') // Metodo para confirmar la eliminación de la tarea 
                    if (ok) { // si ok es igual a true
                        tareas.borrarTarea(id); // traemos el metodo de eliminar enviando el id de la tarea
                        console.log('tarea borrada');
                    }
                }

                break;
        }

        guardarDb(tareas.listadoArr); // llamamos al metodo de guardar el archivo

        await pausa();
    } while (opt !== '0') {

    }
}
main();