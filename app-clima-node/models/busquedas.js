const axios = require('axios');  // importando axios para poder hacer las peticiones http

class Busquedas { // modelo de busqueda de la indormación de la ciudad

    // historial = ['Bogotá', 'Madrid', 'Lima'];
    constructor() {

    }
    // creamos el get por si otro endpoint necesita los mismos parametros
    get paramsMapBox() { // los  parametros de la ruta 
        return {
            'access_token': process.env.MAPBOX_KEY, // pasamos el token,el cual está configurado en nuestras variables de entorno
            'limit': 5,
            'language': 'es'
        }
    }

    async ciudad(lugar = '') {

        // las peticiones http deben realizarse en un trycatch
        try {
            const instance = axios.create({ // creamos las instancias de axios las cuales están en un objeto
    
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`, // la base de la url la cual como vimos en postman recesita el lugar o la ciudad
                params: this.paramsMapBox
            });

            const resp = await instance.get(); // Realizando la petición get a la istancia de axios

            console.log(resp.data);

            return []; // retornar lugares que coincidan 

        } catch (error) {
            return [];
        }

    }
}

module.exports = Busquedas;