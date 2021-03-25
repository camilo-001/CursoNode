const fs = require('fs'); // requieriendo el fileSystem que se encuentra dentro de los paquetes de node

console.clear();
console.log('===================');
console.log('Tabla del 5');
console.log('===================');

let salida = '';

for (let i = 1; i <= 10; i++) {
    salida += `5 x ${i} = ${5 * i}\n`;
}
console.log(salida);

fs.writeFile('tabla-5.txt', salida, (err) => { // el fs.writeFile, nos permite crear archivos, recibe la data y un callback
    if (err) throw err;
    console.log('Tabla-5.txt creado')
})
