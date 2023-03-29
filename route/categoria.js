/*IMPORTA O PACOTE DO EXPRESS PARA O SCRIPT index.js*/
const express = require('express');

const modelCategoria = require('../model/modelCategorias');

/*GERENCIADOR DE ROTAS DO EXPRESS*/
const router = express.Router();

/** ROTAS DE CRUD DE CATEGORIA **/
//ROTA DE CADASTRO DE CATEGORIA
//NOME(P1, P2, P3, P4){}

// router.post('/cadastrarCategoria', (req, res)=>{

//     console.log(req.body); //Sempre carregamos a informação no body, por isso, pedimos para enviar a requisição para o body
//     let {nome_categoria} = req.body;//importante ter o mesmo nome da variavel e do campo
   
//     modelCategoria.create(
//         //dados inserção
//         {nome_categoria}//Ele faz com que o campo do banco pegue os valores de nome_categoria e
//     ).then(
//        () =>{
//         return res.status(201).json({
//             erroStatus: false,
//             mensagemStatus: "CATEGORIA INSERIDA COM SUCESSO."
//         })
//        }
//     ).catch(
//         (error)=>{
//             return res.status(400).json({
//                 erroStatus: true,
//                 mensagemStatus:"ERRO AO CADASTRAR  A CATEGORIA",
//                 errorobject: error
//             })
//         }
//     );
    
//     // console.log('TESTE DE NODEMON');
// });
router.post('/cadastrarCategoria', (req, res)=>{
    console.log(req.body);
    // let nome_categoria = req.body.nome_categoria;
    let {nome_categoria} = req.body;
    modelCategoria.create(
        //DADOS DA INSERÇÂO
        {nome_categoria}
    ).then(
        ()=>{
            return res.status(201).json({
                erroStatus:false,
                mensagemStatus:"CATEGORIA INSERIDA COM SUCESSO!!!."
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO CADASTRAR A CATEGORIA!!!",
                errorObject:error
            });
        }
    );
    // res.send('ROTA DE CADASTRO DE CATEGORIA!');
    // console.log('TESTE DE NODEMON');
});

//ROTA DE LISTAR CATEGORIA
router.get('/listarCategoria', (req, res)=>{
    modelCategoria.findAll()
    .then(
        (response)=>{
            //console.log(response);
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"CATEGORIAS LISTADAS COM SUCESSO !!!",
                data:response
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO LISTAR AS CATEGORIAS !!!.",
                errorObject:error
            });
        }
    );
});

router.get('/listarCategoriaPK/:cod_categoria', (req, res)=>{

    //DECLARAR E RECEBER O DADO DE CODIGO DE CATEGORIA
    let {cod_categoria} = req.params;

    //AÇÃO DE SELEÇÃO DE DADOS DO SEQUELIZE
    modelCategoria.findByPk(cod_categoria)
    .then(
        (response)=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"CATEGORIA RECUPERADA COM SUCESSO.",
                data:response
            })
        }
    )
    .catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO RECUPERAR A CATEGORIA.",
                errorObject:error
            });
        }
    )

});

//ROTA DE ALTERAÇÃO DE CATEGORIA
// router.put('/alterarCategoria', (req, res)=>{
//     const {cod_categoria, nome_categoria} = req.body;//Esta em chaves, pois o modo que foi declarado, é enviado o novo dados, de forma com que tendo o meso nome do banco, a nova informação, vá direto para o banco
//     //Aquestão é ter o mesmo nome, vai automaticamente,pois ja esta declarado dentro das chaves, dizendo qual é o campo
//     modelCategoria.update(
//         {nome_categoria},
//         {where: {cod_categoria}}
//     ). then(
//         res.send('CATEGORIA ALTERADA COM SUCESSO!')
//     )
    
// });
router.put('/alterarCategoria', (req, res)=>{

    // const cod_categoria = req.body.cod_categoria;
    // const nome_categoria = req.body.nome_categoria;
    const {cod_categoria, nome_categoria} = req.body;

    modelCategoria.update(
        {nome_categoria},
        {where:{cod_categoria}}
    ).then(
        ()=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"CATEGORIA ALTERADA COM SUCESSO."
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO ALTERAR A CATEGORIA.",
                errorObject:error
            });
        }
    );
    
});

// //ROTA DE EXCLUSÃO DE CATEGORIA
// router.delete('/excluirCategoria/:cod_categoria', (req, res)=>{
//     console.log(req.params);

//     let {cod_categoria}= req.params;

//     modelCategoria.destroy(
//         {where:{cod_categoria}}
//     ).then(
//         res.send('CATEGORIA EXCLUIDA COM SUCESSO!')
//     )

//     res.send('ROTA DE EXCLUSÃO DE CATEGORIA!');
// });

router.delete('/excluirCategoria/:cod_categoria', (req, res)=>{
    console.log(req.params);
    let {cod_categoria} = req.params

    modelCategoria.destroy(
        {where:{cod_categoria}}
    ).then(
        ()=>{
            return res.status(200).json({
                erroStatus:false,
                mensagemStatus:"CATEGORIA EXCLUIDA COM SUCESSO."
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus:"ERRO AO EXCLUIR A CATEGORIA.",
                errorObject:error
            });
        }
    );
});

module.exports = router;