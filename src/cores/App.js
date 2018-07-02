import React, { Component } from 'react'
import Routes from './routes'
import { Provider } from 'react-redux'
import { configureStore } from './store'

class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <Routes />
      </Provider>
    )
  }
}

export default App
