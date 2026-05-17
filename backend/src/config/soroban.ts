import dotenv from 'dotenv';

dotenv.config();

export const sorobanConfig = {
  network: process.env.SOROBAN_NETWORK || 'public',
  rpcUrl: process.env.SOROBAN_RPC_URL || 'https://soroban-rpc.publicnode.com',
  contractId: process.env.SOROBAN_CONTRACT_ID || '',
};
