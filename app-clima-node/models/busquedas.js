const axios = require('axios');  // importando axios para poder hacer las peticiones http

class Busquedas { // modelo de busqueda de la indormación de la ciudad

    // historial = ['Bogotá', 'Madrid', 'Lima'];
    constructor() {

    }
    async ciudad(lugar = '') {
        // peticion http
        // console.log('ciudad',lugar);
        const resp = await axios.get('https://reqres.in/api/users?page=2')  // realizando una poetición get a un endpoint de prueba
        console.log(resp.data);


        return []; // retornar lugares que coincidan 
    }
}

module.exports = Busquedas;