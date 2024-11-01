import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showCart: false,
  items: [],
  productsQuantity: 0,
  changed: false
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload.item);
      state.productsQuantity++;
      state.changed = true;
    },
    increaseItemQt(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      existingItem.quantity++;
      existingItem.totals += existingItem.price;
      state.productsQuantity++;
      state.changed = true;
    },
    decreaseItemQt(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      existingItem.quantity--;
      existingItem.totals -= existingItem.price;
      state.productsQuantity--;
      state.changed = true;
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.productsQuantity--;
      state.changed = true;
    },
    toggleShowCart(state) {
      state.showCart = !state.showCart;
    },
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.productsQuantity = action.payload.productsQuantity
        ? action.payload.productsQuantity
        : 0;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
