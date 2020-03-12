import ApiService from '../../api/cliente'
 
const removeCliente = id => {
    if (confirm("Deseja deletar o cliente ?")) {
      
      ApiService.deletaCliente(id);
      window.location.reload()
    }
  };

export default removeCliente