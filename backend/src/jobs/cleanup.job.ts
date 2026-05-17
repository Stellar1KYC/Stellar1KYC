import cron from 'node-cron';

export function startCleanupJob() {
  // Run cleanup job daily at midnight
  cron.schedule('0 0 * * *', async () => {
    // TODO: Implement cleanup logic
    console.log('Running cleanup job');
  });
}
