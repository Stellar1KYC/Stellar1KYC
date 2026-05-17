import { app } from './app';
import { initializeDatabase, closeDatabase } from './database/connection';
import { config } from './config';
import { startCleanupJob } from './jobs/cleanup.job';
import logger from './utils/logger';

const PORT = config.port || 3000;

async function startServer() {
  try {
    // Initialize database
    await initializeDatabase();

    // Start background jobs
    startCleanupJob();

    // Start server
    app.listen(PORT, () => {
      logger.info(`Server running on port ${PORT}`);
      logger.info(`Environment: ${config.nodeEnv}`);
    });

    // Graceful shutdown
    process.on('SIGTERM', async () => {
      logger.info('SIGTERM signal received: closing HTTP server');
      await closeDatabase();
      process.exit(0);
    });

    process.on('SIGINT', async () => {
      logger.info('SIGINT signal received: closing HTTP server');
      await closeDatabase();
      process.exit(0);
    });
  } catch (error) {
    logger.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();
