import ApiService from "../../api/cliente";
import inicializaNavBar from '../navbar/navbar'
import "../../assets/css/cadastro-clientes.css";
import "../../assets/css/clientes.css";
import "../../assets/css/main.scss";
import removeCliente from "../remove/removeCliente";

const criarBotaoExcluir = (id) => { 
  const botao = document.createElement('button')
  botao.classList.add('btn', 'btn-danger')
  botao.innerHTML = 'Excluir'
  botao.addEventListener('click', () => { 
  removeCliente(id)
  
  } )
  return botao
}

const exibeCliente = (cpf, nome, id) => {
  const linha = document.createElement("tr");
 
  const conteudoLinha = `
    <td>${cpf}</td>
    <td>${nome}</td>
    <button type="button" class="btn btn-info" onclick="onNavigate('/edita?id=${id}'); return false;">Editar</button>
  
`;
  linha.innerHTML = conteudoLinha;
  linha.appendChild(criarBotaoExcluir(id));
  return linha;
};

const criarCorpoTabela = async () => {
  const corpoTabela = document.createElement("tbody");
  const clientes = await ApiService.listarClientes();

  clientes.forEach(indice => {
    corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome, indice.id));
  });

  
  return corpoTabela
};

const criaCabecalhoTabela = () => { 
  const cabecalho = document.createElement("thead");
  cabecalho.classList.add("thead-dark");
  cabecalho.innerHTML = `  
      <tr>
        <th scope="col">CPF</th>
        <th scope="col">Nome</th>
        <th scope="col"></th>
        <th><a class="btn btn-primary" onclick="onNavigate('/cadastro'); return false;">Novo Cliente</a></th>
      </tr>
  `;
  return cabecalho
};


const inicializaCliente = () => {
  const renderNav = document.querySelector('[data-container]')
  inicializaNavBar(renderNav) 

  const tabela = document.createElement('table'); 
  tabela.classList.add('table')
  tabela.appendChild(criaCabecalhoTabela());
  criarCorpoTabela().then(corpoTabela => { 
      tabela.appendChild(corpoTabela)
  })
  
  return tabela;
};


export default inicializaCliente;
