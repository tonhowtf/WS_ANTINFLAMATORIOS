const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  quando: String,
  farmacia: String,
  nome: String,
  precovelho: String,
  preconovo: String,
  precoregular: String,
  urlproduto: String
});

const antiinflamatorios = mongoose.model('antiinflamatorios', schema);

module.exports = antiinflamatorios;