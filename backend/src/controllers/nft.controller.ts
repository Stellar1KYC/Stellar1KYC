import { Request, Response, NextFunction } from 'express';
import { NftMintService } from '../services/blockchain/nftMint.service';

export class NftController {
  private nftMintService: NftMintService;

  constructor() {
    this.nftMintService = new NftMintService();
  }

  async mintIdentityNft(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req.params;
      const result = await this.nftMintService.mintIdentityNft(userId);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }

  async getNft(req: Request, res: Response, next: NextFunction) {
    try {
      const { nftId } = req.params;
      const nft = await this.nftMintService.getNft(nftId);
      res.json(nft);
    } catch (error) {
      next(error);
    }
  }

  async getUserNfts(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user?.id;
      const nfts = await this.nftMintService.getUserNfts(userId);
      res.json(nfts);
    } catch (error) {
      next(error);
    }
  }
}
