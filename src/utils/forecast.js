const request = require('request')

const forecast = (latitude , longitude , callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b72432b9d2aecff46200d54e1d1a8ef1&query=' + latitude +',' + longitude+''
    request({url : url , json : true} , (error,{ body }) => {
        if(error){
            callback('Unable to connect to weather services!' , undefined)
        } else if (body.error){
            callback('Unable to find location' , undefined)
        } else {
            // console.log(body.current.weather_descriptions[0]);
            callback(undefined , [body.current.weather_descriptions[0] , body.current.temperature , body.current.feelslike , body.current.humidity])            
        }
    })
}

module.exports = forecast