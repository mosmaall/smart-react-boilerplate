import React from 'react'
import styled, { css } from 'styled-components'
import AppBar from '@material-ui/core/AppBar'

import theme from '../../theme'
import { supportLayoutProps } from '../styledHelper'

type Props = {
  children?: React.Node,
  bgColor?: 'default' | 'primary' | 'accent' | 'secondary',
  alignText?: 'left' | 'center' | 'right',
}

const StyledHeaderbar = styled(AppBar)`
  ${supportLayoutProps};
  && {
    padding: ${theme().dimens.md};
    background: ${props => props.bgColor || theme().color.primary};
    text-align: ${props => props.alignText || 'center'};
  }
`

export const HeaderBar = props => {
  const { children, ...rest } = props
  return <StyledHeaderbar {...rest}>{children}</StyledHeaderbar>
}

export default HeaderBar
