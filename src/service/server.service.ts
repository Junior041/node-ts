import serverRepository from '../repository/server.repository';

// responsavel por chamar o repository, e fazer regras de negocio
async function getServerStatus() {
  const response = await serverRepository.getServerStatus();
  // LogsClass.setLogger(20, response);
  return response;
}
export default {
  getServerStatus,
};
