const { Sequelize } = require("sequelize");
const conexao = require("./conexao");

const Paciente = conexao.define("tb_pacientes", {
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
  profissao: {
    type: Sequelize.STRING,
  },
  rua: {
    type: Sequelize.STRING,
  },
  numero_rua: {
    type: Sequelize.BIGINT,
  },
  bairro: {
    type: Sequelize.STRING,
  },
  cep: {
    type: Sequelize.BIGINT,
  },
  sexo: {
    type: Sequelize.STRING,
  },
  altura: {
    type: Sequelize.STRING,
  },
  peso: {
    type: Sequelize.STRING,
  },
  anamnese: {
    type: Sequelize.TEXT("long"),
  },
  hip_diagnostico: {
    type: Sequelize.TEXT("long"),
  },
  prescricao: {
    type: Sequelize.TEXT("long"),
  },
});

//Criando a tabela "tb_pacientes" no banco de dados
Paciente.sync();

module.exports = Paciente;
