import { createHash, randomBytes, scrypt } from 'crypto';

export async function hashPassword(password: string): Promise<string> {
  return createHash('sha256').update(password).digest('hex');
}

export async function comparePassword(password: string, hash: string): Promise<boolean> {
  const passwordHash = await hashPassword(password);
  return passwordHash === hash;
}

export function generateRandomToken(length: number = 32): string {
  return randomBytes(length).toString('hex');
}
