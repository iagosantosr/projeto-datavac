// config initial
const express = require ('express');
const app = express()
const port = 4000
const mongoose = require ('mongoose')

// models
const Vacinometro = require('./models/Vacinometro')
const Pessoa = require('./models/Pessoa')
const Stat_gerais = require('./models/Stat_gerais')

//conexão com o banco DataVacDB
mongoose.connect('mongodb://localhost/DatavacDB');

// leitura em JSON
app.use(
  express.urlencoded({
    extendend:true,
  }),
)
app.use(express.json())

// rota css
app.use(express.static(__dirname + '/public'));

// rotas da API
const usuarioRoutes = require('./routes/usuarioRoutes')
app.use('/usuario',usuarioRoutes)

// rota inicial
app.get('/',(req,res)=>{
  // show req
  res.sendFile(__dirname + "/pages/index.html")
})



// enviando rota 
app.listen(port)