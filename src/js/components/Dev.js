import React from 'react'
import styled from 'styled-components'

import Color from '../const/Color'

const Contents = styled.div`
  & {
    background: ${Color.PRIMARY};
    color: ${Color.SECONDARY};
    padding: 10px;
    margin-right: 10px;
    border-radius: 10px;
    text-align: center;
  }
`

export default () => {
  return (
    <Contents>
      <p>!!!機能追加予定!!!</p>
      <p>3/11：自動提案機能</p>
      <p>3/12：メモ機能</p>
      <p>3/13：SNS通知機能</p>
      <p>よければ毎日見に来てください！</p>
    </Contents>
  )
}
