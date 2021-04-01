require('colors');
const { inquirerMenu } = require('./helpers/inquirer'); // importando la función de inquireMenu 
const { pausa } = require('./helpers/mensajes'); // importando las funciones desde helpers


// creando la clase main 

const main = async () => { // utilizamos el async ya que al implementar varias funciónes estas deberán de ejecutarse en secuencia
    console.clear();
    let opt = '';
    console.log('Hola mundo');
    do {
        opt = await inquirerMenu(); // utilizando la función de inquirer menu
        console.log({ opt });
        if (opt !== '0') await pausa(); // si no usamos el await aca se ejecutará de nuevo el do
    } while (opt !== '0') {

    }
}
main();