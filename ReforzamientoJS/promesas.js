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
const getEmpleado = async (id) => {

        const empleado = empleados.find(e => e.id === id);
        (empleado)
            ? resolve(empleado) // operador ternario ? = existe?, : = si no, entonces ...
            : reject(`No existe empleado con el id ${id}`);
}

const getSalario = async (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find(s => s.id === id);
        (salario)
            ? resolve(salario)
            : reject(`No existe un salario para el empleado ${id}`)
    });
}


const id = 1;
getEmpleado(id) // llamamos a la función de getEmpleados
    .then(empleado => console.log(empleado.nombre)) // con el then capturamos el resolve y luego damos uso de este
    .catch(err => console.log(err)) // con el catch capturamos el reject

getSalario(id)
.then(salario => console.log(`El salario para el id: ${ id } es de ${salario.salario }`))
.catch(err => console.log(err))