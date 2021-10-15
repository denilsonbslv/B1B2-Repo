const Sequelize = require('sequelize');

const connection = new Sequelize('usuarios', 'denilson', 'd9z1199N',{
    host: '34.95.205.184',
    dialect: 'mysql'
})

module.exports = connection;