/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  products: [] as any,
  selectedItems: 0,
  totalPrice: 0,
  tax: 0,
  taxRate: 0.1,
  grandTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.products.find(
        (product: any) => product._id === action.payload._id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }

      state.selectedItems = selectSelectedItems(state);
      state.totalPrice = selectTotalPrice(state);
      state.tax = selectTax(state);
      state.grandTotal = selectGrandTotal(state);
    },

    updateQuantity: (state, action) => {
      const product = state.products.find(
        (product: any) => product._id === action.payload.id
      );

      if (product) {
        if (action.payload.type === "increment") {
          product.quantity += 1;
        } else if (action.payload.type === "decrement" && product.quantity > 1) {
          product.quantity -= 1;
        }
      }

      state.products = state.products.filter(
        (product: any) => product.quantity > 0
      );

      state.selectedItems = selectSelectedItems(state);
      state.totalPrice = selectTotalPrice(state);
      state.tax = selectTax(state);
      state.grandTotal = selectGrandTotal(state);
    },

    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product: { _id: any }) => product._id !== action.payload.id
      );

      state.selectedItems = selectSelectedItems(state);
      state.totalPrice = selectTotalPrice(state);
      state.tax = selectTax(state);
      state.grandTotal = selectGrandTotal(state);
    },

    clearCart: (state) => {
      state.products = [];
      state.selectedItems = 0;
      state.totalPrice = 0;
      state.tax = 0;
      state.grandTotal = 0;
    },
  },
});


// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const isExist = state.products.find(
//         (product: any) => product._id === action.payload.id
//       );
//       if (!isExist) {
//         state.products.push({ ...action.payload, quantity: 1 });
//       }

//       state.selectedItems = selectSelectedItems(state);
//       state.totalPrice = selectTotalPrice(state);
//       state.tax = selectTax(state);
//       state.grandTotal = selectGrandTotal(state);
//     },

//     // addToCart: (state, action) => {
//     //   const isExist = state.products.find(
//     //     (item) => item._id === action.payload._id
//     //   );
//     //   if (!isExist) {
//     //     state.products.push({ ...action.payload, quantity: 1 });
//     //   }
//     //   state.selectedItems = selectedItemsFun(state);
//     //   state.totalPrice = selectedItemsTotalPrice(state);
//     //   state.tax = selectedItemsTax(state);
//     //   state.grandTotal = selectedItemsGrandTotal(state);
//     // },

//     updateQuantity: (state: any, action) => {
//       const products = state.products.map((product: any) => {
//         if (product._id === action.payload.id) {
//           if (action.payload.type === "increment") {
//             product.quantity += 1;
//           } else if (action.payload.type === "decrement") {
//             product.quantity -= 1;
//           }
//         }
//         return product;
//       });
//       state.products = products.filter((product: any) => product.quantity > 0 );

//       state.selectedItems = selectSelectedItems(state);
//       state.totalPrice = selectTotalPrice(state);
//       state.tax = selectTax(state);
//       state.grandTotal = selectGrandTotal(state);
//     },
//     removeProduct: (state, action) => {
//       state.products = state.products.filter(
//         (product: { _id: any; }) => product._id !== action.payload.id
//       );
//       state.selectedItems = selectSelectedItems(state);
//       state.totalPrice = selectTotalPrice(state);
//       state.tax = selectTax(state);
//       state.grandTotal = selectGrandTotal(state);
//     },
//     clearCart: (state) => {
//       state.products = [];
//       state.selectedItems = 0;
//       state.totalPrice = 0;
//       state.tax = 0;
//       state.grandTotal = 0;
//     },
//   },
// });

export const selectSelectedItems = (state: any) =>
  state.products.reduce((total: number, product: any) => {
    return Number(total + product.quantity);
  }, 0);

export const selectTotalPrice = (state: any) =>
  state.products.reduce((total: number, product: any) => {
    return Number(total + product.quantity * product.price);
  }, 0);

export const selectTax = (state: any) =>
  selectTotalPrice(state) * state.taxRate;

export const selectGrandTotal = (state: any) => {
  return selectTotalPrice(state) + selectTotalPrice(state) * state.taxRate;
};

export const { addToCart, updateQuantity, removeProduct, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;