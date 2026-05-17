# StellarOneKYC Backend

Backend API for the StellarOneKYC decentralized identity verification platform.

## Tech Stack

- **Node.js** - Runtime environment
- **Express** - Web framework
- **TypeScript** - Type-safe JavaScript
- **TypeORM** - ORM for database operations
- **PostgreSQL** - Primary database
- **Redis** - Caching and job queue
- **JWT** - Authentication
- **Stellar SDK** - Stellar blockchain integration
- **Soroban** - Smart contract platform
- **IPFS** - Decentralized storage
- **Bull** - Job queue
- **Jest** - Testing framework
- **Docker** - Containerization

## Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Configure environment variables in .env
```

## Environment Variables

See `.env.example` for all required environment variables:

- `NODE_ENV` - Environment (development/production)
- `PORT` - Server port
- `DATABASE_URL` - PostgreSQL connection string
- `REDIS_HOST` - Redis host
- `REDIS_PORT` - Redis port
- `JWT_SECRET` - JWT signing secret
- `STELLAR_HORIZON_URL` - Stellar Horizon API URL
- `SOROBAN_RPC_URL` - Soroban RPC URL
- `IPFS_API_URL` - IPFS API URL

## Running the Application

### Development

```bash
# Run in development mode
npm run dev

# Run with hot reload
npm run dev:watch
```

### Production

```bash
# Build TypeScript
npm run build

# Start production server
npm start
```

### Docker

```bash
# Build and start with Docker Compose
docker-compose up -d

# View logs
docker-compose logs -f

# Stop
docker-compose down
```

## Database

### Migrations

```bash
# Generate migration
npm run migration:generate -- -n MigrationName

# Run migrations
npm run migration:run

# Revert migration
npm run migration:revert
```

### Seeding

```bash
# Seed database
npm run seed
```

## Testing

```bash
# Run all tests
npm test

# Run unit tests
npm run test:unit

# Run integration tests
npm run test:integration

# Run e2e tests
npm run test:e2e

# Run with coverage
npm run test:coverage
```

## API Documentation

See [docs/api.md](docs/api.md) for detailed API documentation.

## Architecture

See [docs/architecture.md](docs/architecture.md) for system architecture details.

## Security

See [docs/security.md](docs/security.md) for security guidelines.

## Project Structure

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
├── dist/                # Compiled JavaScript
├── Dockerfile
├── docker-compose.yml
└── package.json
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build TypeScript
- `npm start` - Start production server
- `npm test` - Run tests
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run migration:generate` - Generate TypeORM migration
- `npm run migration:run` - Run migrations
- `npm run seed` - Seed database

## Health Check

```bash
curl http://localhost:3000/health
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License - see [LICENSE](LICENSE) file for details.
