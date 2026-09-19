import { configureStore, createSlice } from "@reduxjs/toolkit";

const laptopSlice = createSlice({
  name: "laptop",

  initialState: {
    quantity: 1
  },

  reducers: {
    increase: (state) => {
      state.quantity++;
    },

    decrease: (state) => {
      if (state.quantity > 1) {
        state.quantity--;
      }
    },

    reset: (state) => {
      state.quantity = 1;
    }
  }
});

// Actions
export const { increase, decrease, reset } =
  laptopSlice.actions;

// Store
const store = configureStore({
  reducer: {
    laptop: laptopSlice.reducer
  }
});

export default store;