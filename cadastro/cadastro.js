const express = require('express')
const app = express()

// Converte  o corpo da requisição para um objeto JSON
app.use(express.json())


//POST localhost:4000/cadastro
//nome
//cpf
//senha



/*
    {
        1: {
            "nome: "Amanda"
            "cpf": "12345"
            "senha:" "batatinha123"
        },
        2: {
            "nome: "Paola"
            "cpf": "85641"
            "senha:" "paola123"
        },
        ...
    }
*/


const cadastros = {}
//indica o n° do cadastro
cadastro = 0

app.post('/cadastro', (requisicao, resposta) => {
    cadastro++
    const {nome, cpf, senha} = requisicao.body
    cadastros[cadastro] = {nome, cpf, senha}
    resposta.status(201).send(cadastros[cadastro])
})

app.get('/cadastro', (requisicao, resposta) => {
    console.log("Executando...")
    resposta.send(cadastros)
})


app.listen(4000, () => {
    console.log("Cadastro. Porta 4000")
})
