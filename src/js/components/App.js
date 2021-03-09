import React from 'react'
import { AuthProvider } from '../contexts/auth'
import styled from 'styled-components'
import Router from './Router'
import Loading from './Loading'
import Todos from './Todos'
import Login from './Login'

import Color from '../const/Color'

const Main = styled.div`
  & {
    /* position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0; */
    /* height: 100%;
    min-height: 100vh; */

    background-color: ${Color.INFO};
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-top: 58px;
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
