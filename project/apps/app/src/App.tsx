import { List } from 'ui'
import { useEffect, useState } from 'react'
import { PokemonPros } from '../../../packages/intefaces/pokemonListInterfaces'
const api = "https://pokeapi.co/api/v2/pokemon?limit=151"

const App = () => {
  const [pokeonList, setPokemonList] = useState<PokemonPros>([]);
  const fetchData = async() => {
      try {
        const response = await fetch(api);
        if (!response.ok) {
          throw new Error(`Error Status: ${response.status}`);
        }
        else {
          const data = await response.json();
          const modifiedData = data.results.map((item : PokemonPros , index : number) => {
            return {
              ...modifiedData,
              id : `${index}_${item.name}` // Generating ID for each element in an array.
            }
          })
          setPokemonList(data.modifiedData);
        }
      } catch(error) {
        console.error("Error", error);
      }
  }

  useEffect(() => {
    fetchData();
  }, [])
  return (
  <>
    <h1>Pokemon list:</h1>
    <List pokeonList/>
  </>
  )
}

export default App
