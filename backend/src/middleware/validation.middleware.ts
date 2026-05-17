import { Request, Response, NextFunction } from 'express';
import { ValidationError, validate } from 'class-validator';

export const validationMiddleware = (dto: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const object = Object.assign(dto, req.body);
    const errors: ValidationError[] = await validate(object);

    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    next();
  };
};
