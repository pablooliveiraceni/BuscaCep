const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const buscaCep = require('./src/functions/buscaCep')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

// declarando que vou usar o ejs
app.set('view engine', 'ejs')

//Mostrando para o express onde esta a pasta views
app.set('views', './src/views')

//renderizando página principal
app.get('/', (req, res) => {
    //chamando o arquivo da view
    res.render('index')
})

app.post('/envia-cep', async(req, res) => {
    const { cep } = req.body
    const resultado = await buscaCep(cep)
    console.log(resultado)
  

    res.render('resultado', {dado: resultado})
})

app.post('/bairro', async(req, res) => {
    const { cep } = req.body
    const resultado = await buscaCep(cep)
    console.log(resultado)
  

    res.render('bairro', {dado: resultado})
})

app.listen(3333)