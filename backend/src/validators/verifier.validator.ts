import { IsString, IsNotEmpty, IsOptional, IsEmail } from 'class-validator';

export class RegisterVerifierDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  walletAddress: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  organization?: string;

  @IsOptional()
  metadata?: any;
}

export class SuspendVerifierDto {
  @IsString()
  @IsNotEmpty()
  reason: string;
}
