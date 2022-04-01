import {Helmet} from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getFavorites, setError, setFavoriteStorage, setListFavPokemon, setLoading, setPokemons } from "../actions";
import { useEffect, useState } from "react";
import { LoaderList } from "../components/Loaders/LoaderList";
import { PokemonList } from "../components/Home/PokemonList";
import { URL_api } from "../api/config";


export function Favorites() {
    const loading = useSelector(state => state.loading);
    const favList = useSelector(state => state.favList);
    const pokemonListFavs = useSelector(state => state.pokemonListFavs);
    const tempList = []
    // const [pokemonListFavs, setPokemonListFavs] = useState([]);
    // const pokemonListFavs = [];
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setLoading(true));
        async function fetchData(){
            await dispatch(getFavorites())
        }
        fetchData();
        Promise.all(favList.map(id => axios.get(`${URL_api}/pokemon/${id}`)))
        .then(res => res.map((data, e) => {
            tempList.push(data.data)
            tempList[e].favorite = true;
        }))
        .then(() => {
            dispatch(setListFavPokemon(tempList))
            dispatch(setFavoriteStorage({firstLoad:true}));
            dispatch(setLoading(false))
        })
        .catch(error => {
            dispatch(setError({message: 'Ocurrió un error', error}));
        })
    }, []);

    return (
        <div>
            <Helmet>
                <title>My Favorites - Pokedux</title>
            </Helmet>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {(pokemonListFavs.length > 0) && <PokemonList key="fav" pokemons={pokemonListFavs} />}
                {(loading) && <LoaderList /> }
            </div>
           { (pokemonListFavs.length === 0 && !loading) &&  <p>You don't have any favorite pokemon yet</p>}
        </div>
    )
}
