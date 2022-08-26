const express = require('express');

//gerenciador de rotas do express

const router = express.Router;

app.post('/cadastrarCategoria', (req, res)=>{

    
    res.send("ROTA DE CADASTRO DE CATEGORIA!");
    //console.log("TESTE DE NODEMON!");
});

//ROTA DE LEITURA DE CATEGORIA
app.get('/listarCategoria', (req, res)=>{
    res.send('ROTA DE LISTAGEM DE CATEGORIA!');
});

//ROTA DE ALTERAÇÃO DE CATEGORIA
app.put('/alterarCategoria', (req, res)=>{
    res.send('ROTA DE ALTERAÇÃO DE CATEGORIA!');
});

//ROTA DE EXCLUSÃO DE CATEGORIA
app.delete('/excluirCategoria', (req, res)=>{
    res.send('ROTA DE EXCLUSÃO DE CATEGORIA!');
});

