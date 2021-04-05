const { v4: uuidv4 } = require('uuid');

class Tarea { // creación de la clase tarea

    constructor(desc) {

        this.id = uuidv4(); // uuidv4 proporciona un id aleatorio
        this.desc = desc;
        this.compleradoEn = null;
    }
}

module.exports = Tarea; // no exportamos como objeto debido a que es una clase 