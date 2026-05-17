import dotenv from 'dotenv';

dotenv.config();

export const ipfsConfig = {
  gateway: process.env.IPFS_GATEWAY || 'https://ipfs.io/ipfs',
  apiUrl: process.env.IPFS_API_URL || 'http://localhost:5001',
};
