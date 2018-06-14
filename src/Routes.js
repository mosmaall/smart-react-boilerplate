import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Loadable from 'react-loadable'
import { inject, observer } from 'mobx-react'

const LOADABLE_CONFIG = { loading: () => null, delay: 2000 }

//Dynamic loading
const Home = {
  home: Loadable({
    ...LOADABLE_CONFIG,
    loader: () =>
      import(/* webpackChunkName: "route.HomePage.HomePage" */ './pages/HomePage'),
  }),
}

const Routes = () => {
  return (
    <div>
      <Router basename={process.env.REACT_APP_BASE_URL}>
        <div>
          <Route exact path="/" component={Home.home} />
        </div>
      </Router>
    </div>
  )
}

export default Routes
