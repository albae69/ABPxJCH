import { Provider } from 'react-redux'
import { Analytics } from '@vercel/analytics/react'
import { Toaster } from 'react-hot-toast'
import { PersistGate } from 'redux-persist/integration/react'

import Router from './router'
import { store, persistor } from './store'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Toaster position='bottom-right' reverseOrder={false} />
        <Router />
      </PersistGate>
      <Analytics />
    </Provider>
  )
}

export default App
