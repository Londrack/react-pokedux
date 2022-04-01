import { actionTypes } from "../actions/types";
import { storage_favList } from "../api/config";

const initialState = {
    list: [],
    favList: [],
    pokemonListFavs: [],
    nextPage: '',
    prevPage: '',
    error: '',
    loading: true,
}

export const pokemonReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case actionTypes.setPokemons: return { ...state, list: payload }
        case actionTypes.setListFavPokemon: return { ...state, pokemonListFavs: payload }
        case actionTypes.setNextPage: return { ...state, nextPage: payload }
        case actionTypes.setPrevPage: return { ...state, prevPage: payload }
        case actionTypes.setLoading: return { ...state, loading: payload }
        case actionTypes.setError: return { ...state, error: payload?.message }
        case actionTypes.clearError: return { ...state, error: '' }

        case actionTypes.setFavoriteStorage:
            const newPokemonList = [...state.list];
            const newListFavsPokemons = [...state.pokemonListFavs];
            const pokemonId = payload.pokemonId;

            const elementPos = newPokemonList.findIndex(obj => obj.id === pokemonId);
            const elementPosFavs = newListFavsPokemons.findIndex(obj => obj.id === pokemonId);

            const storageFavList = localStorage.getItem(storage_favList);
            const newStorageFavList = checkStorage(storageFavList, []);

            if(pokemonId) {
                const indexPokeFav = newStorageFavList.indexOf(pokemonId);
                if (indexPokeFav === -1){
                    newStorageFavList.push(pokemonId);
                    newPokemonList[elementPos].favorite = true;
                }else{
                    newStorageFavList.splice(indexPokeFav, 1);
                    newPokemonList[elementPos].favorite = false;
                    if (elementPosFavs >= 0) newListFavsPokemons.splice(elementPosFavs, 1)
                }
            }
            localStorage.setItem(storage_favList, JSON.stringify(newStorageFavList));
            if(payload.firstLoad)
                newStorageFavList.map(fav => {
                    const favPos = newPokemonList.findIndex(obj => obj.id === fav);
                    if(favPos !== -1) newPokemonList[favPos].favorite = true;
                })
            return {...state, list: newPokemonList, favList: newStorageFavList, pokemonListFavs: newListFavsPokemons}

        case actionTypes.getFavorites:
            return {...state, favList: checkStorage(localStorage.getItem(storage_favList), [])}

        default:
            return {...state};
    }
}

const checkStorage = (storage, initialValue) => storage ? JSON.parse(storage) : initialValue;