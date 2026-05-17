import { Router } from 'express';
import { NftController } from '../controllers/nft.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();
const nftController = new NftController();

router.post('/mint/:userId', authMiddleware, nftController.mintIdentityNft.bind(nftController));
router.get('/:nftId', nftController.getNft.bind(nftController));
router.get('/user/nfts', authMiddleware, nftController.getUserNfts.bind(nftController));

export default router;
