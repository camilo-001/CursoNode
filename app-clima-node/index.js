// require('dotenv').config() 
require('dotenv').config({ path: './token.env' })// usando el paquete de dotenv para la configuración de variables de entorno


const { inquirerMenu, leerInput, pausa, listadoLugares } = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');

const main = async () => {

    const busquedas = new Busquedas();
    let opt = '';

    do {
        opt = await inquirerMenu();
        switch (opt) {
            case 1:
                // mostrar mensaje
                const termino = await leerInput('Ciudad; ') // almacenamos la respuesta del usuario
                //buscar los lugares
                const lugares = await busquedas.ciudad(termino); // buscamos la ciudad 
                //seleccionar el lugar
                const idSeleccionado = await listadoLugares(lugares) // creamos la lista con el arrelo de los lugare
                if (idSeleccionado === '0') continue; // validamos por si quiere cancelar
                const lugarSeleccionado = lugares.find(l => l.id === idSeleccionado) // extraemos la información del lugar que coincida con el id
                //Guardar en DB
                busquedas.agregarHistorial(lugarSeleccionado.nombre);
                // clima
                const clima = await busquedas.climaLugar(lugarSeleccionado.lat, lugarSeleccionado.lng);
                // mostrar los resultados
                console.clear();
                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad: ', lugarSeleccionado.nombre); // mostramos la información con cada dato que necesitamos (nombre de ciudad)
                console.log('lat:', lugarSeleccionado.lat);
                console.log('lang:', lugarSeleccionado.lng);
                console.log('Temperatura:', clima.temp);
                console.log('Mínima', clima.min);
                console.log('Maxima', clima.max);
                console.log('Como está el clima:', clima.desc);

                break;
            case 2:
                busquedas.historialCapitalizado.forEach((lugar ,i )=>{
                    const idx =`${i + 1}.`.green
                    console.log(`${idx} ${lugar}`);
                })
                break;
        }

        await pausa();
    } while (opt !== 0) {

    }
}
main();