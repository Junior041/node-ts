import { Request, Response, NextFunction } from 'express';
import serverService from '../service/server.service';
import { VariaveisGlobal } from '../global/variaveis.global';

async function getServerStatus(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const response = await serverService.getServerStatus();
    if (response.status === VariaveisGlobal.RespostaSucesso) {
      res.status(VariaveisGlobal.RespostaSucesso).send(response);
    } else {
      res.status(VariaveisGlobal.RespostaErro).send(response);
    }
  } catch (err) {
    next(err);
  }
}

export default {
  getServerStatus,
};
