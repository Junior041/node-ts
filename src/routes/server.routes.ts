import express from 'express';
import serverController from '../controller/server.controller';

const serverRouter = express.Router();

serverRouter.get('/', serverController.getServerStatus);

export default serverRouter;
