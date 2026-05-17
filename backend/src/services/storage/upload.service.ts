import { IpfsService } from './ipfs.service';

export class UploadService {
  private ipfsService: IpfsService;

  constructor() {
    this.ipfsService = new IpfsService();
  }

  async uploadDocument(file: Buffer): Promise<string> {
    const cid = await this.ipfsService.addFile(file);
    return cid;
  }

  async uploadCredential(credential: any): Promise<string> {
    const cid = await this.ipfsService.addJSON(credential);
    return cid;
  }
}
