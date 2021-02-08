import POKEMONS from '../shared/data/pokemon';
import { v1 as uuidv1 } from 'uuid';

export const getPokemon = () => {
  const random = Math.floor(Math.random() * POKEMONS.length);
  return { ...POKEMONS[random], id: uuidv1() };
};