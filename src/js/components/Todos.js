import React from 'react'
import styled from 'styled-components'
import { TodosProvider } from '../contexts/todos'
import Menu from './Menu'
import Dev from './Dev'
import AutoSuggestList from './AutoSuggestList'
import List from './List'
import Form from './Form'

import Color from '../const/Color'

const Contents = styled.div`
  & {
    width: 100%;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
  }
`
const styleGenerator = ({ shortWidth, boxShadow, transparent }) => ({
  width: shortWidth ? '20%' : '100%',
  boxShadow: boxShadow ? '5px 5px 15px rgba(0, 0, 0, 0.3)' : 'none',
  backgroundColor: transparent ? 'transparent !important' : Color.SECONDARY,
})

export default () => (
  <TodosProvider>
    <Contents
      style={styleGenerator({
        shortWidth: true,
        boxShadow: false,
        transparent: true,
      })}
    >
      <Dev />
    </Contents>

    <Contents
      style={styleGenerator({
        shortWidth: false,
        boxShadow: true,
        transparent: false,
      })}
    >
      <Menu />
      <AutoSuggestList />
      <List />
      <Form />
    </Contents>
  </TodosProvider>
)
