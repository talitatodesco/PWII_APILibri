/*IMPORTA O PACOTE DO EXPRESS PARA O SCRIPT index.js, estilo link*/
const express = require('express');
const categoria = require('./route/categoria')

/*TORNA O EXPRESS EXECUTÁVEL DENTRO DO SCRIPT index.js
ATRAVÉS DA CONSTANTE app
*/
const app = express();

/** ROTAS DE CRUD DE CATEGORIA **/

//ROTA DE CADASTRO DE CATEGORIA


//Nome (P1, P2, P3, P4){}

// função = primeiro string, segunda é uma arrow function
app.use('/', categoria);

/** EXEMPLOS DE ROTA **/
// app.get('/', function (req, res) {
//     res.send('RESPOSTA DA ROTA RAIZ DA APLICAÇÃO');
// });

// app.get('/teste', function (req, res) {
//     res.send('RESPOSTA DA ROTA TESTE DA APLICAÇÃO');
// });

/*
CRIAR UM WEBSERVER CAPAZ DE RECEBER REQUISIÇÕES VIA
HTTP
PARAMETROS DO listem
1 - PORTA LÓGICA (OBRIGATÓRIA)
2 - CALLBACK (OPCIONAL)
*/
app.listen(3000, ()=>{
    console.log('SERVIDOR RODANDO!');
});