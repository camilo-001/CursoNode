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

    borrarTarea(id = '') {
        if (this._listado[id]) {
            delete this._listado[id];
        }
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

    toogleCompletadas(ids = []) { // función para completar las tareas
        ids.forEach(id => {
            const tarea = this._listado[id]; // almacenamos el listado de ids que se encuentren
            if (!tarea.completadoEn) { // verificamos si estas tareas fueron completadas o no
                tarea.completadoEn = new Date().toISOString() // si no han sido completadas el date se lo da el toISOString
            }
        });
        this.listadoArr.forEach(tarea => { // para desmarcar las tareas completadas
            if (!ids.includes(tarea.id)) { // verificamos si las que no estan marcadas
                this._listado[tarea.id];
                tarea.completadoEn = null; // las no marcadas les asiganmos el null
            }
        })
    }

}


module.exports = Tareas;