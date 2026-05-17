import { Request, Response, NextFunction } from 'express';
import { VerifierService } from '../services/verifier/verifier.service';

export class VerifierController {
  private verifierService: VerifierService;

  constructor() {
    this.verifierService = new VerifierService();
  }

  async registerVerifier(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      const result = await this.verifierService.registerVerifier(data);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }

  async getVerifier(req: Request, res: Response, next: NextFunction) {
    try {
      const { verifierId } = req.params;
      const verifier = await this.verifierService.getVerifier(verifierId);
      res.json(verifier);
    } catch (error) {
      next(error);
    }
  }

  async listVerifiers(req: Request, res: Response, next: NextFunction) {
    try {
      const verifiers = await this.verifierService.listVerifiers();
      res.json(verifiers);
    } catch (error) {
      next(error);
    }
  }

  async approveVerifier(req: Request, res: Response, next: NextFunction) {
    try {
      const { verifierId } = req.params;
      const result = await this.verifierService.approveVerifier(verifierId);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }

  async suspendVerifier(req: Request, res: Response, next: NextFunction) {
    try {
      const { verifierId } = req.params;
      const { reason } = req.body;
      const result = await this.verifierService.suspendVerifier(verifierId, reason);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }
}
