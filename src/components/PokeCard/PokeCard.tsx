import { PokemonData } from '../../services/request';

import s from './PokeCard.module.scss';

type Props = {
  activePokemon: PokemonData;
};

const PokeCard = ({ activePokemon }: Props) => {
  return (
    <div className={s.wrapper}>
      <div className={s.name}>{activePokemon?.name}</div>
      <div className={s.photo}>
        <img src={activePokemon?.sprites?.front_default} alt='pokemon_image' />
      </div>
      <div className={s.spec}>
        <p>{`Снялся в ${activePokemon?.moves?.length} сериях`}</p>
        <p>{`ID: ${activePokemon?.id}`}</p>
        <p>{`height: ${activePokemon?.height}`}</p>
        <p>{`attack: ${activePokemon?.base_experience}`}</p>
      </div>
    </div>
  );
};

export default PokeCard;
