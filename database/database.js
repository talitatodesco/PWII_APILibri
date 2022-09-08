//IMPORTAÇÃO DO PACOTE SEQUELIZE

const Sequelize = require ('sequelize');

/*****CRIA A CONEXÃO COM O BANCO DE DADOS*****/ 



/*parametros do sequelize

1- nome do banco -- string
2- usuario do banco --string
3- senha do banco --string
4- JSON:
    4.1 - O LOCAL ONDE O BANCO ESTA EXECUTANDO (HOST)
    4.2 - TIPO DO BANCO (DIALECT)
*/
const connection = new Sequelize(
            'bd_libri_api', 
            'root', 
            '', 
                {
                    host:'localhost',
                    dialect: 'mysql',
                    timezone: '-03:00'
                });
                
module.exports = connection;
