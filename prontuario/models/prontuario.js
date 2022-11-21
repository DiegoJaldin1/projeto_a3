const { Sequelize } = require("sequelize");
const conexao = require("./conexao");

const Prontuario = conexao.define("tb_prontuario", {
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cpf: {
    type: Sequelize.STRING,
  },
  dt_nascimento: {
    type: Sequelize.STRING,
  },
  sexo: {
    type: Sequelize.STRING,
  },
  altura: {
    type: Sequelize.STRING,
  },
  peso: {
    type: Sequelize.BIGINT,
  },
  anamnese: {
    type: Sequelize.TEXT('long'),
  },
  hip_diagnostico: {
    type: Sequelize.TEXT('long'),
  },
  prescricao: {
    type: Sequelize.TEXT('long'),
  }
})

//Criando a tabela "tb_pacientes" no banco de dados
Prontuario.sync();

module.exports = Prontuario;