import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Navbar from './Pages/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Checkout from './Pages/Checkout/Checkout'

import { Provider } from 'react-redux';

import { store, persistor } from './Redux/Store'
import { PersistGate } from 'redux-persist/integration/react'

const Routes = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route component={Home} path='/' exact />
            <Route component={Checkout} path='/checkout' />
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default Routes