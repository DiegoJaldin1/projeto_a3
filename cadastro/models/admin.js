const { Sequelize } = require("sequelize");
const conexao = require("./conexao");

const Administrador = conexao.define("tb_administradores", {
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cpf: {
    type: Sequelize.BIGINT,
    primaryKey: true,
  },
  dt_nascimento: {
    type: Sequelize.STRING,
  },
  senha: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  tipo_acesso: {
    type: Sequelize.STRING,
  }
});

//Criando a tabela "tb_administrador" no banco de dados
Administrador.sync();

module.exports = Administrador;