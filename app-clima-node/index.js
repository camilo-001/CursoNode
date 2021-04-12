const { inquirerMenu, leerInput, pausa } = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');

const main = async () => {

    let opt = '';

    do {
        opt = await inquirerMenu();
        switch (opt) {
            case 1:
                // mostrar mensaje
                const lugar = await leerInput('Ciudad; ')
                console.log(lugar);
                // mostrar los resultados
                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad: ',);
                console.log('lat:',);
                console.log('lang:',);
                console.log('\Temperatura:',);
                console.log('Mínima');
                console.log('Maxima',);

                break;
            case 2:
                console.log("seleccionaste la opción dos perra");
                break;
        }

        await pausa();
    } while (opt !== 0) {

    }
}
main();