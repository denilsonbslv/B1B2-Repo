const Sequelize = require("sequelize");
const connection = require("./database");

// Definição de model de uma tabela
const Usuario = connection.define('usuarios', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    passworld: {
        type: Sequelize.STRING,
        allowNull: false
    },
    happyday: {
        type: Sequelize.DATEONLY,
        allowNull: false
    }
});

// Verifica se a tabela já existe se não é criada
Usuario.sync({force: false}).then(() => {});

module.exports = Usuario;