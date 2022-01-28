import { useCallback, useEffect, useState } from 'react';

import request, { PokemonData, Pokemon } from './services/request';

import PokeCard from './components/PokeCard/PokeCard';
import Button from './components/Button/Button';

import icon from './assets/Icon.png';
import s from './App.module.scss';

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonData>();

  const getPokemons = useCallback(async () => {
    const randomOffset = Math.floor(Math.random() * (250 - 1) + 1);
    const { data } = await request.getPokemonsData(randomOffset);
    setPokemons(data.results);
  }, []);

  useEffect(() => {
    getPokemons();
  }, []);

  const handleChipClick = useCallback(async (url: string) => {
    const { data } = await request.getSelectedPokemon(url);

    setSelectedPokemon(data);
  }, []);

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
          {pokemons?.map(({ name, url }) => {
            return <Button onChipClick={handleChipClick} name={name} url={url} key={url} />;
          })}
        </div>
        {selectedPokemon && (
          <div className={s.card}>
            <PokeCard activePokemon={selectedPokemon} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
