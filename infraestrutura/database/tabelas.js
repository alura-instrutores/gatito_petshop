const SQL = require("sql-template-strings");
const sqlite = require("sqlite");
class Tabelas {
  async init() {
    this.conexao = await sqlite.open("./database.sqlite");
    this.criaClientes();
    this.criaPets();
    this.criaServicos();
    this.criaAtendimentos();
    await sqlite.close(this.conexao);
  }

  criaClientes() {
    const sql = SQL`CREATE TABLE IF NOT EXISTS Clientes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome text  NOT NULL,
      cpf text NOT NULL
      );`;
    this.criaTabela(sql);
  }

  criaPets() {
    const sql = SQL`CREATE TABLE IF NOT EXISTS Pets (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome text,
      donoId INTEGER,
      tipo text,
      observacoes text,
      FOREIGN KEY (donoId) references Clientes(id))`;

    this.criaTabela(sql);
  }

  criaServicos() {
    const sql = SQL`CREATE TABLE IF NOT EXISTS Servicos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome text,
      preco decimal(5,2),
      descricao text)`;

    this.criaTabela(sql);
  }

  criaAtendimentos() {
    const sql = SQL`CREATE TABLE IF NOT EXISTS Atendimentos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      clienteId INTEGER,
      petId INTEGER,
      servicoId INTEGER,
      data datetime,
      status text,
      observacoes text,
      FOREIGN KEY (clienteId) references Clientes(id),
      FOREIGN KEY (petId) references Pets(id),
      FOREIGN KEY (servicoId) references Servicos(id))`;

    this.criaTabela(sql);
  }

  async criaTabela(sql) {
    try {
      const retorno = await this.conexao.run(sql);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new Tabelas();
