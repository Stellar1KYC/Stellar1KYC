import { AppDataSource } from '../config/database';

export async function initializeDatabase() {
  try {
    await AppDataSource.initialize();
    console.log('Database connection established');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }
}

export async function closeDatabase() {
  await AppDataSource.destroy();
}
