import { NextFunction, Request, Response } from 'express';
export const verificaJwt = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    next();
  } catch (error) {
    console.log(error);
  }
};
