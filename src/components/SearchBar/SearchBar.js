import React from 'react'
import styled, { css } from 'styled-components'
import theme from '../../theme'

type Props = {
  handleChange?: (e: SyntheticEvent<any>) => void,
  placeholder?: string,
  autoFocus?: boolean,
  fullWidth?: boolean,
  height?: string,
}

const DefaultProps = {
  autoFocus: false,
}

const AlignCenter = css`
  display: block;
  margin: 0 auto;
`

const SearchWrapper = styled.div`
  ${AlignCenter};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  width: ${props => (props.fullWidth ? '100%' : '50%')};
  height: ${props => props.height || '60px'};
`

const Input = styled.input`
  ${AlignCenter};
  border: none;
  height: 90%;
  width: 90%;
  font-size: ${theme().font.headline};

  &:hover {
    opacity: 0.8;
  }

  &:active,
  &:focus {
    outline: none;
  }
`

const SearchBar = (props: Props) => {
  const {
    handleChange,
    autoFocus,
    placeholder,
    fullWidth,
    height,
    ...rest
  } = props

  return (
    <SearchWrapper fullWidth={fullWidth}>
      <Input
        onChange={handleChange}
        placeholder={placeholder}
        autoFocus={autoFocus}
        height={height}
        {...rest}
      />
    </SearchWrapper>
  )
}

SearchBar.defaultProps = DefaultProps
export default SearchBar
