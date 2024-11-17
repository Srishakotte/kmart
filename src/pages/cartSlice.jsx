import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, num } = action.payload;
      const existingProduct = state.cartList.find((item) => item.id === product.id);

      console.log("Adding product:", product, "Quantity:", num); // Add logging here

      if (existingProduct) {
        existingProduct.qty += num; // If product exists, increase the quantity
      } else {
        state.cartList.push({ ...product, qty: num }); // If not, add new product with quantity
      }
    },
    decreaseQty: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cartList.find((item) => item.id === product.id);

      if (existingProduct && existingProduct.qty > 1) {
        existingProduct.qty -= 1;
      }
    },
    deleteProduct: (state, action) => {
      const productId = action.payload.id;
      state.cartList = state.cartList.filter((item) => item.id !== productId);
    },
  },
});

export const { addToCart, decreaseQty, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;
