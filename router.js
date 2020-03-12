const rotas = {};

const rootDiv = document.querySelector("[data-container]");

const adicionarRota = (caminho, funcaoInicializacao) => {
  rotas[caminho] = funcaoInicializacao; //executa a funcao iniciliza rota
};

const onNavigate = pathname => {
  window.history.pushState({}, pathname, window.location.origin + pathname);

  rootDiv.innerHTML = "";
  const inicarRota = rotas[window.location.pathname] // devolve a fubcai de inicializacao
  rootDiv.appendChild(inicarRota());
};
window.onNavigate = onNavigate;

window.onpopstate = () => {
  
  rootDiv.innerHTML = ''

  rootDiv.appendChild(rotas[window.location.pathname]());
};

export { onNavigate, adicionarRota };
