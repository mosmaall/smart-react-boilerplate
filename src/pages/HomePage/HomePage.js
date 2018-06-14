import React from 'react'
import { compose, withHandlers, withProps } from 'recompose'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import styled from 'styled-components'

import theme from '../../theme'
import enhance from './HomePage.enhance.js'
import SearchBar from '../../components/SearchBar'
import HeaderBar from '../../components/HeaderBar'
import DataList from './components/DataList'

const StyledSearchBar = styled(SearchBar).attrs({
  fullWidth: true,
})`
  color: ${theme().color.textPrimary};
`

const BodyContainer = styled.div`
  margin-top: ${theme().dimens.xl};
`

function withNoContent(Component) {
  return function EnchancedComponent({ data, ...props }) {
    if (data) {
      return <Component item={data} />
    }
    return (
      <div>
        <p>No content</p>
      </div>
    )
  }
}

const DataListWithNoContent = withNoContent(DataList)

const HomePage = enhance((props: Props) => {
  const { keyword, handleChange, data } = props
  return (
    <div>
      <HeaderBar>Pokemon Dictionary</HeaderBar>
      <BodyContainer>
        <StyledSearchBar handleChange={handleChange} />
        <DataListWithNoContent data={data.pokemon} />
      </BodyContainer>
    </div>
  )
})

export default HomePage
