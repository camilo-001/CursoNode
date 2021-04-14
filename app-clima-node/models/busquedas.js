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

    get paramsOpenWeather() {
        return {
            'appid': process.env.OPENWATHER_KEY,
            'unit': 'metric',
            'lang': 'es'
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
            // retornamos la información que recibimos del metodo get
            return resp.data.features.map(lugar => ({ // definimos que datos vamos a devolver que es la data y los features
                id: lugar.id, // asiganmos los datos
                nombre: lugar.place_name, // nombre de la ciudad
                lng: lugar.center[0], // longitud
                lat: lugar.center[1], // latitud

            }));

        } catch (error) {
            return [];
        }

    }

    async climaLugar(lat, lon) { // función para buscar el clima del lugar
        try {
            const instance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`, // esta api busca el clima de la ciudad por coordenadas
                params: { ...this.paramsOpenWeather, lat, lon }
            });

            const resp = await instance.get();

            const{weather, main} = resp.data;
            return {
                desc : weather[0].description,
                min: main.temp_min,
                max: main.temp_max,
                temp: main.temp,
            }

        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = Busquedas;