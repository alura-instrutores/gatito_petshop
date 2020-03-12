const customExpress = require("./config/custom-express");
const Tabelas = require("./infraestrutura/database/tabelas");

const app = customExpress();
Tabelas.init();

app.listen(4000, () => {
  console.log("Servidor rodando na porta 4000");
});
