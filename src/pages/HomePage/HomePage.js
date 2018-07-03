import React from 'react'
import styled from 'styled-components'

import enhance from './HomePage.enhance'
import HeaderBar from '../../components/HeaderBar'

const HomePageContainer = styled.div`
  padding-top: 80px;
`

const HomePage = enhance((props: Props) => {
  const { onHandleClick } = props
  return (
    <HomePageContainer>
      <HeaderBar>Cat App</HeaderBar>
      <button onClick={onHandleClick}>LOAD CAT</button>
    </HomePageContainer>
  )
})

HomePage.displayName = 'HomePage'
export default HomePage
