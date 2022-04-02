import axios from "axios";

export const NAME_SITE = '/react-pokedux/';
export const URL_api = 'https://pokeapi.co/api/v2';
export const URL_imgs = 'https://assets.pokemon.com/assets/cms2/img/pokedex/';
// export const URL_detail = 'https://pokeapi.glitch.me/v1';

export const axiosInstanceList = axios.create({ baseURL: URL_api })
// export const axiosInstanceDetail = axios.create({ baseURL: URL_detail })

export const storage_favList = 'FAV_LIST_V1';
export const storage_next = 'NEXT_LIST_V1'