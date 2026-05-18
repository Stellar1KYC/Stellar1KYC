// Blockchain events for Identity NFT

use soroban_sdk::{contractevent, Address, String as SorobanString};

#[contractevent]
pub struct Minted {
    pub to: Address,
    pub token_id: u64,
}

#[contractevent]
pub struct Transferred {
    pub from: Address,
    pub to: Address,
    pub token_id: u64,
}

// TODO: Add more events
