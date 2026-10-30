import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("cart")) || [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const pizza = state.find((item) => item.id === action.payload.id);

      if (pizza) {
        pizza.quantity += 1;
      } else {
        state.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((pizza) => pizza.id !== action.payload);
    },

    changeQuantity: (state, action) => {
      const { id, amount } = action.payload;
      const pizza = state.find((item) => item.id === id);

      if (pizza) {
        if (pizza.quantity + amount <= 0) {
          return state.filter((item) => item.id !== id);
        }

        pizza.quantity += amount;
      }
    },
  },
});

export const { addToCart, removeFromCart, changeQuantity } = cartSlice.actions;

export default cartSlice.reducer;
