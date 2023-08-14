import express from 'express';
import serverController from '../controller/server.controller';
import { verificaJwt } from '../middleware/middleware';

const buscarRoutes = express.Router();

buscarRoutes.get(
  '/server/status',
  verificaJwt,
  serverController.getServerStatus,
);

export default buscarRoutes;
