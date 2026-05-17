import dotenv from 'dotenv';

dotenv.config();

export const stellarConfig = {
  network: process.env.STELLAR_NETWORK || 'public',
  secretKey: process.env.STELLAR_SECRET_KEY || '',
  horizonUrl: process.env.STELLAR_HORIZON_URL || 'https://horizon.stellar.org',
};
