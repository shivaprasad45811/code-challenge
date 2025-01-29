import React from 'react';
import {PokemonListData} from '../../intefaces/pokemonListInterfaces'
import PokemonItem from './PokemonItem'
// Define the type for props

type PokemonProps = {
   pokemonList : PokemonListData[]
}

export const List: React.FC<PokemonProps> = ({ pokemonList }) => {
  return (
    <div>
      {
        pokemonList.map((item: PokemonListData) => <PokemonItem pokemonData ={item}/>)
      }
    </div>
  )
};