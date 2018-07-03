import { compose, withState, lifecycle, withHandlers } from 'recompose'

import HomePage from './HomePage'

export default compose(
  withHandlers({
    onHandleClick: props => e => {
      console.log('e =', e)
    },
  })
)
