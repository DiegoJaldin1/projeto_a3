const { Sequelize } = require("sequelize");
const conexao = require("./conexao");

const Medico = conexao.define("tb_medicos", {
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
  crm: {
    type: Sequelize.BIGINT,
  },
  especialidade: {
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

//Criando a tabela "tb_medicos" no banco de dados
Medico.sync();

module.exports = Medico;
