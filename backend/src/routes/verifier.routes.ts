import { Router } from 'express';
import { VerifierController } from '../controllers/verifier.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();
const verifierController = new VerifierController();

router.post('/register', verifierController.registerVerifier.bind(verifierController));
router.get('/:verifierId', verifierController.getVerifier.bind(verifierController));
router.get('/', verifierController.listVerifiers.bind(verifierController));
router.post('/:verifierId/approve', authMiddleware, verifierController.approveVerifier.bind(verifierController));
router.post('/:verifierId/suspend', authMiddleware, verifierController.suspendVerifier.bind(verifierController));

export default router;
