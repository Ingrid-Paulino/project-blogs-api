import { NextFunction, Request, Response } from 'express';
import loginService from '../services/loginService';
import createToken from '../services/jwtService';
import { TLogin } from '../types';

const createLogin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body as TLogin;
    await loginService.createLogin({ email, password });
    const token = createToken(email);

    return res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

export default { createLogin };
