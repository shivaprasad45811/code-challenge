import { List } from "ui";
import { useEffect, useState } from "react";
import { PokemonListData } from "../../../packages/intefaces/pokemonListInterfaces";
const api = "https://pokeapi.co/api/v2/pokemon?limit=151";

const App = () => {
  const [pokemonList, setPokemonList] = useState<PokemonListData[]>([]);
  const fetchData = async () => {
    try {
      const response = await fetch(api);
      if (!response.ok) {
        throw new Error(`Error Status: ${response.status}`);
      } else {
        const data = await response.json();
        const modifiedData = data.results.map(
          (item: PokemonListData, index: number) => {
            return {
              ...item,
              id: `${index}_${item.name}`, // Generating ID for each element in an array.
            };
          }
        );
        setPokemonList(modifiedData);
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h1>Pokemon list:</h1>
      <List pokemonList={pokemonList}/>
    </>
  );
};

export default App;
