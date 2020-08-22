const express = require('express');

const routes = express.Router(); //modulo de roteamento do express !

routes.get('/', (req,res)=>{
  res.send('Chegou aqui')
})
routes.get('/teste', (req,res)=>{
  const teste = 20

  res.json(teste)
})

let messages = [];


module.exports = routes