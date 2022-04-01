// import { connect } from 'react-redux';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPokemonsList } from "../api/getPokemonsList";
import { PokemonList } from "../components/Home/PokemonList";
import { setPokemons, setError, setNextPage, setLoading, setFavoriteStorage, getPokemonDetail } from '../actions';
import { URL_api } from "../api/config";
import axios from "axios";
import { LoaderList } from "../components/Loaders/LoaderList";
import { Helmet } from "react-helmet";

export function Home() {
    // const maxPokemons = 898;
    const initialUrl = `${URL_api}/pokemon?limit=60`;
    const dispatch = useDispatch();
    const list = useSelector(state => state.list) || [];
    const nextPage = useSelector(state => state.nextPage);
    const loading = useSelector(state => state.loading);

    useEffect(() => {
      if(list.length === 0) onGetList(initialUrl, true);
    }, []);

    const onLoadMore = () => {
      onGetList(nextPage);
    }

    const onGetList = (url, firstLoad = false) => {
      dispatch(setLoading(true));
      getPokemonsList(url)
        .then(res => {
          dispatch(setNextPage(res.data.next))
          // if(res.data.prev) dispatch(setPrevPage(res.data.prev))
          const pokemonList = res.data.results;
          return Promise.all(pokemonList.map(pokemon => axios.get(pokemon.url)))
        })
        .then(pokemonResponse => {
          const pokeData = pokemonResponse.map(response => response.data);
          const allPokeData = !firstLoad ? list.concat(...pokeData) : pokeData;
          dispatch(setPokemons(allPokeData));
          dispatch(setLoading(false));
          dispatch(setFavoriteStorage({firstLoad:true}));
        })
        .catch(error => {
          dispatch(setError({message: 'Ocurrió un error', error}));
        })
    }

    return (
        <>
            <Helmet>
                <title>Pokedux</title>
            </Helmet>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <PokemonList pokemons={list} />
                {loading && <LoaderList />}
            </div>
            { (!loading && nextPage) &&
              <div className="flex justify-center mt-3">
                  <button onClick={onLoadMore}
                    className="font-pixelade text-white
                    bg-poke-purple-200 border-2 px-4 border-x-0 rounded-lg
                    border-t-poke-purple-100 border-b-poke-grey"
                  >Show me more</button>
              </div> }
        </>
    )
}
