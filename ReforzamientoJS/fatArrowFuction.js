
function sumar1 ( a,b){ // función tradicional
    return a + b;
}

const sumar2 = (a, b) => { // fatArrow
     return a + b;
}

const sumar3 = (a,b) => a + b; // si solo se tiene una linea dentro de la función se omite el return

console.log(sumar1(1,2))
console.log(sumar2(1,2))
console.log(sumar3(1,2))

const saludar = () => 'Hola Mundo'; // si tuvieramos una función que no recibe un argumento

console.log(saludar());