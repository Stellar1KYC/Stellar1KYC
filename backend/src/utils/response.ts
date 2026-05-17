import { Response } from 'express';

export function successResponse(res: Response, data: any, message: string = 'Success') {
  return res.status(200).json({
    success: true,
    message,
    data,
  });
}

export function errorResponse(res: Response, message: string, statusCode: number = 500, error?: any) {
  return res.status(statusCode).json({
    success: false,
    message,
    error: error ? error.message : undefined,
  });
}
