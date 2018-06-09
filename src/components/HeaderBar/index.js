import React from 'react'
import styled, { css } from 'styled-components'
import AppBar from '@material-ui/core/AppBar'

type Props = {
  title?: string,
  children?: React.Node,
}

const StyleHeaderBar = styled(AppBar)``

export const HeaderBar = props => {
  const { title, children } = props
  return <StyleHeaderBar>{title}</StyleHeaderBar>
}

export default HeaderBar
