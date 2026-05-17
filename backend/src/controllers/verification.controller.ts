import { Request, Response, NextFunction } from 'express';
import { VerificationService } from '../services/verification/verification.service';

export class VerificationController {
  private verificationService: VerificationService;

  constructor() {
    this.verificationService = new VerificationService();
  }

  async submitVerification(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user?.id;
      const documents = req.files;
      const data = req.body;
      const result = await this.verificationService.submitVerification(userId, data, documents);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }

  async getVerificationStatus(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user?.id;
      const status = await this.verificationService.getVerificationStatus(userId);
      res.json(status);
    } catch (error) {
      next(error);
    }
  }

  async approveVerification(req: Request, res: Response, next: NextFunction) {
    try {
      const { verificationId } = req.params;
      const result = await this.verificationService.approveVerification(verificationId);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }

  async rejectVerification(req: Request, res: Response, next: NextFunction) {
    try {
      const { verificationId } = req.params;
      const { reason } = req.body;
      const result = await this.verificationService.rejectVerification(verificationId, reason);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }
}
