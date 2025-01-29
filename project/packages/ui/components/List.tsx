import React from 'react';
import {PokemonListData} from '../../intefaces/pokemonListInterfaces'
import PokemonItem from './PokemonItem'
import './List.css'
// Define the type for props

type PokemonProps = {
   pokemonList : PokemonListData[]
}

export const List: React.FC<PokemonProps> = ({ pokemonList }) => {
  return (
    <div className="pokemonlist-container">
      {
        pokemonList.map((item: PokemonListData) => <PokemonItem pokemonData ={item}/>)
      }
    </div>
  )
};