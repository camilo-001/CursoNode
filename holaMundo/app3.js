// Ciclo de eventos en Node

console.log('inicio de programa'); // 1

setTimeout( ()=> {
    console.log('primer Timeout') //
}, 3000);

setTimeout( ()=> {
    console.log('segundo Timeout') // 2
}, 0);

setTimeout( ()=> {
    console.log('tercer timeout') // 2
}, 0);

console.log('Fin de programa') // 2