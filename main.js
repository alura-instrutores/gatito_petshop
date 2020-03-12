import { adicionarRota, onNavigate } from "./router";
import inicializaCliente from "./src/componentes/lista/listagem-cliente";
import inicializaCadastro from "./src/componentes/cadastro/formCadastro";
import inicializaFormEdicao from "./src/componentes/edicao/formEdicao";

const rotas = [
  { url: "/", componente: inicializaCliente },
  { url: "/cadastro", componente: inicializaCadastro },
  { url: "/edita", componente: inicializaFormEdicao }
];

rotas.forEach(rota => {
  adicionarRota(rota.url, rota.componente);
});


onNavigate(window.location.pathname);

