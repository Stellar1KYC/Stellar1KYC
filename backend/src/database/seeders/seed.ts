import { DataSource } from 'typeorm';
import { User } from '../../models/User';
import { Verifier } from '../../models/Verifier';

export async function seed(dataSource: DataSource) {
  const userRepository = dataSource.getRepository(User);
  const verifierRepository = dataSource.getRepository(Verifier);

  // Seed sample verifier
  const verifier = verifierRepository.create({
    name: 'Sample Verifier',
    walletAddress: 'GXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    email: 'verifier@example.com',
    organization: 'Sample Organization',
    status: 'active',
  });
  await verifierRepository.save(verifier);

  console.log('Database seeded successfully');
}
