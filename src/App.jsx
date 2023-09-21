import { Provider } from 'react-redux'
import { Analytics } from '@vercel/analytics/react'

import Router from './router'
import store from './store'

const App = () => {
  return (
    <Provider store={store}>
      <Router />
      <Analytics />
    </Provider>
  )
}

export default App
