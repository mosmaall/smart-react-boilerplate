import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { Provider as StoreProvider } from 'mobx-react'
import Routes from './Routes'
import { getInstanceStores } from './stores'

class App extends Component {
  render() {
    return (
      <StoreProvider {...getInstanceStores()}>
        <Routes />
      </StoreProvider>
    )
  }
}

export default hot(module)(App)
