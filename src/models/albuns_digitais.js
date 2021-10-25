// "Albuns digitais" são as fotos e informações enviadas pelos usuários por meio do formulário da página "pagAlbum.html"
// Percebi, tarde demais, que "albuns" soa errado quando escrito dessa forma, no plural. Não mudei o nome por medo de causar erros

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Albuns_digitais extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Albuns_digitais.init({
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    nascimento: DataTypes.DATE,
    nome_responsavel: DataTypes.STRING,
    cpf_responsavel: DataTypes.STRING,
    telefone: DataTypes.STRING,
    email: DataTypes.STRING,
    estado: DataTypes.STRING,
    cidade: DataTypes.STRING,
    titulo: DataTypes.STRING,
    fotografa: DataTypes.STRING,
    foto: DataTypes.STRING,
    data_autorizacao: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Albuns_digitais',
  });
  return Albuns_digitais;
};