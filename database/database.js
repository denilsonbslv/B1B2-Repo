const Sequelize = require('sequelize');

const connection = new Sequelize('bd', 'user', 'pass',{
    host: 'host',
    dialect: 'bd-lanquage'
})

module.exports = connection;