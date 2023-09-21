import { createContext, useReducer } from 'react'

const initialState = {
  count: 0,
}

export const CountContext = createContext(null)

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 }
    case 'decrement':
      return { ...state, count: state.count - 1 }
    case 'amount':
      return { ...state, count: state.count + action.payload }
    default:
      return state
  }
}

const CountProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <CountContext.Provider value={{ state, dispatch }}>
      {children}
    </CountContext.Provider>
  )
}

export default CountProvider
