import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { config } from './config';
import { errorMiddleware } from './middleware/error.middleware';
import { rateLimiter } from './middleware/rateLimit.middleware';
import authRoutes from './routes/auth.routes';
import verificationRoutes from './routes/verification.routes';
import credentialRoutes from './routes/credential.routes';
import verifierRoutes from './routes/verifier.routes';
import nftRoutes from './routes/nft.routes';
import userRoutes from './routes/user.routes';

export const app: Application = express();

// Security middleware
app.use(helmet());
app.use(cors({
  origin: config.cors.origin,
  credentials: config.cors.credentials,
}));

// Rate limiting
app.use(rateLimiter);

// Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/verification', verificationRoutes);
app.use('/api/credentials', credentialRoutes);
app.use('/api/verifiers', verifierRoutes);
app.use('/api/nft', nftRoutes);
app.use('/api/users', userRoutes);

// Error handling
app.use(errorMiddleware);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});
