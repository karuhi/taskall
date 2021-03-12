import React, { useContext, Fragment, useState, useEffect } from 'react'
import {
  List,
  ListItem,
  ListItemText,
  Button,
  Checkbox,
  Divider,
  Collapse,
} from '@material-ui/core'
import styled from 'styled-components'
import { TodosContext } from '../contexts/todos'

import ReactMarkdown from 'react-markdown'

import Color from '../const/Color'

const Contents = styled.div`
  & {
    flex: 1;
    background: ${Color.INFO};
  }
  span {
    color: ${Color.SECONDARY};
  }
`
const AutoText = styled.div`
  & {
    margin-left: 10px;
    color: ${Color.SECONDARY};
  }
`
const EmptyMessage = styled.div`
  & {
    font-size: 18px;
    color: #aaa;
    padding: 10px;
  }
`

const Text = styled(ListItemText)`
  && {
    opacity: ${({ completed }) => (completed ? '0.9' : '1.0')};
    text-decoration: ${({ completed }) =>
      completed ? 'line-through' : 'none'};
  }
`

const StyledMarkDown = styled(ReactMarkdown)`
  && {
    width: 100%;
    height: 200px;
    overflow-y: scroll;
  }
`
export default () => {
  const { todos, update, remove } = useContext(TodosContext)

  const [open, setOpen] = useState(false)

  const handleClick = index => {
    setOpen({ [index]: !open[index] })
  }

  const [AutoSuggestList, setAutoSuggestList] = useState({})

  useEffect(() => {
    setAutoSuggestList(
      todos.sort((a, b) => {
        if (a.createdAt < b.createdAt) return 1
        if (a.createdAt > b.createdAt) return -1
        return 0
      })
    )
  })
  return (
    <Contents>
      {todos.length === 0 ? (
        <EmptyMessage>優先するタスクはありません🎉</EmptyMessage>
      ) : (
        <List>
          {AutoSuggestList.map((todo, index) =>
            index === 0 ? (
              <Fragment key={`${todo.docId}--fragment`}>
                <AutoText>自動提案されたタスク：</AutoText>
                <ListItem key={`${todo.docId}--list`}>
                  <Checkbox
                    checked={todo.isComplete}
                    onClick={() => {
                      update({
                        docId: todo.docId,
                        text: todo.text,
                        memo: todo.memo,
                        isComplete: !todo.isComplete,
                      })
                    }}
                  />
                  <Text
                    primary={todo.text}
                    completed={todo.isComplete ? 1 : 0}
                  />
                  {todo.memo ? (
                    <Button
                      color="default"
                      onClick={() => {
                        handleClick(index)
                      }}
                    >
                      メモ{open[index] ? 'を閉じる' : 'を見る'}
                    </Button>
                  ) : null}

                  <Button
                    color="default"
                    onClick={() => {
                      remove({ docId: todo.docId })
                    }}
                  >
                    削除
                  </Button>
                </ListItem>
                {todo.memo ? (
                  <Collapse in={open[index]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItem button>
                        <StyledMarkDown children={todo.memo} />
                      </ListItem>
                    </List>
                  </Collapse>
                ) : null}
                <Divider key={`${todo.docId}--divider`} />
              </Fragment>
            ) : null
          )}
        </List>
      )}
    </Contents>
  )
}
