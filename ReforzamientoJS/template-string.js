
const nombre ='Deadpool';
const real = 'Wade';

const normal = nombre + ' ' + real; // concatenación de forma habitual
const template = `${ nombre } ${ real }`; // concatenación con strings tamplates

console.log(normal) // vemos que la impresión es la misma
console.log(template)

const templateE = ` la suma de 2 más 2 es: ${ 2 + 2 }`; // al usar templates podemos correr dentro de ${} codigo js

console.log(templateE)