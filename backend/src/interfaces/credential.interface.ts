export interface ICredential {
  id: string;
  userId: string;
  hash: string;
  signature: string;
  ipfsCid?: string;
  status: string;
  revokedAt?: Date;
  revocationReason?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICreateCredential {
  userId: string;
  type: string;
  data: any;
}

export interface IVerifyCredential {
  credentialId: string;
}
