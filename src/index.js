import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

import App from './cores/App'

//No Provider Here
ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()

if (module.hot) {
  module.hot.accept('./cores/App', () => {
    const NextApp = require('./cores/App').default
    ReactDOM.render(<NextApp />, document.getElementById('root'))
  })
}
