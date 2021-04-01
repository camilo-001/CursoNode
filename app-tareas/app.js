require('colors');
const { inquirerMenu,pausa } = require('./helpers/inquirer'); // importando la función de inquireMenu 



// creando la clase main 
 let opt = '';
const main = async () => { // utilizamos el async ya que al implementar varias funciónes estas deberán de ejecutarse en secuencia
    console.clear();
   
    console.log('Hola mundo');
    do {
        opt = await inquirerMenu(); // utilizando la función de inquirer 
        console.log({ opt });
        await pausa();
    } while (opt !== '0') {

    }
}
main();