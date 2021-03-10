import React from 'react'
import Loading from 'react-loading'
import styled from 'styled-components'

import Color from '../const/Color'

const Contents = styled.div`
  & {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    min-height: 100vh;
    width: 100%;
    min-width: 100vw;
    background-color: ${Color.INFO};
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export default () => (
  <Contents>
    <Loading type="spin" color={Color.PRIMARY} height={100} width={100} />
  </Contents>
)
