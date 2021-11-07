const Sequelize = require('sequelize');

const connection = new Sequelize('bdProjetos', 'admin', 'd9z1199N',{
    host: 'mysql-projetos.cjhwk0qrane0.us-east-2.rds.amazonaws.com',
    dialect: 'mysql'
})

module.exports = connection;