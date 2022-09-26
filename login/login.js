const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')


var path = require('path')
const app = express()


app.use(session({secret: 'dfxcgvbhjmnkml'}))
app.use(bodyParser.urlencoded({extended:true}))


app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.use("/public", express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, '/views'))



app.post('/views', (requisicao, resposta) => {
    if(requisicao.body.password == password && requisicao.body.cpf == cpf){
        requisicao.session.cpf = cpf
        resposta.render('logado')

    } else {
        resposta.render('index')
    }
})

app.get('/views', (requisicao, resposta) => {
    if(requisicao.session.cpf) {
        resposta.render('logado')
        console.log('Meu CPF logado é: ' + requisicao.session.cpf)
    } else {
        resposta.render('index')
    }
})



app.listen(5000, () => {
    console.log("Login. Porta 5000")
})