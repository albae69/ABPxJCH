import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'

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
      toast.success('Succesfully added item to cart')
    },
    removeProduct: (state, action) => {
      state.cart = state.cart.filter((item) => item.id != action.payload)
      toast.success('Succesfully remove item to cart')
    },
  },
})

export const { addProduct, removeProduct } = cartSlice.actions

export default cartSlice.reducer
