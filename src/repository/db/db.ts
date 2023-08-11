import { Sequelize } from 'sequelize';
import { env } from '../../env/env';

const connection = new Sequelize('sys', env.DB_USERNAME, env.DB_PASSWORD, {
  host: env.DB_HOST,
  dialect: 'mysql',
  logging: false,
  pool: {
    max: 20,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

export default connection;
