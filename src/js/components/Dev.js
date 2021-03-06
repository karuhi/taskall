import React from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'

import Color from '../const/Color'

const Contents = styled.div`
  & {
    background: ${Color.SUCCESS};
    color: ${Color.SECONDARY};
    padding: 10px;
    margin-right: 10px;
    border-radius: 10px;
    text-align: center;
  }
  button {
    color: ${Color.INFO};
  }
  svg {
    width: 30px;
    height: 30px;
    stroke: ${Color.INFO};
  }
`

export default () => {
  const [isToggled, setIsToggled] = React.useState(true)

  const toggle = React.useCallback(() => {
    console.log(isToggled)
    setIsToggled(!isToggled)
  })
  return (
    <Contents>
      {isToggled ? (
        <div>
          <Button onClick={toggle}>
            非表示
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M39.7312 17C35.4877 17 31.4181 18.6857 28.4175 21.6863L27.7901 22.3137C24.7895 25.3143 23.1038 29.384 23.1038 33.6274V36.5656C23.1038 41.9665 20.9582 47.1461 17.1392 50.9651C16.4762 51.6281 16.1038 52.5273 16.1038 53.4649C16.1038 55.4173 17.6865 57.0001 19.639 57.0001H60.5686C62.521 57.0001 64.1038 55.4173 64.1038 53.4649C64.1038 52.5273 63.7313 51.6281 63.0683 50.9651C59.2493 47.1461 57.1038 41.9665 57.1038 36.5656V33.6274C57.1038 29.384 55.4181 25.3143 52.4175 22.3137L51.7901 21.6863C48.7895 18.6857 44.7198 17 40.4763 17H39.7312Z" />
              <path d="M33.8587 57C33.4162 57.9211 33.1755 58.9434 33.1755 60C33.1755 62.4752 34.496 64.7624 36.6396 66C38.7832 67.2376 41.4242 67.2376 43.5678 66C45.7114 64.7624 47.0319 62.4752 47.0319 60C47.0319 58.9434 46.7913 57.9211 46.3488 57" />
              <path d="M42.1038 17.0829V14C42.1038 12.8954 41.2083 12 40.1038 12C38.9992 12 38.1038 12.8954 38.1038 14V17.0829" />
              <path d="M68 12L12 68" />
            </svg>
          </Button>
          <h3>!!!機能追加予定!!!</h3>
          <p>3/11：メモ機能　✅</p>
          <p>3/12：自動提案機能　✅</p>
          <p>3/13：SNS通知機能</p>
          <p>よければ毎日見に来てください！</p>
          <small>※✅が公開済み機能</small>
        </div>
      ) : (
        <div>
          <Button onClick={toggle}>
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M39.6274 18.5C35.384 18.5 31.3143 20.1857 28.3137 23.1863L27.6863 23.8137C24.6857 26.8143 23 30.884 23 35.1274V38.0656C23 43.4665 20.8545 48.6461 17.0355 52.4651C16.3725 53.1281 16 54.0273 16 54.9649C16 56.9173 17.5828 58.5001 19.5352 58.5001H60.4648C62.4172 58.5001 64 56.9173 64 54.9649C64 54.0273 63.6275 53.1281 62.9645 52.4651C59.1455 48.6461 57 43.4665 57 38.0656V35.1274C57 30.884 55.3143 26.8143 52.3137 23.8137L51.6863 23.1863C48.6857 20.1857 44.616 18.5 40.3726 18.5H39.6274Z" />
              <path d="M33.7549 58.5C33.3124 59.4211 33.0718 60.4434 33.0718 61.5C33.0718 63.9752 34.3923 66.2624 36.5359 67.5C38.6795 68.7376 41.3205 68.7376 43.4641 67.5C45.6077 66.2624 46.9282 63.9752 46.9282 61.5C46.9282 60.4434 46.6876 59.4211 46.245 58.5" />
              <path d="M42 18.5829V15.5C42 14.3954 41.1046 13.5 40 13.5C38.8954 13.5 38 14.3954 38 15.5V18.5829" />
              <path d="M63.9999 34.5001C63.9999 31.3484 63.3791 28.2275 62.173 25.3157C60.9669 22.4039 59.1991 19.7581 56.9705 17.5295" />
              <path d="M16 34.5001C16 31.3484 16.6208 28.2275 17.8269 25.3157C19.033 22.4039 20.8008 19.7581 23.0294 17.5295" />
            </svg>
          </Button>
        </div>
      )}
    </Contents>
  )
}
