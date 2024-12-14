import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      // state.items.pop();
      state.items = state.items.filter(item => item.card?.info?.id !== action.payload?.card?.info?.id)

    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer; // here we will not write reducers but we will write reducer because redux has put it all together for exporting
