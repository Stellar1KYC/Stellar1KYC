// On-chain storage definitions for Identity Registry

pub struct StorageKeys;

impl StorageKeys {
    pub const ADMIN: soroban_sdk::Symbol = soroban_sdk::symbol!("ADMIN");
    pub const VERIFIERS: soroban_sdk::Symbol = soroban_sdk::symbol!("VERIFIERS");
    pub const CREDENTIALS: soroban_sdk::Symbol = soroban_sdk::symbol!("CREDENTIALS");
    pub const REVOKED: soroban_sdk::Symbol = soroban_sdk::symbol!("REVOKED");
    pub const VERSION: soroban_sdk::Symbol = soroban_sdk::symbol!("VERSION");
}

// TODO: Implement storage functions
