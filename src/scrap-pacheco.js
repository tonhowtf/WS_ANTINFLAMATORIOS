/**
 * Quando:
 * Farmacia:
 * nome:
 * link:
 */


const url = 'https://www.drogariaspacheco.com.br/dor-e-febre/anti-inflamatorios';

const axios = require('axios');
const cheerio = require('cheerio');
const UserAgent = require('user-agents');
const time = require('./mod/time');
const classmongo = require('./mod/classmongo');

let dados = {};

async function scrap(url) {
  const horadata = time();
  await classmongo.start()
  const userAgent = await new UserAgent();
  const { data } = await axios.get(url, {
    'User-Agent': userAgent.toString()
  });
  const $ = cheerio.load(data);
  $('.descricao-prateleira')
    .map((index, element) => {
      let quando = horadata;
      let farmacia = 'DROGARIAPACHECO'
      let nome = $(element).find('.collection-link').text();
      let preco = $(element).find('.valor-por').text();
      let urlproduto = $(element).find('a').attr('href');

      dados = { quando, farmacia, nome, preco, urlproduto }

      classmongo.add(dados);
      console.log(dados);
    })
};

scrap(url);


