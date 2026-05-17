import { IsString, IsNotEmpty, IsOptional, IsArray } from 'class-validator';

export class SubmitVerificationDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsArray()
  @IsNotEmpty()
  documents: any[];

  @IsOptional()
  metadata?: any;
}

export class ReviewVerificationDto {
  @IsString()
  @IsNotEmpty()
  status: 'approved' | 'rejected';

  @IsOptional()
  notes?: string;
}
