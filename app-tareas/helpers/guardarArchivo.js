const fs = require('fs');

const archivo = './db/data.json' // la ruta donde se almacenara el archivo

const guardarDb = (data) => {

    fs.writeFileSync(archivo, JSON.stringify(data)); // debemos convertir la data a un string para poder almacenarla
}

const leerDb = () => { // metodo para leer el archivo json
    if (!fs.existsSync(archivo)) { // confirmando si el archivo existe
        return null; // si no existe retornamos null
    }
    
    // usando el readFile para la lectura
    const info = fs.readFileSync(archivo, { encoding: 'utf-8' });
    const data = JSON.parse(info) // convirtiendo el string de nuevo a un JSON
    return data // retornando el arreglo de de las tareas
}
module.exports = {
    guardarDb,
    leerDb
}