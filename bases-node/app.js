const fs = require('fs'); // hacemos el require al filesistem

const base = 8;
let salida = '';

console.clear(); // limpia consola antes de ejecutar codigo

console.log('=====================')
console.log(`la tabla del ${ base }`)
console.log('=====================')

for (let i = 1; i <= 10; i++) {    salida += `${base} x ${i} = ${base * i} \n`
}
console.log(salida)
fs.writeFile(`tabla-${base}.txt`, salida, (err) =>{
    if(err) throw err;
    console.log(`La tabla del ${base} fue creada`);
})