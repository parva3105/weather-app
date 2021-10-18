const express = require('express');
const path = require('path');
const hbs = require('hbs');


const app = express()
//Define paths for express config
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')

//setting up handlebars emgine and views location\
app.set('view engine','hbs')
app.set('views' , viewsPath)
hbs.registerPartials(partialPath)

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
        title: 'Help Page',
        name : "Parva Shah",
        helpText: 'What can we do for you ?'

    })
})



app.get('/weather' , (req , res) => {
    if(!req.query.address){
        return res.send({
            error : "Must provide an Address"
        })
    }
    console.log(req.query.address);
    res.send({
        forecast : 'It is hazy',
        location : req.query.address
    })
})

app.get('/products' , (req , res) => {
    if(!req.query.search){
        return res.send({
            error : 'You must provide a Search term ! '
        })
    }

    console.log(req.query.search)
    res.send({
        products: [],
    })
})



app.get('/help/*',(req , res) => {
    res.render('404' ,{
        title  : "Eroor 404", 
        name : "Parva Shah",
        errorMessage : "Help article not found "
    })
})

app.get('*',(req , res) => {
    res.render('404',{
        title : "Error 404",
        name : "Parva Shah",
        errorMessage : "Page not Found",
    })
})

//app.com
//app.com/help
//app.com/about

app.listen(3000 ,() => {
    console.log('Server is up on port 3000');
})