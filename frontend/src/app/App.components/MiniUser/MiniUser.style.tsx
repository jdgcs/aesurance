import styled from 'styled-components/macro'
import { backgroundColorLight, backgroundTextColor, primaryColor, secondaryColor } from 'styles'

export const MiniUserStyled = styled.div`
  position: relative;
  width: 200px;
`

export const MiniUserGrid = styled.div`
  display: grid;
  grid-template-columns: auto 60px;
  grid-gap: 7px;
  height: 50px;
`

export const MiniUserLeft = styled.div`
  text-align: right;
  margin-top: 18px;
`

export const MiniUserLeftUsername = styled.div`
  font-size: 12px;
  line-height: 15px;
  text-transform: capitalize;
`

export const MiniUserRight = styled.div``

export const MiniUserPicture = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  cursor: pointer;
`
