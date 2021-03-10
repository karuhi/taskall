import React, { useContext, useState, useCallback } from 'react'
import styled from 'styled-components'
import { TextField, Button } from '@material-ui/core'
import { AuthContext } from '../contexts/auth'

import Color from '../const/Color'
import Image from '../../images/title.png'

const Contents = styled.div`
  & {
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    background: ${Color.SECONDARY};
    width: 100%;
    height: 58px;
    z-index: 99999;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
  }
`
const TitleLogo = {
  padding: '10px',
  display: 'inline',
}

const SignoutButton = styled(Button)`
  && {
    margin: 5px 5px 5px 20px;
  }
`

export default () => {
  const { signout } = useContext(AuthContext)

  return (
    <Contents>
      <img src={Image} style={TitleLogo} alt="アイコン" />
      <SignoutButton color="default" onClick={signout}>
        サインアウト
      </SignoutButton>
    </Contents>
  )
}
