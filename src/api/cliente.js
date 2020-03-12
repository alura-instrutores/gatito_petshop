const urlBase = "http://localhost:4000/clientes";

const consomeApi = (parametro = "", method = "GET", body) => {
  return fetch(`${urlBase}/${parametro}`, {
    method,
    headers: { "content-type": "application/json" },
    body
  }).then(res => res.json());
};

// Reutilizavel

const ApiService = {
  listarClientes: () => consomeApi(),

  deletaCliente: id => consomeApi(`cliente/${id}`, "DELETE"),

  detalhaCliente: id => consomeApi(`cliente/${id}`, "GET"),

  cadastrarClientes: (nome, cpf) => {
    const json = JSON.stringify({
      nome: nome,
      cpf: cpf
    });

    consomeApi("cliente", "POST", json);
  },

  editaCliente: (id, cpf, nome) => {
    const json = JSON.stringify({
      nome: nome,
      cpf: cpf
    });
    return consomeApi(`cliente/${id}`, "PUT", json);
  }
};

export default ApiService;
