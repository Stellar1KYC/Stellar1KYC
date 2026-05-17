import { createHash } from 'crypto';

export function hashString(data: string): string {
  return createHash('sha256').update(data).digest('hex');
}

export function hashObject(data: any): string {
  return createHash('sha256').update(JSON.stringify(data)).digest('hex');
}
