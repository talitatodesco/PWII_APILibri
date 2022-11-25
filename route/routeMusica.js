const express = require('express');

const modelMusica = require('../model/modelMusica');

const router = express.Router();



router.post('/Cadastrardados', (req, res)=>{
    
    console.log(req.body);
    let {cod_musica} = req.body;

    modelMusica.create(
        {cod_musica}
    ).then(
        () =>{
            return res.status(201).json({
                erroStatus: false,
                mensagemStatus: "DADOS INSERIDOS COM SUCESSO!"
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus: true,
                mensagemStatus: "ERRO AO CADASTRAR DADOS",
                errorobject: error
            });
        }
    );
});


router.get('/Listardados', (req, res)=>{
    modelMusica.findAll()
    .then(
        (response) => {
            return res.status(200).json({
                erroStatus: false,
                mensagemStatus: "DADOS LISTADOS COM SUCESSOS!",
                data: response
            })
        }
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus: true,
                mensagemStatus: "ERRO AO LISTAR DADOS",
                errorobject: error
            });
        }
    );
});


router.put('/Alterardados', (req, res)=>{
    const{cod_musica, nome_musica} = req.body;

    modelMusica.update(
        {cod_musica},
        {where:{nome_musica}}
    ).then(
        ()=> {
            return res.status(200). json({
                erroStatus:false,
                mensagemStatus:"DADOS ALTERADOS COM SUCESSO"
            })
        }
        
    ).catch(
        (error)=>{
            return res.status(400).json({
                erroStatus:true,
                mensagemStatus: "ERRO NA ALTERAÇÃO DE DADOS",
                errorobject: error
            });
        }
    );

});


router.delete('/Deletardados', (req, res)=>{
    console.log(req.params);
    let {cod_musica} = req.params

    modelMusica.destroy(
        {where:{cod_musica}}
    ).then(
        ()=>{
            return res.status(200).json({
                erroStatus: false,
                mensagemStatus: "DADO DELETADO COM SUCESSO"
            })
        } 
    ).catch(
        (error)=>{
        return res.status(200).json({
            erroStatus: true,
            mensagemStatus: "ERRO AO EXCLUIR DADOS",
            errorobject: error
            });
         }
    );
});

module.exports = router;