require('dotenv').config()
const { enviarMensagem } = require('./amqp')
const express = require('express')
const axios = require('axios')
const Prontuario = require('./models/prontuario')
const cors = require("cors");
const app = express()
app.use(express.json())

const mysql = require('mysql2')
const { Association } = require('sequelize')

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Credentials", true);
    app.use(cors());
    next();
  });


app.post("/criar-prontuario", async (req, res) => {
    const { cpf } = req.body
    const resposta = await axios.get("http://localhost:8000/paciente?cpf=" + cpf)
    await Prontuario.create({ ...req.body, ...resposta.data.paciente })


    enviarMensagem("prontuarioCriado", Buffer.from(JSON.stringify(req.body)))

    return res.json({
        erro: false,
        requisição: req.body,
        mensagem: "Prontuário Atualizado!"
    });

})






const porta = 9000
app.listen(porta, () => console.log(`Prontuário - Conexão OK, porta: ${porta}`))