// creamos Tareas para manejar varias tareas 

const Tarea = require("./tarea");

class Tareas {

    constructor() {
        this._listado = {}; // en listado se almacenarán todas las tareas en forma de objetos
    }

    crearTarea(desc = '') {// creamos el metodo para la creación de la tarea el cual recibe la descripción de la tarea

        const tarea = new Tarea(desc); // instanciamos la clase de tarea
        this._listado[tarea.id] = tarea; // ye enviamos la tarea al listado proporcionando un id
    }
}

module.exports = Tareas;