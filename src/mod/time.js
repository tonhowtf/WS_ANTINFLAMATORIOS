function time() {
  const data = new Date();

  const dia = data.getDate();
  const hora = data.getHours();
  const min = data.getMinutes();
  const mes = data.getMonth();
  const ano = data.getFullYear();

  const datatime = `${hora}:${min} ${dia}/${mes}/${ano} `
  return datatime
}

module.exports = time;