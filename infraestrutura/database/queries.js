const sqlite = require("sqlite");

const executaQuery = async (res, query) => {
  const conexao = await sqlite.open("./database.sqlite");
  const resBD = await conexao.all(query);
  res.json(resBD);
  await sqlite.close(conexao);
};

module.exports = executaQuery;
