import { Provider } from 'react-redux'
import { Analytics } from '@vercel/analytics/react'

import Router from './router'
import store from './store'
// import CountProvider from './store/count'

const App = () => {
  return (
    // <CountProvider>
    <Provider store={store}>
      <Router />
      <Analytics />
    </Provider>
    // </CountProvider>
  )
}

export default App
