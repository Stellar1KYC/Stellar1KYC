//! On-chain storage definitions for Identity NFT

/// Storage keys for persistent data
pub struct StorageKeys;

#[allow(dead_code)]
impl StorageKeys {
    pub const ADMIN: soroban_sdk::Symbol = soroban_sdk::symbol!("ADMIN");
    pub const BASE_URI: soroban_sdk::Symbol = soroban_sdk::symbol!("BASE_URI");
    pub const OWNERS: soroban_sdk::Symbol = soroban_sdk::symbol!("OWNERS");
    pub const METADATA: soroban_sdk::Symbol = soroban_sdk::symbol!("METADATA");
    pub const TOTAL_SUPPLY: soroban_sdk::Symbol = soroban_sdk::symbol!("TOTAL_SUPPLY");
}
