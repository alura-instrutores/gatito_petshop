const inicializaNavBar = (container) => {
  
  const header = document.createElement("header");

  const navRender = `
  <nav class="navbar navbar-light bg-light">
    <a class="navbar-brand" href="#">
      PetShop!
    </a>
    <ul class="nav justify-content-end">
      <li class="nav-item">
        <a class="nav-link active">Clientes</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pets</a>
      </li>
    </ul>
  </nav>
`;
  header.innerHTML = navRender;
  
 
  const existe = container.contains(header);

  if(!existe){
    container.prepend(header)
  }

  return header;
};

export default inicializaNavBar;

