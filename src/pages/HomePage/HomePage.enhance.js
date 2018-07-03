import {
  compose,
  withState,
  lifecycle,
  withHandlers,
  withReducer,
  withContext,
} from 'recompose'
import { connect } from 'react-redux'
import HomePage from './HomePage'

export default compose(
  connect(state => ({
    cat: state.homePage.cat,
  })),
  withHandlers({
    onHandleClick: props => e => {
      console.log('e =', e)
    },
  })
)
