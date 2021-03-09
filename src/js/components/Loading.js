import React from 'react'
import Loading from 'react-loading'
import styled from 'styled-components'

import Color from '../const/Color'

const Contents = styled.div`
  & {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: ${Color.SECONDARY};
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  }
`

export default () => (
  <Contents>
    <Loading type="spin" color={Color.PRIMARY} height={100} width={100} />
  </Contents>
)
