'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Albuns_digitais', [{
    nome: 'Teste',
    cpf: "111.222.333-10",
    nascimento: new Date(),
    //nascimento "1983-03-03"
    nome_responsavel: null,
    cpf_responsavel: null,
    telefone: "(67)91111-4444",
    email: "teste@gmail.com",
    estado: "MS",
    cidade: "Campo Grande",
    titulo: "Pessoa Teste",
    fotografa: "Teste",
    foto: "goldenRatio.jpeg",
    data_autorizacao: new Date(),
    createdAt: new Date(),
    updatedAt: new Date()
    }], {});
    
  },

/*
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Albuns_digitais', [{
    nome: 'Maria Pereira',
    cpf: "111.222.333-44",
    nascimento: new Date(),
    //nascimento "1983-03-03"
    nome_responsavel: null,
    cpf_responsavel: null,
    telefone: "(67)91234-5678",
    email: "maria@gmail.com",
    estado: "MS",
    cidade: "Campo Grande",
    titulo: "Beleza Negra",
    fotografa: "João Pereira",
    foto: "mariaPereira.png",
    data_autorizacao: new Date(),
    createdAt: new Date(),
    updatedAt: new Date()
    }], {});
    
  },
  */

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
