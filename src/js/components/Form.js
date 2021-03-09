import React, { useContext, useState, useCallback } from 'react'
import styled from 'styled-components'
import { TextField, Button } from '@material-ui/core'
import { AuthContext } from '../contexts/auth'
import { TodosContext } from '../contexts/todos'

import Color from '../const/Color'

const Contents = styled.div`
  & {
    display: flex;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    left: 0;
    background: ${Color.SECONDARY};
    padding: 5px;
    padding-bottom: 20px;
    width: 100%;
    max-width: 100vw;
    border-radius: 10px 50px 0 0;
  }
`

const Input = styled(TextField)`
  && {
    margin: 5px;
  }
`
const AddButton = styled(Button)`
  && {
    margin: 5px;
    margin-top: 20px;
  }
`

const Input2 = styled(Input)`
  & {
    width: 50%;
  }
`

export default () => {
  const { signout } = useContext(AuthContext)
  const { add } = useContext(TodosContext)
  const [input, setInput] = useState('')

  const addTodo = useCallback(() => {
    add(input)
    setInput('')
  }, [input])

  return (
    <Contents>
      <Input2
        id="add-todo"
        label="やることを入力"
        placeholder="なにをやる？"
        value={input}
        onKeyPress={e => {
          if (e.key == 'Enter') {
            e.preventDefault()
            addTodo()
          }
        }}
        onChange={e => setInput(e.target.value)}
      />
      <AddButton color="primary" onClick={addTodo}>
        追加する
      </AddButton>
    </Contents>
  )
}
