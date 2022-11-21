const { Sequelize } = require("sequelize");
const conexao = require("./conexao");

const Funcionario = conexao.define("tb_funcionarios", {
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
  acesso: {
    type: Sequelize.TINYINT,
  },
  tipo_acesso: {
    type: Sequelize.STRING,
  }
});

//Criando a tabela "tb_funcionarios" no banco de dados
Funcionario.sync();

module.exports = Funcionario;
