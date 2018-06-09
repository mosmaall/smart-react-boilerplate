import React, { Component } from 'react'
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

export default App
