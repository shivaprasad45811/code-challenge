import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { PokemonListData } from "../../../../../packages/intefaces/pokemonListInterfaces";

interface ItemsState {
  data: PokemonListData[];
  loading: boolean;
  error: string | null;
}

const initialState: ItemsState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchItems = createAsyncThunk<PokemonListData[], string>(
  "items/fetch",
  async (api: string) => {
    const response = await fetch(api);
    if (!response.ok) {
      throw new Error(`Error Status: ${response.status}`);
    }
    const data = await response.json();
    return data.results.map((item: PokemonListData, index: number) => ({
      ...item,
      id: `${index}_${item.name}`,
    }));
  }
);

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    removeItem: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch items";
      });
  },
});

export const { removeItem } = itemsSlice.actions;
export default itemsSlice.reducer;
