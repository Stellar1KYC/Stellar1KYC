# Wallet Integration Guide

## Supported Wallets

- Freighter
- Albedo
- xBull

## Connection Flow

1. User clicks "Connect Wallet"
2. `WalletConnect` component triggers wallet selection
3. `useWallet` hook manages connection state
4. `WalletContext` provides wallet state app-wide

## Signing Transactions

All transaction signing goes through `services/blockchain/wallet.ts`.
