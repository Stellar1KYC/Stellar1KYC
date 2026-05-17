import jwt from 'jsonwebtoken';
import { config } from '../../config';

export class JwtService {
  async generateToken(payload: any): Promise<string> {
    return jwt.sign(payload, config.jwt.secret, { expiresIn: config.jwt.expiresIn });
  }

  async verifyToken(token: string): Promise<any> {
    return jwt.verify(token, config.jwt.secret);
  }
}
