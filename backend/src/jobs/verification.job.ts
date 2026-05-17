import Queue from 'bull';
import { config } from '../config';

const verificationQueue = new Queue('verification', {
  redis: {
    host: config.redis.host,
    port: config.redis.port,
    password: config.redis.password,
  },
});

export async function processVerificationJob(data: any) {
  const job = await verificationQueue.add('process-verification', data);
  return job;
}

verificationQueue.process('process-verification', async (job) => {
  // TODO: Implement verification processing logic
  console.log('Processing verification:', job.data);
});
