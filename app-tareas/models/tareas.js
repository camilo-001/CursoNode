// creamos Tareas para manejar varias tareas, esta clase es para manipular el listado de tareas
require('colors');
const Tarea = require("./tarea");

class Tareas {

    get listadoArr() { // get para convertir nuestro objeto de listado de tareas en un arreglo
        const listado = [];

        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key]
            listado.push(tarea)
        })
        return listado;
    }

    constructor() {
        this._listado = {}; // en listado se almacenarán todas las tareas en forma de objetos
    }

    cargarTareasFromArray(tareas = []) { // función para enviar el listado de tareas del array de bd al listado del programa
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        })
    }

    listadoCompleto() {
        // console.log(this.listadoArr)

        this.listadoArr.forEach((dato, i) => {
            const idx = `${i + 1}`.green
            const { desc, completadoEn } = dato;
            const estado = (completadoEn)
                ? 'Completada'.green
                : 'Pendiente'.red;
            console.log(`${idx} ${desc} :: ${estado}`);
        })
    }

    crearTarea(desc = '') {// creamos el metodo para la creación de la tarea el cual recibe la descripción de la tarea

        const tarea = new Tarea(desc); // instanciamos la clase de tarea
        this._listado[tarea.id] = tarea; // ye enviamos la tarea al listado proporcionando un id
    }

    listarPendientesCompletadas(completadas = true) {

        let idx = 0;
        this.listadoArr.forEach((dato, i) => {

            const { desc, completadoEn } = dato;
            const estado = (completadoEn)
                ? 'Completada'.green
                : 'Pendiente'.red;

            if (completadas) {
                // mostrar las completadas
                if (completadoEn) {
                    idx += 1;
                    console.log(`${(idx + '.'.green)} ${desc} :: Completada el ${(':' + completadoEn).green}`);

                }
            } else {
                // mostrar las pendientes
                if (!completadoEn) {
                    idx += 1;
                    console.log(`${(idx + '.'.green)} ${desc} :: ${estado}`);
                }
            }

        });
    }

}


module.exports = Tareas;