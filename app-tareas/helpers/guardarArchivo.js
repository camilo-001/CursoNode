
const fs = require('fs');

const guardarDb = (data) => {

    const archivo = './db/data.json' // la ruta donde se almacenara el archivo
    fs.writeFileSync(archivo, JSON.stringify(data)); // debemos convertir la data a un string para poder almacenarla

}
module.exports = {
    guardarDb
}