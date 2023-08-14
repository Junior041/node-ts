import connection from './db/db';

async function buscarServerStatus(): Promise<any> {
  try {
    await connection.query('SELECT 1+1 AS result');
    return true;
  } catch (error) {
    console.error('Erro:', error);
    return null;
  }
}

export default {
  buscarServerStatus,
};
