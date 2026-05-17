import { VerificationService } from '../../services/verification/verification.service';

describe('VerificationService Integration', () => {
  let verificationService: VerificationService;

  beforeEach(() => {
    verificationService = new VerificationService();
  });

  describe('submitVerification', () => {
    it('should submit a verification request', async () => {
      const result = await verificationService.submitVerification('userId', {}, []);
      expect(result).toHaveProperty('verificationId');
      expect(result.status).toBe('pending');
    });
  });
});
