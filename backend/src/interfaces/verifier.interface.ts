export interface IVerifier {
  id: string;
  name: string;
  walletAddress: string;
  email?: string;
  organization?: string;
  status: string;
  metadata?: any;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICreateVerifier {
  name: string;
  walletAddress: string;
  email?: string;
  organization?: string;
  metadata?: any;
}
