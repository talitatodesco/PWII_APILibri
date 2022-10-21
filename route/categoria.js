/*IMPORTA O PACOTE DO EXPRESS PARA O SCRIPT index.js*/
const express = require('express');

const modelCategoria = require('../model/modelCategorias');

/*GERENCIADOR DE ROTAS DO EXPRESS*/
const router = express.Router();

/** ROTAS DE CRUD DE CATEGORIA **/
//ROTA DE CADASTRO DE CATEGORIA
//NOME(P1, P2, P3, P4){}

router.post('/cadastrarCategoria', (req, res)=>{

    console.log(req.body);
    let {nome_categoria} = req.body;//importante ter o mesmo nome da variavel e do campo
   
    modelCategoria.create(
        //dados inserção
        {nome_categoria}//Ele faz com que o campo do banco pegue os valores de nome_categoria e
    ).then(
        res.send('CATEGORIA CADASTRADA COM SUCESSO!')
    );
    
    // console.log('TESTE DE NODEMON');
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