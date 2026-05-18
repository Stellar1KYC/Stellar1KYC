// NFT metadata handling

use soroban_sdk::{Env, String as SorobanString, Map};

pub fn create_metadata(env: &Env) -> Map<SorobanString, SorobanString> {
    Map::new(env)
}

pub fn add_field(
    metadata: &mut Map<SorobanString, SorobanString>,
    key: SorobanString,
    value: SorobanString,
) {
    // TODO: Implement add_field
}

pub fn get_field(
    metadata: &Map<SorobanString, SorobanString>,
    key: &SorobanString,
) -> Option<SorobanString> {
    metadata.get(key)
}
