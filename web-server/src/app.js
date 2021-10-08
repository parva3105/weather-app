const express = require('express');
const path = require('path');


const app = express()
const publicDirectoryPath = path.join(__dirname,'../public')
const helpPath  = path.join(__dirname, '../public/help.html')

app.use(express.static(publicDirectoryPath))

// app.get('', (req , res) => {
//     res.send('<h1>Weather App</h1>')
// })

// app.get('/help' , (req , res) => {
//     res.send([{
//         name: 'Parva'
//     },{
//         age : 20
    
//     }])
// })

// app.get('/about' ,(req , res) => {
//     res.send('<h1>About Page !</h1>')
// })

app.get('/weather' , (req , res) => {
    res.send({
        forecast : 'It is hazy',
        location : 'Ahmedabad'
    })
})

//app.com
//app.com/help
//app.com/about

app.listen(3000 ,() => {
    console.log('Server is up on port 3000');
})