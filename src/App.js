import React, { Component } from 'react'
import { Provider as StoreProvider } from 'mobx-react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import Routes from './Routes'
import { getInstanceStores } from './stores/Store'

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_ENDPOINT,
})

class App extends Component {
  render() {
    return (
      //Remove ApolloProvider if don't use
      <ApolloProvider client={client}>
        <StoreProvider {...getInstanceStores()}>
          <Routes />
        </StoreProvider>
      </ApolloProvider>
    )
  }
}

export default App
