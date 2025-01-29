import React from 'react';
import {PokemonListData} from '../../intefaces/pokemonListInterfaces'
import './PokemonItem.css';
// Define the type for props

type PokemonItemProps = {
    pokemonData :PokemonListData
}
const PokemonItem: React.FC<PokemonItemProps> = ({ pokemonData }) => {
    return (
        <div className='pokemon-item'>
            <h3 className="pokemon-title">{pokemonData.name}</h3>
        </div>
    )
};

export default PokemonItem;