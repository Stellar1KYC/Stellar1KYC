import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Credential } from './Credential';

@Entity()
export class Revocation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  credentialId: string;

  @ManyToOne(() => Credential)
  @JoinColumn({ name: 'credentialId' })
  credential: Credential;

  @Column()
  reason: string;

  @Column()
  revokedBy: string;

  @Column({ type: 'json', nullable: true })
  blockchainProof: any;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
