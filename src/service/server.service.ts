import { RetornoStatus } from '../global/StatusTypes';
import serverRepository from '../repository/server.repository';

// responsavel por chamar o repository, e fazer regras de negocio
async function buscarServerStatus() {
  const responseQuery = await serverRepository.buscarServerStatus();
  if (responseQuery !== null) {
    return {
      retorno: 'Conectado com sucesso!!',
      status: RetornoStatus.RespostaSucesso,
    };
  } else {
    return {
      retorno: 'Erro ao conectar',
      status: RetornoStatus.RespostaErro,
    };
  }
}
export default {
  buscarServerStatus,
};
