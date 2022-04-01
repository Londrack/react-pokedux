import { URL_imgs } from "../../api/config";

export function BigImg({id, alt, className, size = 'small'}) {
    const pokemonId = id.toString();
    const pokemonIdProcessed = (pokemonId.length === 1)
        ? `00${pokemonId}`
        : (pokemonId.length === 2)
            ? `0${pokemonId}`
            : pokemonId
    const imgSize = (size === 'small') ? 'detail' : 'full';

    if(id === '')
        return <span></span>

    return (
        <img src={`${URL_imgs}/${imgSize}/${pokemonIdProcessed}.png`} alt={alt} className={className} />
    )
}
