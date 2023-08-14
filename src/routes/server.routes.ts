import express from 'express';
import serverController from '../controller/server.controller';
import { verificaJwt } from '../middleware/middleware';

const serverRouter = express.Router();

serverRouter.get('/', verificaJwt, serverController.getServerStatus);

export default serverRouter;
