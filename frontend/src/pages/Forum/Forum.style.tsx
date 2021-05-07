import styled from 'styled-components/macro'
import { backgroundColorLight, FullPage, primaryColor } from 'styles'

export const ForumStyled = styled(FullPage)``

export const ForumGrid = styled.div`
  display: grid;
  grid-template-columns: auto 340px;
  grid-gap: 20px;
`

export const ForumSideBar = styled.div`
  > h1 {
    margin: 0 0 10px 0;
    line-height: 36px;
  }
`

export const ForumCard = styled.div`
  margin: 10px auto 20px auto;
  padding: 15px 15px 10px 15px;
  background: ${backgroundColorLight};
  overflow: hidden;
  min-height: 20px;
`

export const ForumNew = styled.div<{ center?: boolean }>`
  line-height: 29px;
  text-align: ${(props) => (props.center ? 'center' : 'right')};

  > svg {
    width: 5px;
    height: 10px;
    fill: ${primaryColor};
  }
`
