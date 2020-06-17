  const axios = require('axios'); //Extraemos la libreria de axios que instalamos 

  const getClima = async(ciudad) => { //Funcion fecha y async para tener en consideracion el retardo que voy a tener 
      const ciudadUrl = encodeURI(ciudad); //Para coger dos parametros utlizamos,para q se codifique antes de mandar a la URL
      //encodeURL----> Ayuda a codificar 
      const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudadUrl}&appid=0d2f8c91557443c177974762250e6ffd&units=metric`);
      //Utilizamos una peticion Get de la api, no olivdar el https:// ya que va dirijido a la web 
      return [resp.data.main.temp, resp.data.main.pressure, resp.data.main.humidity]; //En resp se guardara la respuesta de al informacion, la respuesta se encuentra en algo llamdo data despues main y temp 
  }

  module.exports = { //exportar getClima 
      getClima
  }

  /* Inicializamos el programa instalado : 
           - npm i --save init 
           - npm i --save yargs
           - npm i --save axios
           - npm i --save colors
    */