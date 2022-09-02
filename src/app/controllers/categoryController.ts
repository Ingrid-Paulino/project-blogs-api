import { NextFunction, Request, Response } from 'express';
import categoryService from '../services/categoryService';
import { TCategory, TCategoryWithName } from '../types';

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name } = req.body as TCategoryWithName;
    const response: TCategory = await categoryService.create(name);
    return res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response: TCategory[] = await categoryService.getAll();
    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

export default { create, getAll };