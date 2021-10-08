const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const yargs = require('yargs')
const { argv } = require('yargs')

// place = argv['_'][0] using yargs
const address = process.argv[2]

if(!address) {
    console.log("Please provide an address");
}else {
    geocode(address , (error,  {latitude , longitude , location} = {} ) => {
        if(error){
            return console.log(error);
        }
        forecast(latitude, longitude, (error,forecastData) => {
            if(error){
                return console.log(error);
            }
            console.log(location);
            console.log(forecastData);
        })
    })
}

 
yargs.parse()