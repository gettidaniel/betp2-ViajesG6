const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT || 3000

//Db conection

var usersRouter = require('../routes/users');
const vuelosRouter = require('../routes/vuelos')

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Home',
        name: 'Grupo 6'
    })
})

app.get('/index', (req, res) => {
    res.render('index', {
        title: 'Home',
        name: 'Grupo 6'
    })
})

app.get('/login', (req, res) => {
    res.render('login', {
        title: 'Login',
        name: 'Grupo 6'
    })
})

app.get('/profile', (req, res) => {
    res.render('profile', {
        title: 'Profile',
        name: 'Grupo 6'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Grupo 6',
        errorMessage: 'Page not found.'
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})