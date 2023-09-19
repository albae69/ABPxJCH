import { createSlice } from '@reduxjs/toolkit'

let initialState = {
  cart: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.cart.push(action.payload)
    },
  },
})

export const { addProduct } = cartSlice.actions

export default cartSlice.reducer
