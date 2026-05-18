// Custom contract errors for Identity NFT

use soroban_sdk::contracterror;

#[contracterror]
#[derive(Copy, Clone, Debug, Eq, PartialEq)]
pub enum Error {
    Unauthorized = 1,
    TokenNotFound = 2,
    TokenAlreadyMinted = 3,
    NotOwner = 4,
    // TODO: Add more errors
}
