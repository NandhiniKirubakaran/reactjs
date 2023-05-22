import { createSlice } from "@reduxjs/toolkit";

export const Product = createSlice({
  name: "product",
  initialState: {
    items: [{
        id: 1,
        model: "OnePlus 9 5G",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcN46rKgefV9Li5_jwcMzNUsWeMmiD3RCTKQ&usqp=CAU",
        company: "Oneplus",
        price: "₹35,299"
        },
        {
          id: 2,
          model: "Iphone 13 mini",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB6f7SUutbWilVmrmQRMJV3Oxdvudg28eHfmXcZKk8zreV4SfhTwskSWswsBvG8oP5Ugc&usqp=CAU",
          company: "Apple",
          price: "₹89,999"
        },
        {
          id: 3,
          model: "Samsung s21 ultra",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlzoNgrjnbEkYZxzcTBCEYAVydFavA_qllr-d2ODf1ezGV4gxTUupZ-YVTYJdrMZK18Js&usqp=CAU",
          company: "Samsung",
          price: "₹55,000"
        },
        {
          id: 4,
          model: "Xiomi mi 11",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-DffaWjYjh-zXitjdO6NIq9TVemX8sU--N2P5qm5ZPamFJvncLXFZrHNv-m7Q6A6vGTI&usqp=CAU",
          company: "Xiomi",
          price: "₹28,099"
        }],
  },
  reducers: {
    addItemToCart: (state, action) => {
      const product = action.payload;
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // return state.items
      state.items.push(product);
    },
    removeProduct: (state, action) => {
      state.value -= 1;
    },
    incrementByQuantity: (state, action) => {
      state.value -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addItemToCart,
  removeProduct,
  incrementByQuantity,
} = Product.actions;

export default Product.reducer;