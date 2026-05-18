// Shared contract types for Identity Registry

use soroban_sdk::{Address, String as SorobanString, Map};

// TODO: Define credential types

pub struct VerifierInfo {
    pub address: Address,
    pub name: SorobanString,
}

pub struct Credential {
    pub id: SorobanString,
    pub holder: Address,
    pub issuer: Address,
}
