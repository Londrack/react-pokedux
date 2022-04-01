import { actionTypes } from "./types";

export const setPokemons = (payload) => ({
    type: actionTypes.setPokemons,
    payload,
})

export const setNextPage = (payload) => ({
    type: actionTypes.setNextPage,
    payload,
})

export const setPrevPage = (payload) => ({
    type: actionTypes.setPrevPage,
    payload,
})

export const setLoading = (payload) => ({
    type: actionTypes.setLoading,
    payload,
})

export const fetchPokemons = () => ({
    type: actionTypes.fetchPokemons,
})

export const setError = (payload) => ({
    type: actionTypes.setError,
    payload,
});

export const clearError = (payload) => ({
    type: actionTypes.clearError,
    payload,
});

export const setFavorite = (payload) => ({
    type: actionTypes.setFavorite,
    payload,
});

export const setFavoriteStorage = (payload) => ({
    type: actionTypes.setFavoriteStorage,
    payload,
});


export const getPokemonDetail = (payload) => ({
    type: actionTypes.getPokemonDetail,
    payload,
});


export const getFavorites = (payload) => ({
    type: actionTypes.getFavorites,
    payload,
});

export const setListFavPokemon = (payload) => ({
    type: actionTypes.setListFavPokemon,
    payload,
});

