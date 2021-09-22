const request = require('request')

const geoCodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicGFydmEzMTA1IiwiYSI6ImNrdHVlMGY0eDA5eWMydm1waTIzZnZ3aTQifQ.BT75QxKkWx3pNMBMSOUk2w&limit=1'

request({url:geoCodeURL , json:true} , (error , response) => {
    if(error){
        console.log('Unable to connect to location services!');
    }else if(response.body.features.length === 0 ){
        console.log('Unable to find location. Try another search!');
    }else{
        const latitude =  response.body.features[0].center[1]
        const longitude =  response.body.features[0].center[0]
        console.log(latitude , longitude);
    }
})


    // const data = JSON.parse(response.body)
    // console.log(data);
    // console.log(data.current);