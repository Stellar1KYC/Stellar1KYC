// Blockchain events for Identity Registry

use soroban_sdk::{contractevent, Address, String as SorobanString};

#[contractevent]
pub struct VerifierRegistered {
    pub verifier: Address,
    pub name: SorobanString,
}

#[contractevent]
pub struct CredentialIssued {
    pub credential_id: SorobanString,
    pub holder: Address,
}

// TODO: Add more events
