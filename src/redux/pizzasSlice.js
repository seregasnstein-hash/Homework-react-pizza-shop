import { createSlice } from "@reduxjs/toolkit";
import { pizzas } from "../data/pizzas";

const pizzasSlice = createSlice({
  name: "pizzas",
  initialState: JSON.parse(localStorage.getItem("pizzas")) || pizzas,
  reducers: {
    addPizza: (state, action) => {
      state.push(action.payload);
    },
    removePizza: (state, action) => {
      const id = action.payload;
      return state.filter((pizza) => pizza.id !== id);
    },
    editPizza: (state, action) => {
      const pizza = action.payload;
      const index = state.findIndex((elem) => elem.id === pizza.id);
      if (index !== -1) {
        state[index] = pizza;
      }
    },
  },
});

export const { addPizza, removePizza, editPizza } = pizzasSlice.actions;

export default pizzasSlice.reducer;
