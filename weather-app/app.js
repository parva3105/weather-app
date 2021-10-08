const request = require('request')
// const url = 'http://api.weatherstack.com/current?access_key=b72432b9d2aecff46200d54e1d1a8ef1&query=37.8267,-122.4233&unit=f' for american system i.e farenheit
const url = 'http://api.weatherstack.com/current?access_key=b72432b9d2aecff46200d54e1d1a8ef1&query=Ahmedabad'

request({ url: url, json:true }, (error,response) => {
    if(error){
        console.log('Unable to connect to weather services!');
    }else if (response.body.error){
        console.log('Unable to find location');
    }else{
        console.log(response.body.current.weather_description[0] + '. It is currently '+ response.body.current.temperature + ' degrees outside . It feels like ' + response.body.current.feelslike);
    }
})

const geoCodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicGFydmEzMTA1IiwiYSI6ImNrdHVlMGY0eDA5eWMydm1waTIzZnZ3aTQifQ.BT75QxKkWx3pNMBMSOUk2w&limit=1'
