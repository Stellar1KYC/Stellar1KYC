# Backend Architecture

## Overview
The backend is built with Node.js, Express, TypeScript, and TypeORM following a layered architecture pattern.

## Directory Structure

```
backend/
├── src/
│   ├── config/          # Configuration files
│   ├── controllers/     # Request handlers
│   ├── routes/          # Route definitions
│   ├── services/        # Business logic
│   ├── middleware/      # Express middleware
│   ├── models/          # TypeORM entities
│   ├── interfaces/      # TypeScript interfaces
│   ├── utils/           # Utility functions
│   ├── validators/      # Request validation DTOs
│   ├── jobs/            # Background jobs
│   ├── events/          # Event emitters
│   ├── database/        # Database setup
│   ├── tests/           # Test files
│   ├── app.ts           # Express app setup
│   └── server.ts        # Server entry point
├── docs/                # Documentation
├── Dockerfile
├── docker-compose.yml
└── package.json
```

## Layers

### Controllers
Handle HTTP requests and responses. They delegate business logic to services.

**Example:** `AuthController` handles authentication endpoints.

### Services
Contain business logic. Services are independent of HTTP concerns.

**Example:** `AuthService` handles wallet authentication and token generation.

### Models
TypeORM entities representing database tables.

**Example:** `User` entity represents the users table.

### Middleware
Cross-cutting concerns like authentication, validation, error handling.

**Example:** `authMiddleware` validates JWT tokens.

### Routes
Define API endpoints and map them to controllers.

**Example:** `authRoutes` defines authentication endpoints.

## Database

### PostgreSQL
Primary database for persistent data.

### Tables
- `user` - User accounts
- `verifier` - Verifier accounts
- `credential` - Verifiable credentials
- `verification` - Verification requests
- `nft` - NFT records
- `revocation` - Credential revocations

### Migrations
Database schema changes are managed through TypeORM migrations.

## External Services

### Stellar Network
- Horizon API for account and transaction operations
- Soroban for smart contract interactions

### IPFS
Decentralized storage for credential documents.

### Redis
- Session management
- Job queue (Bull)
- Caching

## Security

### Authentication
- JWT tokens for API authentication
- Wallet signature verification for Stellar wallets

### Authorization
- Role-based access control (user, verifier, admin)
- Middleware to protect routes

### Rate Limiting
- Express-rate-limit for API endpoint protection

### Data Encryption
- AES-256-GCM for sensitive data
- SHA-256 for hashing

## Background Jobs

### Bull Queue
- Verification processing
- Credential revocation
- NFT minting
- Cleanup tasks

### Cron Jobs
- Daily cleanup of expired data

## Events

### EventEmitter
- Credential issued/revoked events
- Verifier registration/approval events
- Blockchain transaction events

## Testing

### Unit Tests
Test individual functions and classes.

### Integration Tests
Test service layer with database.

### E2E Tests
Test API endpoints end-to-end.

## Deployment

### Docker
Containerized deployment with Docker Compose for local development.

### Environment Variables
Configuration through `.env` file.

### Health Check
`GET /health` endpoint for monitoring.
