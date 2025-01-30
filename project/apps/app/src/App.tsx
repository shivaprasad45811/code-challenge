import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { fetchItems, removeItem } from "./store/slices/pokemonslice";
import { List } from "ui";

const api = "https://pokeapi.co/api/v2/pokemon?limit=151";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.items
  );

  useEffect(() => {
    dispatch(fetchItems(api));
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleDeleteItem = (id: string) => {
    dispatch(removeItem(id));
  };
  return (
    <div>
      <h1>Pokemon List:</h1>
      <List pokemonList={data} handleDelete={handleDeleteItem} />
    </div>
  );
};

export default App;
