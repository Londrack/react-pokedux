import axios from "axios";
import { URL_api } from "./config";

// import { axiosInstanceList } from "./config";
// export const getPokemonsList = (limit, offset = 0) => axiosInstanceList.get(`/pokemon?limit=${limit}&offset=${offset}`);

export const getPokemonsList = url => axios.get(url);

export const getPokemonDetail = (list) => Promise.all(list.map(id => {
        axios.get(`${URL_api}/pokemon/${id}`)
    }
))