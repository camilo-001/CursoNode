// fs.writeFile(`tabla-${base}.txt`, salida, (err) => { // el fs.writeFile, nos permite crear archivos, recibe la data y un callback
//     if (err) throw err;
//     console.log('Tabla-5.txt creado')
// })

const fs = require('fs');

// cramos una función para crear el archivo que contenta las operaciones
const crearArchivoMultiplicar = async (base = 5) => { // agregando el async para retornar una promesa

    try {
        console.log('===================');
        console.log(`Tabla del ${base}`);
        console.log('===================');

        let salida = '';

        for (let i = 1; i <= 10; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }
        console.log(salida);

        fs.writeFileSync(`tabla-${base}.txt`, salida); // el fs.writeFileSync nos permite realizar la misma tarea que el writeFile, solo que esta trabaja con promesas

        return ` tabla-${base}.txt`;
    }
    catch (error) {
        throw error;
    }

}

module.exports = { // para poder importar esta función desde otro archivo debemos exportarla de esta forma
    crearArchivoMultiplicar
}