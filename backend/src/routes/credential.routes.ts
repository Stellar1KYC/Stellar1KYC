import { Router } from 'express';
import { CredentialController } from '../controllers/credential.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();
const credentialController = new CredentialController();

router.post('/issue/:userId', authMiddleware, credentialController.issueCredential.bind(credentialController));
router.get('/:credentialId', credentialController.getCredential.bind(credentialController));
router.post('/:credentialId/verify', credentialController.verifyCredential.bind(credentialController));
router.post('/:credentialId/revoke', authMiddleware, credentialController.revokeCredential.bind(credentialController));
router.get('/user/credentials', authMiddleware, credentialController.getUserCredentials.bind(credentialController));

export default router;
