import { Router } from 'express';
import { VerificationController } from '../controllers/verification.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();
const verificationController = new VerificationController();

router.post('/submit', authMiddleware, verificationController.submitVerification.bind(verificationController));
router.get('/status', authMiddleware, verificationController.getVerificationStatus.bind(verificationController));
router.post('/:verificationId/approve', authMiddleware, verificationController.approveVerification.bind(verificationController));
router.post('/:verificationId/reject', authMiddleware, verificationController.rejectVerification.bind(verificationController));

export default router;
