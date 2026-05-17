export interface IVerification {
  id: string;
  userId: string;
  status: string;
  documents?: any;
  verifierId?: string;
  reviewedAt?: Date;
  reviewNotes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICreateVerification {
  userId: string;
  documents: any;
  metadata?: any;
}

export interface IReviewVerification {
  status: 'approved' | 'rejected';
  notes?: string;
}
