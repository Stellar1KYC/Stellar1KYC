import { EventEmitter } from 'events';

class VerifierEvents extends EventEmitter {
  constructor() {
    super();
  }

  emitVerifierRegistered(verifierId: string, name: string) {
    this.emit('verifier:registered', { verifierId, name });
  }

  emitVerifierApproved(verifierId: string) {
    this.emit('verifier:approved', { verifierId });
  }

  emitVerifierSuspended(verifierId: string, reason: string) {
    this.emit('verifier:suspended', { verifierId, reason });
  }
}

export const verifierEvents = new VerifierEvents();
