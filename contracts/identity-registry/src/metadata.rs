// Credential metadata helpers

use soroban_sdk::{Map, String as SorobanString, Env};
use crate::errors::Error;

pub fn create_metadata(env: &Env) -> Map<SorobanString, SorobanString> {
    Map::new(env)
}

pub fn add_metadata(
    metadata: &mut Map<SorobanString, SorobanString>,
    key: SorobanString,
    value: SorobanString,
) -> Result<(), Error> {
    // TODO: Implement metadata addition
    Ok(())
}

pub fn get_metadata(
    metadata: &Map<SorobanString, SorobanString>,
    key: &SorobanString,
) -> Option<SorobanString> {
    metadata.get(key)
}
