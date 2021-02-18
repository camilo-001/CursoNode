var nombre = 'Wolverine'; // var crea varibale en entorno global
console.log(nombre);

let nickname = 'magneto'; // let crea variables segun el scope

if (true) {
    let nickname = 'Xavier'; // si usamos let en este scope esta varible no existirá, si no que la buscará en un scope superio
    console.log(nickname) // pero si habilitamos un console.log está la utilizara a nivel de este scope la imprime y luego la devuelve al valor anterior

    // si llegasemos a quitar el let de este scope estariamos a nickname js simplemente la redeclaria asignando el nuevo valor
    // entonces si queremos especificar esa redeclaración le dejamos el let
}

console.log(nickname);

