import { create } from 'ipfs-http-client';
import { ipfsConfig } from '../../config';

export class IpfsService {
  private ipfs: any;

  constructor() {
    this.ipfs = create({ url: ipfsConfig.apiUrl });
  }

  async addFile(file: Buffer): Promise<string> {
    const result = await this.ipfs.add(file);
    return result.path;
  }

  async getFile(cid: string): Promise<Buffer> {
    const chunks = [];
    for await (const chunk of this.ipfs.cat(cid)) {
      chunks.push(chunk);
    }
    return Buffer.concat(chunks);
  }

  async addJSON(data: any): Promise<string> {
    const buffer = Buffer.from(JSON.stringify(data));
    return this.addFile(buffer);
  }

  async getJSON(cid: string): Promise<any> {
    const buffer = await this.getFile(cid);
    return JSON.parse(buffer.toString());
  }
}
