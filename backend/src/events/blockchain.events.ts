import { EventEmitter } from 'events';

class BlockchainEvents extends EventEmitter {
  constructor() {
    super();
  }

  emitTransactionMined(transactionId: string, status: string) {
    this.emit('blockchain:transaction_mined', { transactionId, status });
  }

  emitContractDeployed(contractId: string, address: string) {
    this.emit('blockchain:contract_deployed', { contractId, address });
  }

  emitNftMinted(tokenId: string, owner: string) {
    this.emit('blockchain:nft_minted', { tokenId, owner });
  }
}

export const blockchainEvents = new BlockchainEvents();
