export function isValidWalletAddress(address: string): boolean {
  // Stellar address validation
  return /^G[A-Z0-9]{55}$/.test(address);
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isValidStellarPublicKey(publicKey: string): boolean {
  return /^G[A-Z0-9]{55}$/.test(publicKey);
}
