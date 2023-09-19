import { createContext, useReducer } from 'react'

let initialState = {
  isLogin: false,
  token: null,
}

const AuthContext = createContext(null)

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isLogin: action.payload }
    case 'TOKEN':
      return { ...state, token: action.payload }
    default:
      return state
  }
}

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(initialState, reducer)
  return (
    <AuthContext.Provider value={state}>
      <AuthContext.Provider value={dispatch}>{children}</AuthContext.Provider>
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
