const express = require('express');

//gerenciador de rotas do express
const modelCategoria = require('../model/modelCategorias');

const router = express.Router();

router.post('/cadastrarCategoria', (req, res)=>{
    res.send("ROTA DE CADASTRO DE CATEGORIA!");
    //console.log("TESTE DE NODEMON!");
});

//ROTA DE LEITURA DE CATEGORIA
router.get('/listarCategoria', (req, res)=>{
    res.send('ROTA DE LISTAGEM DE CATEGORIA!');
});

//ROTA DE ALTERAÇÃO DE CATEGORIA
router.put('/alterarCategoria', (req, res)=>{
    res.send('ROTA DE ALTERAÇÃO DE CATEGORIA!');
});

//ROTA DE EXCLUSÃO DE CATEGORIA
router.delete('/excluirCategoria', (req, res)=>{
    res.send('ROTA DE EXCLUSÃO DE CATEGORIA!');
});

module.exports = router;