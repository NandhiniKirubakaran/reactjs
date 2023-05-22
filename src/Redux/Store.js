import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Reducers/cart.slice";
import productsSlice from "./Reducers/products.slice";
import counterSlice from "./Reducers/counter.slice";



export default configureStore({
    reducer: {
      cart: cartSlice,
      product: productsSlice,
      counter: counterSlice,
    },
});