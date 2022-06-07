const mongoose = require ('mongoose')

const Vacinometro = mongoose.model('Vacinometro',{
  municipio: String,
  dose: String,
  totalDoses: Number,
})

module.exports = Vacinometro