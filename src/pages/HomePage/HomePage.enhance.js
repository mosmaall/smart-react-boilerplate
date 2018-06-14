import { compose, withProps, withHandlers, withState } from 'recompose'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

let query = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      resistant
      classification
      types
      image
    }
  }
`

export default compose(
  withState('keyword', 'setKeyword', ''),
  graphql(query, {
    options: props => ({
      variables: {
        name: props.keyword,
      },
    }),
  }),
  withHandlers({
    handleChange: props => e => {
      props.setKeyword(e.target.value)
    },
  })
)
