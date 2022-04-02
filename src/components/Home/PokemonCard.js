/* eslint-disable jsx-a11y/anchor-is-valid */
import { PokeCardBox } from "./PokeCardBox";
import { PokeFav } from "../PokeFav";
import { PokeTypeLabel } from "../PokeTypeLabel";
import { Link } from "react-router-dom";
import { BigImg } from "../Images/BigImg";
import { NAME_SITE } from "../../api/config";

export function PokemonCard({pokemon}) {

    const pokemonId = pokemon.id.toString();

    if(pokemon.id < 1000)
        return (
            <PokeCardBox key={pokemonId}>
                <PokeFav fav={pokemon.favorite} pokemonId={pokemon.id}/>
                <Link to={`${NAME_SITE}/pokemon/${pokemonId}`} className=" cursor-pointer">
                    <BigImg
                        className="mx-auto hover:scale-110 transition-transform"
                        id={pokemon.id} alt={pokemon.name}
                    />
                </Link>
                <h4 className=" font-pixelade text-4xl capitalize cursor-default">{pokemon.name}</h4>
                <div className="flex gap-2">
                    {pokemon.types.map((type, e) =>
                        <PokeTypeLabel type={type.type.name} key={`${pokemon.name}-${e}`} />)}
                </div>
            </PokeCardBox>
        )
    return <></>
}
