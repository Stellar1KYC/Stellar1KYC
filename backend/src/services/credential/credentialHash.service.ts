import { createHash } from 'crypto';

export class CredentialHashService {
  async generateHash(data: any): Promise<string> {
    return createHash('sha256').update(JSON.stringify(data)).digest('hex');
  }
}
