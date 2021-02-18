// un callback es una función que se ejecuta en cierto punto del tiempo, usualmente luego de que se termine de ejecutar una función

const getUsuarioById = (id, callback) =>{ // vemos como defininos como argumento la función callback
    const usuario = {
        id,
        nombre: 'camilo'
    }

    setTimeout(() =>{
        callback (usuario) // luego de 1.5 seg esta función de callback recibe como argumento la info del usuario
    }, 1500);

}

getUsuarioById(12,(usuario) =>{ // al llamar la función pasamos los parametros y entre esos los calbacks
    console.log(usuario.nombre); // y que hace esta función imprime el nombre del usuario
});