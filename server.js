const express = require('express')
const {engine} = require('express-handlebars')

const app = express()
const PORT = process.env.PORT || 8080

app.set('view engine', 'hbs')
app.engine('hbs', engine({
    layoutDir: `${__dirname}/views/layouts`,
    partialsDir: `${__dirname}/views/partials`,
    extname: 'hbs'
}))
app.set('views', './views')

app.use(express.static('public'))

app.get('/', (req,res) => {
    res.status(200).render('home')
})

app.get('/peliculas', (req,res) =>{
    res.status(200).render('movies')
})


app.listen(PORT, () => console.log('listen in port', PORT))
