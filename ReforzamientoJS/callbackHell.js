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

// vamos a buscar la información de un empleado

const getEmpleado = ( id , callback) =>{  // la función recibe el id y el callback
    const empleado = empleados.find(e => e.id === id) // usamos el metodo find para compara el id ingresado con los del array
    if(empleado){ // si el empleado existe  el callback mostrará su info
        callback (null, empleado); // usamos el null para que el err, de la llamada de la función sea nulo y pase a ejecutar lo demaś
    }else{ // de lo contrario el callback muestra el mensaje de que no
       callback (`Empleado con id ${ id } no existe`);
    }
}
// vamos a buscar el salario de un empleado
const getSalario =(id, callback) => {
    const salario = salarios.find(s => s.id === id)
    if (salario){
        callback(null, salario);
    }else {
        callback(`El salario para el id: ${ id } no existe`)
    }
}
// llamando a la función para traer la información del empleado

getEmpleado(1 ,( err,empleado )=>{ // err nos indicará si este usuario existe
    if (err){
        console.log('ERROR!')
        return console.log(err)
    }
    console.log('EMPLEADO EXISTE!')
    console.log(empleado)
})

// llamando a la función para traer información del salario del empleado
getSalario(10,(err,salario)=>{
    if (err){
        console.log('ERROR!')
        return console.log(err)
    }
    console.log('EL SALARIO DEL EMPLEADO ES')
    console.log(salario.salario)
})