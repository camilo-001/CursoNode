const empleados = [
    {
        id: 1,
        nombre: 'pepito'
    },
    {
        id: 2,
        nombre: 'maria'
    },
    {
        id: 3,
        nombre: 'julian'
    }
];
const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2300
    },
];
// promesa de manera habitual
/*const getEmpleado = (id) => {
    const promesa = new Promise((resolve, reject) => {
        const empleado = empleados.find(e => e.id === id)
        if (empleado) {
            resolve(empleado);
        } else {
            reject(`No existe el empleado con el id ${id} `)
        }
    });
    return promesa
}*/
// promesa de manera simplificada
const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find(e => e.id === id);
        (empleado)
            ? resolve(empleado) // operador ternario ? = existe?, : = si no, entonces ...
            : reject(`No existe empleado con el id ${id}`)
    });
}

const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find(s => s.id === id);
        (salario)
            ? resolve(salario)
            : reject(`No existe un salario para el empleado ${id}`)
    });
}
// ENCADENANDO PROMESAS

const id = 1;
let nombre;

getEmpleado(id)// llamamos la funcón preguntando por el empleado con ese ido
.then (empleado => { // obtenemos la inforamción aca
   nombre = empleado.nombre;
    return getSalario( id ) // al usar return y retornar una promesa que gatillea el getSalario nos permite usar un then mas adelante
})
.then(salario => console.log(`El empleado ${ nombre } tiene un salario de  ${ salario.salario }`))// este then se dispara con el producto de la promesa anterior
.catch(err => console.log(err)); // este s un catch global