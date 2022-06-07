 const router = require('express').Router()
const { restart } = require('nodemon')
 const Pessoa = require('../models/Pessoa')

// criação de dados
router.post('/', async(req,res)=>{J
  // req - body
  const {  usuario,  senha,  status} = req.body
  
  if(!usuario){
    res.status(422).json({error:"O usuário é obrigatório!"})
    return
  } 
  
  const pessoa = {  usuario, senha,status}
  try {
    // criando dados
    await Pessoa.create(pessoa)
    res.status(201).json({message: "Usuario inserido com sucesso"})
  } catch (error) {
    res.status(500).json({error:error})
  }
  })

 // leitura de dados
 router.get('/', async(req,res)=>{
 try {
   const usuarios = await Pessoa.find()

   res.status(200).json({usuarios})
 } catch (error) {
  res.status(500).json({error:error})
   
 }
 })
// leitura de dados por usuario
 router.get('/:id', async (req,res)=>{
   const id = req.params.id 
   
   try {
    const usuario = await Pessoa.findOne({_id: id})
    if(!usuario){
      res.status(422).json({message: "O Usuário não foi encontrado"})
      return
    }
    res.status(200).json({usuario})

   } catch (error) {
    res.status(500).json({error:error})
   }
 })

 // UPDATE (PUT E PATCH)
router.patch('/:id',async (req,res)=>{
  const id = req.params.id
  const {usuario,senha,status}=req.body
  const pessoa = {
    usuario,
    senha,
    status,
  }
  try {
    const updatedPessoa = await Pessoa.updateOne({_id:id},pessoa)
    // Verificando se o usuário existe no banco
    if(!updatedPessoa.matchedCount === 0){
      res.status(422).json({message: "O Usuário não foi encontrado"})
      return 
    }
    res.status(200).json(pessoa)
  } catch (error) {
    res.status(500).json({error:error})
  }
})

// deletar dados
router.delete('/:id', async (req,res)=>{
const id = req.params.id
const pessoa = await Pessoa.findOne({_id:id})
if(!pessoa){
  res.status(422).json({message: "O usuário não foi encontrado"})
  return
}
try {
  await Pessoa.deleteOne({_id:id})
  res.status(200).json({message: "O usuário foi removido com sucesso"})
} catch (error) {
  res.status(500).json({error:error})
}
})

  
  module.exports = router