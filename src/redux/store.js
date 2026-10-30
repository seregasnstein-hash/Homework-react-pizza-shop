import { configureStore } from "@reduxjs/toolkit";
import pizzasReducer from "./pizzasSlice";
import cartReducer from "./cartSlice";



export const store = configureStore({
  reducer: {
    pizzas: pizzasReducer,
    cart: cartReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("pizzas", JSON.stringify(state.pizzas));
  localStorage.setItem("cart", JSON.stringify(state.cart));
});