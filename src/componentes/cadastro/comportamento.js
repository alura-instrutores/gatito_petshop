import validaCPF from "../../validacoes/validaCPF";
import ApiService from "../../api/cliente";

const eventoEnvia = form => {
    form.addEventListener("submit", event => {
        event.preventDefault();
      
        const nome = event.target.querySelector("[data-nome]").value;
        const cpf = event.target.querySelector("[data-cpf]").value;

        if (validaCPF(cpf)) {
          ApiService.cadastrarClientes(nome, cpf);
        } else {
          alert("O CPF não é válido");
        }
      });


};

export default eventoEnvia;
