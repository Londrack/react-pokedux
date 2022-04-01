import { PokemonCard } from "./PokemonCard";

export function PokemonList({ pokemons, key = 'home' }) {
    return (
        <>
            {pokemons.map((pokemon, i) =>
                <PokemonCard
                    pokemon={pokemon}
                    key={key + pokemon.order + i}
                />)}
        </>
    )
}

PokemonList.defaultProps  = {
    pokemons: [],
}
