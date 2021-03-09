import React from 'react'
import styled from 'styled-components'
import { TodosProvider } from '../contexts/todos'
import Menu from './Menu'
import List from './List'
import Form from './Form'

const Contents = styled.div`
  & {
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 10px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
    padding: 10px;
    /* display: flex;
     flex-direction: column; */
  }
`

export default () => (
  <TodosProvider>
    <Contents>
      <Menu />
      <List />
      <Form />
    </Contents>
  </TodosProvider>
)
