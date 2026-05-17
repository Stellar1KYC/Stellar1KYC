import { createCipheriv, createDecipheriv, randomBytes, scrypt } from 'crypto';

export class EncryptionService {
  async encrypt(data: string, password: string): Promise<{ encrypted: string; iv: string; salt: string }> {
    const salt = randomBytes(16);
    const key = await this.deriveKey(password, salt);
    const iv = randomBytes(16);
    const cipher = createCipheriv('aes-256-gcm', key, iv);
    let encrypted = cipher.update(data, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    const authTag = cipher.getAuthTag();
    return { encrypted: encrypted + authTag.toString('hex'), iv: iv.toString('hex'), salt: salt.toString('hex') };
  }

  async decrypt(encrypted: string, iv: string, salt: string, password: string): Promise<string> {
    const key = await this.deriveKey(password, Buffer.from(salt, 'hex'));
    const decipher = createDecipheriv('aes-256-gcm', key, Buffer.from(iv, 'hex'));
    decipher.setAuthTag(Buffer.from(encrypted.slice(-32), 'hex'));
    let decrypted = decipher.update(encrypted.slice(0, -32), 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  }

  private async deriveKey(password: string, salt: Buffer): Promise<Buffer> {
    return new Promise((resolve, reject) => {
      scrypt(password, salt, 32, (err, key) => {
        if (err) reject(err);
        else resolve(key);
      });
    });
  }
}
