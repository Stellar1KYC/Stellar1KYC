export interface IUser {
  id: string;
  walletAddress: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  verificationStatus: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICreateUser {
  walletAddress: string;
  email?: string;
  firstName?: string;
  lastName?: string;
}

export interface IUpdateUser {
  email?: string;
  firstName?: string;
  lastName?: string;
}
