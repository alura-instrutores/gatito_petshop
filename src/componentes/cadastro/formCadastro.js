import eventoEnvia from "../../componentes/cadastro/comportamento";
import inicializaNavBar from '../navbar/navbar'
const form = document.createElement("form");

const cadastro = `

  <div class="container">
    <div class="form-group">
      <label class="etiqueta">CPF</label>
      <input
        type="number"
        class="form-control"
        data-cpf
        placeholder="Digite seu CPF aqui"
      />
    </div>
    <div class="form-group">
      <label class="etiqueta">Nome</label>
      <input
        type="text"
        class="form-control"
        data-nome
        placeholder="Digite seu nome aqui"
      />
    </div>
    <button type="submit" class="btn btn-primary">
      Enviar
    </button>
  </div>
  `;
form.innerHTML = cadastro;

const inicializaCadastro = () => {
  const renderNav = document.querySelector("[data-container]");
  inicializaNavBar(renderNav);
  eventoEnvia(form);
  return form;
};

export default inicializaCadastro;
