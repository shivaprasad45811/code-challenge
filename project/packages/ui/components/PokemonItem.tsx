import React from 'react';
import {PokemonListData} from '../../intefaces/pokemonListInterfaces'
// Define the type for props

type PokemonItemProps = {
    pokemonData :PokemonListData
}
const PokemonItem: React.FC<PokemonItemProps> = ({ pokemonData }) => {
    return (
        <div>
            <h1>{pokemonData.name}</h1>
            <p>{pokemonData.url}</p>
        </div>
    )
};

export default PokemonItem;