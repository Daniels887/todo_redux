import React from 'react'
import Home from './components/pages/Home'
import GlobalStyle from './styles/global'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Home />
        </PersistGate>
      </Provider>
    </>
  )
}

export default App
