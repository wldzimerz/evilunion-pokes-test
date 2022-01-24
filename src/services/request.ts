import axios from 'axios';

class Request {
  host: string;
  options: object;

  constructor() {
    this.host = 'https://pokeapi.co/api/v2/';
    this.options = { withCredentials: false };
  }

  getPokemons = async (count: number) => {
    return await axios.get(`${this.host}pokemon?limit=10&offset=${count}`, this.options);
  };

  getSelectedPokemon = async (url: string) => {
    return await axios.get(`${url}`);
  };
}

const request = new Request();

export default request;
