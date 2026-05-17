import { Server, Horizon } from '@stellar/stellar-sdk';
import { stellarConfig } from '../../config';

export class StellarService {
  private server: Server;

  constructor() {
    this.server = new Server(stellarConfig.horizonUrl);
  }

  async getAccount(accountId: string) {
    return this.server.loadAccount(accountId);
  }

  async submitTransaction(transaction: Horizon.Transaction) {
    return this.server.submitTransaction(transaction);
  }
}
