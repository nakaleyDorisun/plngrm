import { IBeers, beers } from "./../../data/data";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

interface IBeersState {
  beers: IBeers[];
  modifiedBeers: IBeers[];
  checkedBeer: string[];
  isMatch: boolean;
}

const initialState: IBeersState = {
  beers: [],
  modifiedBeers: [],
  checkedBeer: [],
  isMatch: true,
};

const beersSlice = createSlice({
  name: "beers",
  initialState,

  reducers: {
    isInStockChange: (state, action: PayloadAction<string>) => {
      state.beers.map((beer) => {
        if (beer.id === action.payload) {
          beer.isInStock = !beer.isInStock;
        } else beer;
      });
    },
    refreshInStock: (state) => {
      const filteredBeers = state.beers.filter((b) => b.isInStock);
      state.beers = filteredBeers;
      state.modifiedBeers = filteredBeers;
    },
    start: (state) => {
      if (!state.beers.length) state.beers = beers;
    },
    addBeer: (state, action: PayloadAction<string>) => {
      const newBeer = { id: uuid(), title: action.payload, isInStock: true };
      state.beers.push(newBeer);
      state.modifiedBeers.push(newBeer);
    },
    filterBeers: (state, action: PayloadAction<string>) => {
      const query = action.payload;
      if (query) {
        const filterBeers = state.beers.filter((beer) =>
          beer.title.includes(query)
        );
        state.isMatch = filterBeers.length > 0;
        state.beers = filterBeers.length > 0 ? filterBeers : state.beers;
      } else {
        state.isMatch = true;
        state.beers = state.modifiedBeers.length ? state.modifiedBeers : beers;
      }
    },
    setCheckedBeer: (state, action: PayloadAction<string>) => {
      state.checkedBeer = [action.payload];
    },
  },
});

export const {
  isInStockChange,
  refreshInStock,
  start,
  addBeer,
  filterBeers,
  setCheckedBeer,
} = beersSlice.actions;

export const reducerBeers = beersSlice.reducer;
