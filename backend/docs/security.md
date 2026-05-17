# Security Documentation

## Authentication

### JWT Tokens
- Access tokens expire after 15 minutes
- Refresh tokens expire after 7 days
- Tokens are signed with HS256 algorithm

### Wallet Authentication
- Stellar wallet signature verification
- Message signing with user's private key
- Nonce-based challenge to prevent replay attacks

## Authorization

### Role-Based Access Control
- **User**: Can manage their own profile and credentials
- **Verifier**: Can review verification requests
- **Admin**: Can manage verifiers and system settings

### Middleware
- `authMiddleware`: Validates JWT tokens
- Route-level protection for sensitive endpoints

## Data Protection

### Encryption
- Sensitive data encrypted with AES-256-GCM
- Encryption keys stored in environment variables
- IV (Initialization Vector) unique per encryption

### Hashing
- Passwords hashed with SHA-256
- Credential hashes using SHA-256
- Salting for additional security

### Storage
- Documents stored on IPFS (decentralized)
- Database credentials encrypted at rest
- Environment variables for secrets

## API Security

### Rate Limiting
- 100 requests per 15 minutes per IP
- Configurable via environment variables

### CORS
- Configured to allow specific origins
- Credentials support for authenticated requests

### Input Validation
- class-validator for request validation
- Type safety with TypeScript
- SQL injection prevention via TypeORM

### Headers
- Helmet.js for security headers
- HSTS, X-Frame-Options, X-Content-Type-Options

## Blockchain Security

### Stellar Network
- Transaction verification before submission
- Network configuration (testnet/mainnet)
- Horizon API authentication

### Smart Contracts
- Soroban contract interaction
- Contract address validation
- Transaction signing verification

## Secrets Management

### Environment Variables
- Never commit `.env` files
- Use `.env.example` as template
- Rotate secrets regularly

### Recommended Secrets
- JWT_SECRET
- DATABASE_PASSWORD
- STELLAR_SECRET_KEY (if needed)
- IPFS_API_SECRET

## Audit Logging

### Logging
- Winston logger for structured logging
- Log levels: error, warn, info, debug
- Sensitive operations logged

### Monitoring
- Health check endpoint
- Error tracking
- Performance metrics

## Best Practices

1. **Never expose secrets** in code or logs
2. **Validate all inputs** before processing
3. **Use HTTPS** in production
4. **Keep dependencies updated**
5. **Regular security audits**
6. **Implement proper error handling** without exposing details
7. **Use prepared statements** (TypeORM handles this)
8. **Implement proper session management**
9. **Sanitize user data** before storage
10. **Implement proper CORS policies**

## Common Vulnerabilities

### SQL Injection
Prevented by TypeORM's parameterized queries.

### XSS
Input sanitization and output encoding.

### CSRF
JWT-based authentication mitigates CSRF.

### DoS
Rate limiting and request timeout.

### Replay Attacks
Nonce-based challenges for wallet authentication.

## Compliance

### GDPR
- User data deletion capability
- Data access requests
- Privacy by design

### SOC 2
- Access controls
- Audit trails
- Data encryption

## Incident Response

1. Identify the breach
2. Contain the impact
3. Notify affected parties
4. Document the incident
5. Implement preventive measures
