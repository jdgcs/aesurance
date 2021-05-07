import styled from 'styled-components/macro'

export const MicroUserStyled = styled.div`
  position: relative;
`

export const MicroUserGrid = styled.div`
  display: grid;
  grid-template-columns: auto 15px;
  grid-gap: 7px;
  height: 15px;
`

export const MicroUserUsername = styled.div`
  font-size: 12px;
  line-height: 15px;
  text-align: right;
  text-transform: capitalize;
`

export const MicroUserPicture = styled.img`
  width: 15px;
  height: 15px;
  border-radius: 25px;
  cursor: pointer;
`
