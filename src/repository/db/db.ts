import { Sequelize } from 'sequelize';
import { env } from '../../env/env';

const connection = new Sequelize('sys', env.DB_USERNAME, env.DB_PASSWORD, {
  host: env.DB_HOST,
  dialect: 'mysql', // Usando o PostgreSQL
  // logging: false,
  pool: {
    max: 20, // Número máximo de conexões no pool
    min: 0, // Número mínimo de conexões no pool
    acquire: 30000, // Tempo máximo, em milissegundos, que o pool irá tentar obter uma conexão antes de lançar um erro
    idle: 10000, // Tempo máximo, em milissegundos, que uma conexão pode ficar inativa no pool antes de ser liberada
  },
});

export default connection;
