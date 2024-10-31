import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showCart: false,
  items: [],
  productsQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload.item);
      state.productsQuantity++;
    },
    increaseItemQt(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      existingItem.quantity++;
      existingItem.totals += existingItem.price;
      state.productsQuantity++;
    },
    decreaseItemQt(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      existingItem.quantity--;
      existingItem.totals -= existingItem.price;
      state.productsQuantity--;
    },
    removeItem(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      state.items.splice(existingItem, 1);
      existingItem.totals -= existingItem.price;
      state.productsQuantity--;
    },
    toggleShowCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
