import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./pages/cartSlice"; // Adjust the path if needed

const store = configureStore({
  reducer: {
    cart: cartReducer, // Add your cart reducer here
  },
});

export default store;
