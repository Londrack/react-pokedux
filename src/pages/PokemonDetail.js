import Helmet from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BigImg } from "../components/Images/BigImg";
import { useEffect, useState } from "react";
import { setLoading } from "../actions";
import { URL_api } from "../api/config";
import axios from "axios";
import { LoaderDetail } from "../components/Loaders/LoaderDetail";
import { ImgBox } from "../components/Images/ImgBox";
import { PokeTypeLabel } from "../components/PokeTypeLabel";
import { StatsRadar } from "../components/StatsRadar";
import { PokeFav } from "../components/PokeFav";

export function PokemonDetail() {
    const dispatch = useDispatch();
    let { id } = useParams();
    id = parseInt(id);

    const list = useSelector(state => state.list) || [];
    const loading = useSelector(state => state.loading);
    const [pokemon, setPokemon] = useState({
        name: '',
        id: '',
        sprites: {},
        types:[],
        stats:[]
    });
    const chartData = {
        labels: {},
        data: [{
            data: {},
            meta: { color: '#674D9A' }
        }],
    }
    let pokemonName = '';

    const elementPos = list.findIndex(obj => obj.id === id);

    useEffect(() => {
        dispatch(setLoading(true));
        if (elementPos !== -1) {
            setPokemon(list[elementPos])
        }
        else {
            axios.get(`${URL_api}/pokemon/${id}`)
                .then(res => {
                    setPokemon(res.data);
                })
        }
        dispatch(setLoading(false));
    }, []);


    if(pokemon.name !== '' && loading === false) {
        pokemonName = pokemon.name.toUpperCase();
        const labels = pokemon.stats.map(data => data.stat.name);
        const data = pokemon.stats.map(data => data.base_stat / 100);

        labels.forEach((key, i) => {
            chartData.data[0].data[key] = data[i];
            chartData.labels[key] = key.toUpperCase()
        })
        return (
            <>
            <Helmet>
                <title>{pokemonName} - Pokedux</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                <div>
                    <ImgBox>
                        <h2 className=" font-pixellari text-4xl text-right">{pokemonName}</h2>
                        <BigImg id={pokemon.id} alt={pokemon.name} size="big" />
                        <PokeFav fav={pokemon.favorite} pokemonId={pokemon.id} position="bottom"/>
                    </ImgBox>
                    <div className="md:grid grid-cols-4 gap-2 mt-2 hidden ">
                        {
                            Object.entries(pokemon.sprites).slice(0).reverse().map(sprite =>
                                typeof sprite[1] === 'string' &&
                                    <ImgBox key={`${sprite[0]}`} type={sprite[0].split('_')[1] + sprite[0].split('_')[2]}>
                                        <img src={sprite[1]}
                                        alt={sprite[0]}
                                        title={sprite[0]} />
                                    </ImgBox>
                            )
                        }
                    </div>
                </div>
                <div>
                    <div className="flex gap-2">
                        {pokemon?.types.map((type, e) =>
                            <PokeTypeLabel type={type.type.name} key={`${pokemon.name}-${e}`} />)}
                    </div>
                    <StatsRadar
                        data={chartData.data}
                        captions ={chartData.labels}
                    />
                </div>
            </div>
            </>
        )
    }

    return <LoaderDetail />
}
