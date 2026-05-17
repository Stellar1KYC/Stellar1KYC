import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './User';

@Entity()
export class Credential {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column()
  hash: string;

  @Column()
  signature: string;

  @Column({ nullable: true })
  ipfsCid: string;

  @Column({ default: 'active' })
  status: string;

  @Column({ nullable: true })
  revokedAt: Date;

  @Column({ nullable: true })
  revocationReason: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
