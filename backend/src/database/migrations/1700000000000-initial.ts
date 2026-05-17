import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialMigration1700000000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Create users table
    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS "user" (
        "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        "walletAddress" varchar(255) UNIQUE NOT NULL,
        "email" varchar(255),
        "firstName" varchar(255),
        "lastName" varchar(255),
        "verificationStatus" varchar(50) DEFAULT 'pending',
        "createdAt" timestamp DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" timestamp DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create verifiers table
    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS "verifier" (
        "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        "name" varchar(255) UNIQUE NOT NULL,
        "walletAddress" varchar(255) UNIQUE NOT NULL,
        "email" varchar(255),
        "organization" varchar(255),
        "status" varchar(50) DEFAULT 'pending',
        "metadata" json,
        "createdAt" timestamp DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" timestamp DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create credentials table
    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS "credential" (
        "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        "userId" uuid NOT NULL,
        "hash" varchar(255) NOT NULL,
        "signature" varchar(255) NOT NULL,
        "ipfsCid" varchar(255),
        "status" varchar(50) DEFAULT 'active',
        "revokedAt" timestamp,
        "revocationReason" text,
        "createdAt" timestamp DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" timestamp DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY ("userId") REFERENCES "user"("id")
      )
    `);

    // Create verifications table
    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS "verification" (
        "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        "userId" uuid NOT NULL,
        "status" varchar(50) DEFAULT 'pending',
        "documents" json,
        "verifierId" uuid,
        "reviewedAt" timestamp,
        "reviewNotes" text,
        "createdAt" timestamp DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" timestamp DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY ("userId") REFERENCES "user"("id"),
        FOREIGN KEY ("verifierId") REFERENCES "verifier"("id")
      )
    `);

    // Create nfts table
    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS "nft" (
        "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        "userId" uuid NOT NULL,
        "tokenId" varchar(255) UNIQUE NOT NULL,
        "contractAddress" varchar(255) NOT NULL,
        "type" varchar(50) DEFAULT 'identity',
        "metadata" json,
        "createdAt" timestamp DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" timestamp DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY ("userId") REFERENCES "user"("id")
      )
    `);

    // Create revocations table
    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS "revocation" (
        "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        "credentialId" uuid NOT NULL,
        "reason" text NOT NULL,
        "revokedBy" varchar(255) NOT NULL,
        "blockchainProof" json,
        "createdAt" timestamp DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" timestamp DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY ("credentialId") REFERENCES "credential"("id")
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS "revocation"`);
    await queryRunner.query(`DROP TABLE IF EXISTS "nft"`);
    await queryRunner.query(`DROP TABLE IF EXISTS "verification"`);
    await queryRunner.query(`DROP TABLE IF EXISTS "credential"`);
    await queryRunner.query(`DROP TABLE IF EXISTS "verifier"`);
    await queryRunner.query(`DROP TABLE IF EXISTS "user"`);
  }
}
