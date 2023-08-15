import { Request, Response, NextFunction } from 'express';
import serverService from '../service/server.service';
import { RetornoStatus } from '../global/StatusTypes';

async function getServerStatus(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const response: ResponsePadraoTypes =
      await serverService.buscarServerStatus();
    if (response.status === RetornoStatus.RespostaSucesso) {
      res.status(RetornoStatus.RespostaSucesso).send(response);
    } else {
      res.status(RetornoStatus.RespostaErro).send(response);
    }
  } catch (err) {
    next(err);
  }
}

export default {
  getServerStatus,
};
