import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "cart",
  initialState: {
    notification: null,
  },
  reducers: {
    showNotification(state, action) {
      const { status, title, message } = action.payload;
      state.notification = {
        status,
        title,
        message,
      };
    },
    resetNotification(state) {
      state.notification = null;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
