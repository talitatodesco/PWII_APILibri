const Sequelize = require('sequelize');



const connection = new Sequelize(
    'banco_musica',
    'root',
    '',
    {
        host:'localhost',
        dialect:'mysql',
        timezone:'-03:00'
    }
);


module.exports = connection;
