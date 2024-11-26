import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  total: 0,
  cartItems: [],
  isloading: false
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase("cart/addItem", () => {});
    builder.addCase("cart/removeItem", () => {});
  }
});

export default cartSlice.reducer;
