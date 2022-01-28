import axios, { AxiosInstance } from 'axios';

export type PokemonData = {
  name: string;
  id?: number;
  base_experience: number;
  height: number;
  moves?: object[];
  sprites?: {
    front_default: string;
  };
};

export type Pokemon = {
  name: string;
  url: string;
};

type PokemonsResponse = {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
};

class Request {
  instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: 'https://pokeapi.co/api/v2/',
      withCredentials: false,
    });
  }

  getPokemonsData = async (count: number) => {
    return await this.instance.get<PokemonsResponse>(`pokemon?limit=10&offset=${count}`);
  };

  getSelectedPokemon = async (url: string) => {
    return await this.instance.get<PokemonData>(`${url}`);
  };
}

const request = new Request();

export default request;
