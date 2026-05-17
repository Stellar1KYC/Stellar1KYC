import { EventEmitter } from 'events';

class CredentialEvents extends EventEmitter {
  constructor() {
    super();
  }

  emitCredentialIssued(credentialId: string, userId: string) {
    this.emit('credential:issued', { credentialId, userId });
  }

  emitCredentialRevoked(credentialId: string, reason: string) {
    this.emit('credential:revoked', { credentialId, reason });
  }

  emitCredentialVerified(credentialId: string, isValid: boolean) {
    this.emit('credential:verified', { credentialId, isValid });
  }
}

export const credentialEvents = new CredentialEvents();
