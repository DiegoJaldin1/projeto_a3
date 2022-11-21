const { Sequelize } = require('sequelize')
const conexao = require('./conexao')

const Usuario = conexao.define('tb_usuarios', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.BIGINT,
        primaryKey: true,
      },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    },
    acesso: {
        type: Sequelize.TINYINT,
    },
    tipo_acesso: {
        type: Sequelize.STRING
    }
})


//Criando a tabela "tb_usuarios" no banco de dados
Usuario.sync()


module.exports = Usuario