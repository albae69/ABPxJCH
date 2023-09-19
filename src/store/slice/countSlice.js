import { createSlice } from '@reduxjs/toolkit'

let initialState = {
  value: 0,
}

const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    inc: (state) => {
      state.value++
    },
  },
})

export const { inc, dec } = countSlice.actions

export default countSlice.reducer
