import connection from './db/db';
import { VariaveisGlobal } from '../global/variaveis.global';

async function getServerStatus(): Promise<ResponsePadraoTypes> {
  try {
    await connection.authenticate();
    return {
      status: VariaveisGlobal.RespostaSucesso,
      mensagem: 'Conexão estabelecida com sucesso!',
    };
  } catch (error) {
    console.log(error);
    return {
      status: VariaveisGlobal.RespostaErro,
      mensagem: 'Erro ao conectar ao banco de dados',
    };
  }
}

export default {
  getServerStatus,
};
