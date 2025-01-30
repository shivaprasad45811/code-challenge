import React from "react";
import { PokemonListData } from "../../intefaces/pokemonListInterfaces";
import "./PokemonItem.css";

type PokemonItemProps = {
  pokemonData: PokemonListData;
  handleDelete: (id: string) => {};
};
const PokemonItem: React.FC<PokemonItemProps> = ({
  pokemonData,
  handleDelete,
}) => {
  return (
    <div className="pokemon-item" key={pokemonData.id}>
      <h3 className="pokemon-title">{pokemonData.name}</h3>
      <button onClick={() => handleDelete(pokemonData.id)}>Delete item</button>
    </div>
  );
};

export default PokemonItem;
