import { AuthService } from '../../services/auth/auth.service';

describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(() => {
    authService = new AuthService();
  });

  describe('authenticateWallet', () => {
    it('should authenticate a wallet with valid signature', async () => {
      const result = await authService.authenticateWallet('walletAddress', 'signature', 'message');
      expect(result).toHaveProperty('token');
      expect(result).toHaveProperty('walletAddress');
    });
  });

  describe('refreshToken', () => {
    it('should refresh a valid token', async () => {
      const result = await authService.refreshToken('validRefreshToken');
      expect(result).toHaveProperty('token');
    });
  });
});
