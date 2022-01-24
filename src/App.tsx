import { useEffect, useState } from 'react';

import request from './services/request';

import Chip from '@mui/material/Chip';
import PokeCard from './components/PokeCard/PokeCard';

import icon from './assets/Icon.png';
import s from './App.module.scss';

interface Src {
  front_default: string;
}
export interface PokemonData {
  name: string;
  id: number;
  base_experience: number;
  height: number;
  moves?: object[];
  sprites?: Src;
}

function App() {
  let [pokemons, setPokemons] = useState<any[]>([]);
  let [selectedPokemon, setSelectedPokemon] = useState<PokemonData>();

  useEffect(() => {
    const randomOffset = Math.floor(Math.random() * (250 - 1) + 1);
    request.getPokemons(randomOffset).then((res) => {
      setPokemons(res.data.results);
    });
  }, []);
  console.log('pokemons: ', pokemons);

  const handleChipClick = (url: string) => {
    request.getSelectedPokemon(url).then((res) => {
      setSelectedPokemon(res.data);
    });
  };
  console.log('selectedPokemon: ', selectedPokemon?.name);

  return (
    <div className={s.container}>
      <header className={s.header}>
        <div className={s.title}>покемоны api</div>
        <div className={s.hint}>
          <img src={icon} alt='click' />
          Нажмите на нужного покемона
        </div>
      </header>
      <main className={s.main}>
        <div className={s.pokemonButtons}>
          {pokemons &&
            pokemons.map((pokemon, index) => {
              return (
                <Chip
                  clickable
                  label={pokemon.name}
                  color='primary'
                  onClick={() => {
                    handleChipClick(pokemon.url);
                  }}
                  key={index}
                  sx={{ boxSizing: 'border-box', fontSize: '20px', fontFamily: '"Raleway", sans-serif', margin: '3px 5px', padding: '20px' }}
                />
              );
            })}
        </div>
        <div className={s.card}>{selectedPokemon && <PokeCard activePokemon={selectedPokemon} />}</div>
      </main>
    </div>
  );
}

export default App;
