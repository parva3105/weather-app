const { error } = require('console')
const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=b72432b9d2aecff46200d54e1d1a8ef1&query=Ahmedabad'

const request = http.request(url ,(response) => {
    let data = ''
    
    response.on('data' ,(chunk) => {
        data = data + chunk.toString()
        console.log(chunk);
    })

    response.on('end' ,() => {
        const body = JSON.parse(data)
        console.log(body);    
    })

})

request.on('error' , (error) => {
    console.log('An error ' , error);
})

request.end()