import React, { useContext, useState, useCallback } from 'react'
import styled from 'styled-components'
import { TextField, Button } from '@material-ui/core'
import { AuthContext } from '../contexts/auth'
import { TodosContext } from '../contexts/todos'

import ReactMarkdown from 'react-markdown'

import Color from '../const/Color'

const Contents = styled.div`
  & {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
    position: fixed;
    bottom: 0;
    left: 0;
    background: ${Color.SECONDARY};
    margin: 0 10px 0 10px;
    padding-bottom: 20px;
    width: calc(100% - 20px);
    max-width: 100vw;
    border-radius: 10px 10px 0 0;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
  }
`

const Input = styled(TextField)`
  && {
    margin: 5px;
    width: 50%;
    height: 30px;
  }
`
const AddButton = styled(Button)`
  && {
    margin: 5px;
    margin-top: 20px;
    height: 30px;
    width: 20%;
  }
  &&:hover {
    background: ${Color.PRIMARY};
    color: ${Color.SECONDARY};
  }
`

const ToggleButton = styled(Button)`
  && {
    position: relative;
    margin: 5px;
    margin-top: 20px;
    height: 30px;
    width: 20%;
    z-index: 1;
  }
  svg {
    width: 30px;
    height: 30px;
    stroke: ${Color.DEFAULT};
  }
`

const MemoTextfield = styled(TextField)`
  && {
    margin: 10px;
    height: 300px;
    width: calc(50% - 20px);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  }
`

const StyledMarkDown = styled(ReactMarkdown)`
  && {
    width: calc(50% - 40px);
    height: 300px;
    overflow-y: scroll;
    background: ${Color.INFO};
    padding: 10px;
    margin: 10px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
  }
`

export default () => {
  const { add } = useContext(TodosContext)
  const [input, setInput] = useState('')
  const [value, setValue] = useState('')

  const addTodo = useCallback(() => {
    add(input, value)
    setInput('')
    setValue('')
    setIsToggled(false)
  }, [input, value])

  const [isToggled, setIsToggled] = useState(false)

  const toggle = useCallback(() => {
    setIsToggled(!isToggled)
  })

  const handleChange = event => {
    setValue(event.target.value)
  }

  return (
    <Contents style={{ height: isToggled ? '50%' : '58px' }}>
      <Input
        required
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
      <ToggleButton color="primary" onClick={toggle}>
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 22L64 22" />
          <path d="M16 40L64 40" />
          <path d="M16 58L64 58" />
        </svg>
        <br />
      </ToggleButton>
      {isToggled && (
        <MemoTextfield
          id="inputMemo"
          label="メモ.md"
          multiline
          rows={10}
          value={value}
          onChange={handleChange}
        ></MemoTextfield>
      )}
      {isToggled && (
        <StyledMarkDown children={value} />
        // <MemoTextfield
        //   id="MDMemo"
        //   label="メモ.preview"
        //   multiline
        //   disabled
        //   rows={10}
        //   value={value}
        // ></MemoTextfield>
      )}
    </Contents>
  )
}
