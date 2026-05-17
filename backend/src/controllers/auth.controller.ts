import { Request, Response, NextFunction } from 'express';
import { AuthService } from '../services/auth/auth.service';

export class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  async walletAuth(req: Request, res: Response, next: NextFunction) {
    try {
      const { walletAddress, signature, message } = req.body;
      const result = await this.authService.authenticateWallet(walletAddress, signature, message);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }

  async refreshToken(req: Request, res: Response, next: NextFunction) {
    try {
      const { refreshToken } = req.body;
      const result = await this.authService.refreshToken(refreshToken);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }

  async logout(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user?.id;
      await this.authService.logout(userId);
      res.json({ message: 'Logged out successfully' });
    } catch (error) {
      next(error);
    }
  }
}
