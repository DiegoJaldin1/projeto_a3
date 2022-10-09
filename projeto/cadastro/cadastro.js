const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const fs = require('fs')
const path = require('path')

// Converte  o corpo da requisição para um objeto JSON
//app.use(express.json()) 

//Adicionando o modulo pug (para ser o processador de modelo (template engine))
//const pug = require('pug')
//Definindo o template engine


app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.use('/public', express.static(path.join(__dirname, '/public')))
app.set('views', path.join(__dirname, '../views'));

app.use(bodyParser.urlencoded({extended:true}))


//"base" onde os cadastros estarão armazenados (até que o servidor reinicie!!)
const cadastros = {}
//indica o n° do cadastro
cadastro = 0

app.post('/cadastro', (requisicao, resposta) => {
/*  cadastro++
    const {nome, cpf, senha} = requisicao.body
    cadastros[cadastro] = {nome, cpf, senha}
    resposta.status(201).send(cadastros[cadastro]) */

    //resposta.render('login')


    

    cadastro++
    const {nome, cpf, senha} = requisicao.body
    cadastros[cadastro] = {nome, cpf, senha}
    console.log(cadastros[cadastro])
   // const nome = requisicao.body.campo_nome
   // const cpf = requisicao.body.campo_cpf
    //const senha = requisicao.body.campo_senha
    //console.log(`${nome} + ${cpf} + ${senha}`)
    

    resposta.render('cadastro-teste')
    console.log("Teste Teste Teste")
})


//localhost:4000/cadastro
app.get('/cadastro', (requisicao, resposta) => {
/*  console.log("Executando...")
    resposta.send(cadastros) */
    //console.log(path.join(__dirname, '../'))
    //console.log(__dirname)
    resposta.render('cadastro-teste')
})


app.listen(4000, () => {
    console.log("Cadastro. Porta 4000")
})
