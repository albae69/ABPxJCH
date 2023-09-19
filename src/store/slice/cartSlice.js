import { createSlice } from '@reduxjs/toolkit'

let initialState = {
  cart: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.cart.find((item) => item.id === action.payload.id)
        ? null
        : state.cart.push(action.payload)
    },
    removeProduct: (state, action) => {
      state.cart = state.cart.filter((item) => item.id != action.payload)
    },
  },
})

export const { addProduct, removeProduct } = cartSlice.actions

export default cartSlice.reducer
