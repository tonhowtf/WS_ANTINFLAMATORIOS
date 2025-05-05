const sitemodel = require('../model/schemantinflamatorios');
const connection = require('../config/connection');
const mongoose = require('mongoose');



const classmongo = {
  start: async () => {
    connection();
  },
  add: async (dt) => {
    try {
      const novodado = new sitemodel({
        quando: dt.quando,
        farmacia: dt.farmacia,
        nome: dt.nome,
        precovelho: dt.precovelho,
        preconovo: dt.preconovo,
        precoregular: dt.precoregular,
        urlproduto: dt.urlproduto

      });
      await novodado.save();
      //await console.log(dt);
    } catch (error) {
      console.log('Não foi salvar dados! => ' + error)
    }
  },
  contaregistros: async () => {
    try {
      let nrdados = await sitemodel.find({}).countDocuments();
      let dadosraspados = Math.round(nrdados / 1000)
      return dadosraspados
    } catch (error) {
      console.log('Deu Pau!=> ' + error)
    }
  },
  close: async () => {
    await console.log('Fechando conexao com MONGODB!')
    await mongoose.connection.close();
  }
};

module.exports = classmongo;