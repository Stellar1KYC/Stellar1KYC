// Custom contract errors for Identity Registry

use soroban_sdk::contracterror;

#[contracterror]
#[derive(Copy, Clone, Debug, Eq, PartialEq)]
pub enum Error {
    Unauthorized = 1,
    VerifierAlreadyRegistered = 2,
    VerifierNotFound = 3,
    CredentialAlreadyExists = 4,
    CredentialNotFound = 5,
    // TODO: Add more errors
}
