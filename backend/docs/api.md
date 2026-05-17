# API Documentation

## Base URL
```
http://localhost:3000/api
```

## Authentication
Most endpoints require JWT authentication. Include the token in the Authorization header:
```
Authorization: Bearer <token>
```

## Endpoints

### Authentication

#### POST /auth/wallet
Authenticate with a Stellar wallet signature.

**Request Body:**
```json
{
  "walletAddress": "G...",
  "signature": "...",
  "message": "..."
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "token": "...",
    "refreshToken": "...",
    "walletAddress": "G..."
  }
}
```

#### POST /auth/refresh
Refresh an access token.

**Request Body:**
```json
{
  "refreshToken": "..."
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "token": "..."
  }
}
```

### Verification

#### POST /verification/submit
Submit a verification request.

**Request Body:**
```json
{
  "userId": "...",
  "documents": [...],
  "metadata": {}
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "verificationId": "...",
    "status": "pending"
  }
}
```

#### GET /verification/:id
Get verification status.

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "...",
    "status": "approved",
    "documents": [...]
  }
}
```

#### POST /verification/:id/review
Review a verification (verifier only).

**Request Body:**
```json
{
  "status": "approved",
  "notes": "..."
}
```

### Credentials

#### POST /credentials/issue
Issue a new credential.

**Request Body:**
```json
{
  "userId": "...",
  "type": "identity",
  "data": {}
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "credentialId": "...",
    "hash": "...",
    "signature": "..."
  }
}
```

#### GET /credentials/:id
Get credential details.

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "...",
    "hash": "...",
    "status": "active"
  }
}
```

#### POST /credentials/:id/revoke
Revoke a credential.

**Request Body:**
```json
{
  "reason": "..."
}
```

### Verifiers

#### POST /verifiers/register
Register as a verifier.

**Request Body:**
```json
{
  "name": "...",
  "walletAddress": "G...",
  "email": "...",
  "organization": "..."
}
```

#### GET /verifiers
List all verifiers.

**Response:**
```json
{
  "success": true,
  "data": [...]
}
```

#### POST /verifiers/:id/approve
Approve a verifier (admin only).

#### POST /verifiers/:id/suspend
Suspend a verifier (admin only).

### NFTs

#### POST /nft/mint
Mint an identity NFT.

**Request Body:**
```json
{
  "userId": "..."
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "nftId": "...",
    "tokenId": "..."
  }
}
```

#### GET /nft/user/:userId
Get user's NFTs.

### Users

#### GET /users/:id
Get user profile.

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "...",
    "walletAddress": "G...",
    "verificationStatus": "verified"
  }
}
```

#### PUT /users/:id
Update user profile.

## Error Responses

All errors follow this format:
```json
{
  "success": false,
  "message": "Error description",
  "error": "Detailed error (in development)"
}
```

### Status Codes
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 429: Too Many Requests
- 500: Internal Server Error
