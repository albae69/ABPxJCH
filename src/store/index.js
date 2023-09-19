import { configureStore } from '@reduxjs/toolkit'
import countReducer from './slice/countSlice'
import cartReducer from './slice/cartSlice'

const store = configureStore({
  reducer: {
    count: countReducer,
    cart: cartReducer,
  },
})

export default store
