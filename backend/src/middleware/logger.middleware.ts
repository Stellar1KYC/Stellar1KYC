import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger';

export const requestLoggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Record start time
  const startTime = Date.now();

  // Log incoming request
  logger.info(`Incoming request: ${req.method} ${req.originalUrl}`);

  // Attach finish event listener to log response details
  res.on('finish', () => {
    const duration = Date.now() - startTime;
    logger.info(`Completed: ${req.method} ${req.originalUrl} ${res.statusCode} ${duration}ms`);
  });

  // Continue to next middleware
  next();
};