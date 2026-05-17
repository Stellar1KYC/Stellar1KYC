import { WalletAuthService } from './walletAuth.service';
import { JwtService } from './jwt.service';

export class AuthService {
  private walletAuthService: WalletAuthService;
  private jwtService: JwtService;

  constructor() {
    this.walletAuthService = new WalletAuthService();
    this.jwtService = new JwtService();
  }

  async authenticateWallet(walletAddress: string, signature: string, message: string) {
    const isValid = await this.walletAuthService.verifySignature(walletAddress, signature, message);
    if (!isValid) {
      throw new Error('Invalid signature');
    }
    const token = await this.jwtService.generateToken({ walletAddress });
    return { token, walletAddress };
  }

  async refreshToken(refreshToken: string) {
    const decoded = await this.jwtService.verifyToken(refreshToken);
    const token = await this.jwtService.generateToken({ walletAddress: decoded.walletAddress });
    return { token };
  }

  async logout(userId: string) {
    // TODO: Implement logout logic (invalidate tokens)
    return { success: true };
  }
}
