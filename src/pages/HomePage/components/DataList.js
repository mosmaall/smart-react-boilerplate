import React from 'react'
import styled from 'styled-components'

const DataContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  margin-top: 10px;
`

const DataList = props => {
  const { item } = props
  return (
    <DataContainer>
      <img src={item.image} />
      <p>Name: {item.name}</p>
      <p>Type :{item.types}</p>
      <p>Resistant: {item.resistant}</p>
      <p>Classification: {item.classification}</p>
    </DataContainer>
  )
}

export default DataList
