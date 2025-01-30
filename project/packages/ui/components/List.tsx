import React from "react";
import { PokemonListData } from "../../intefaces/pokemonListInterfaces";
import PokemonItem from "./PokemonItem";
import "./List.css";

type PokemonProps = {
  pokemonList: PokemonListData[];
  handleDelete: (id: string) => {};
};

export const List: React.FC<PokemonProps> = ({ pokemonList, handleDelete }) => {
  return (
    <div className="pokemonlist-container">
      {pokemonList.map((item: PokemonListData) => (
        <PokemonItem
          pokemonData={item}
          handleDelete={handleDelete}
          key={item.id}
        />
      ))}
    </div>
  );
};
