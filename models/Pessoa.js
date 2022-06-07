const mongoose = require ('mongoose')

const Pessoa = mongoose.model('Pessoa',{
  usuario: String,
  senha: String,
  status: Boolean,
})

module.exports = Pessoa