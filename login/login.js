const express = require('express')
const app = express()

//converte o corpo da requisição que era puro texto
//para um objeto JSON
app.use(express.json())



