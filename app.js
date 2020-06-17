const clima = require('./controlador/clima'); //Ingresamos a la carpeta controlador y extraemos lo qu esta en clima.js 
const color = require('colors') // Extraemos la libreria de lso colores inslatados 

const argv = require('yargs').options({ //Configuracion de yargs
    ciudad: { //Directamente las cofiguraciones 
        alias: 'c', //Un alias
        desc: "Nombre de la ciudad para obtener el clima ", //Descripcion 
        demand: true //obligatorio
    },
    Ph: {
        alias: 'o',
        desc: `Puede elegir Presión (p) y la Humedad (h)`
    }

}).argv;

//console.log(argv.ciudad);


const getInformacion = async(ciudad) => { //Funcion fecha y async para tener en consideracion el retardo que voy a tener 
    console.log(`========================================================================`.brightCyan.bgCyan); //Encabezado
    console.log(`-------------------- `.bgCyan, `   Clima de :`.brightGreen, ` ${ciudad} `.brightBlue, `  --------------------------`.bgCyan);
    console.log(`========================================================================`.brightCyan.bgCyan);
    try {

        const [temp, pre, hum] = await clima.getClima(argv.ciudad) //Llamada a mi getClima 

        if (argv.Ph === 'p') { //Un if para agarrar las obciones de presion y humedad  o solo de la temperatura 
            return `   El clima de la ciudad de  ${ciudad} es de : ${temp}. ° C --> Presión(${pre})`.brightYellow;

        } else {
            if (argv.Ph === 'h') {
                return `            El clima de la ciudad de  ${ciudad} es de : ${temp}. ° C --> Humedad(${hum})`.brightYellow;
            } else {

                return `            El clima de la ciudad de  ${ciudad} es de : ${temp}. ° C`.brightYellow;

            }
        }


    } catch (error) {
        return `No hay informacion del clima de la ciudad ${ciudad}`; //Si no encunetra indiamcion de aquella ciudad manda al error y retorna no hay infromacion 

    }
}


getInformacion(argv.ciudad) //Manda a imprimir sea bien el then si todo funciona o el catch si hay algun error 
    .then(console.log)
    .catch(console.log)