const express = require('express');
const path = require('path');


const app = express()
//Define paths for express config
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname, '../templates')

//setting up handlebars emgine and views location\
app.set('view engine','hbs')
app.set('views' , viewsPath)

//Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('' ,(req , res) => {
    res.render('index', {
        title : 'Weather',
        name : 'Parva Shah'
    })
})

app.get('/about' ,(req , res) => {
    res.render('about',{
        title : 'Weather App',
        name : 'Parva Shah',
    })
})

app.get('/help' ,(req , res) => {
    res.render('help', {
        title: 'Help PAGE',
        desc: 'This is the help page',
        subs: 'What can we do for you ?'

    })
})

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