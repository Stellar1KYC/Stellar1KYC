'use client';

// Wallet context provider — wraps app with wallet state
export default function WalletProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
