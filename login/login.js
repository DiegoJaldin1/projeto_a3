const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const fs = require('fs')
const path = require('path')

app.use(express.json())

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.use('/public', express.static(path.join(__dirname, '/public')))
app.set('views', path.join(__dirname, '../views'));

app.use(bodyParser.urlencoded({extended:true}))

const base_login = {}

login = 0
const axios = require("axios");

app.post('/base_login', async (req, res) => {
    login++
  const texto = req.body.password
  base_login[login] = { login, password }
  await axios.post("http://localhost:10000/eventos", {
    tipo: "Base_loginCriado",
    dados: {
        login,
      password,
    },
  });
  //201 significa "created"
  res.status(201).send(base_login[login])
})

//obter a lista completa de lembretes
//GET localhost:4000/lembretes
//endpoint para obtenção da lista de lembretes
app.get('/base_login', (req, res) => {
  //não pense em usar return
  console.log('executando...')
  //res.send(base_login)
  res.render('login-teste')

})

app.post("/eventos", (req, res) => {
  console.log(req.body);
  res.status(200).send({ msg: "ok" });
});

app.listen(7000, () => console.log("base_login. Porta 7000."))