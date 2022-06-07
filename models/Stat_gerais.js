const mongoose = require ('mongoose')

const Stat_gerais = mongoose.model('Stat_gerais',{
  Nomes_de_Medida: String,
  Valores_de_Medida: Number,
})

module.exports = Stat_gerais