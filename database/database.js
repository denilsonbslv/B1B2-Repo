const Sequelize = require('sequelize');

const connection = new Sequelize('bd_B1B2_Project', 'usuario', 'senha',{
    host: '34.95.205.184',
    dialect: 'mysql'
})

module.exports = connection;