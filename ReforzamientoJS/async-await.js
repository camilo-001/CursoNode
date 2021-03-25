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

const getInfoUsuario = async () => { // async transforma una función en una función asincroan que retorna una promesa
    try{
        const empleado = await getEmpleado(id)
        const salario = await getSalario(id)

        return ` El salario del empleado: ${empleado.nombre} es de ${ salario.salario}`
    } catch (error){
        throw error; // el trow llama el reject de la promesa que no se logré completar
    }

}
const id = 3;
getInfoUsuario(id)
    .then( mensaje => console.log(mensaje))
    .catch(err => {
        console.log('Ha ocurrido un error')
        console.log(err)
    })


