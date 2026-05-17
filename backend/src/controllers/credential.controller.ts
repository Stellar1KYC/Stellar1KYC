import { Request, Response, NextFunction } from 'express';
import { CredentialService } from '../services/credential/credential.service';

export class CredentialController {
  private credentialService: CredentialService;

  constructor() {
    this.credentialService = new CredentialService();
  }

  async issueCredential(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req.params;
      const data = req.body;
      const result = await this.credentialService.issueCredential(userId, data);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }

  async getCredential(req: Request, res: Response, next: NextFunction) {
    try {
      const { credentialId } = req.params;
      const credential = await this.credentialService.getCredential(credentialId);
      res.json(credential);
    } catch (error) {
      next(error);
    }
  }

  async verifyCredential(req: Request, res: Response, next: NextFunction) {
    try {
      const { credentialId } = req.params;
      const result = await this.credentialService.verifyCredential(credentialId);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }

  async revokeCredential(req: Request, res: Response, next: NextFunction) {
    try {
      const { credentialId } = req.params;
      const { reason } = req.body;
      const result = await this.credentialService.revokeCredential(credentialId, reason);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }

  async getUserCredentials(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user?.id;
      const credentials = await this.credentialService.getUserCredentials(userId);
      res.json(credentials);
    } catch (error) {
      next(error);
    }
  }
}
