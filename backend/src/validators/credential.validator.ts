import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class IssueCredentialDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsNotEmpty()
  data: any;
}

export class RevokeCredentialDto {
  @IsString()
  @IsNotEmpty()
  reason: string;
}
