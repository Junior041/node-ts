import { NextFunction, Request, Response } from 'express';
export const verificaJwt = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    console.log(1);
    next();
  } catch (error) {
    console.log(error);
  }
};
