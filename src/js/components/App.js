import React from 'react'
import { AuthProvider } from '../contexts/auth'
import styled from 'styled-components'
import Router from './Router'
import Loading from './Loading'
import Todos from './Todos'
import Login from './Login'

import Color from '../const/Color'
import Font from '../const/Font'

const Main = styled.div`
  & {
    font-family: ${Font.DEFAULT};

    background-color: ${Color.INFO};
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-top: 58px;
    margin-bottom: 78px;
    padding: 20px;
  }
`

export default () => (
  <AuthProvider>
    <Main>
      <Router
        renderLoading={() => <Loading />}
        renderTodos={() => <Todos />}
        renderLogin={() => <Login />}
      />
    </Main>
  </AuthProvider>
)
