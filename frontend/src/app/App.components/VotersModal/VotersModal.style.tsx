import styled from 'styled-components/macro'
import { upColor, downColor } from 'styles'

export const VotersModalGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  text-align: center;
`

export const VotersModalUpvoters = styled.div`
  > h1 {
    color: ${upColor};
  }

  > h1 > svg {
    stroke: ${upColor};
    stroke-width: 3px;
    display: inline-block;
    width: 30px;
    height: 30px;
    vertical-align: middle;
  }
`

export const VotersModalDownvoters = styled.div`
  > h1 {
    color: ${downColor};
  }

  > h1 > svg {
    stroke: ${downColor};
    stroke-width: 3px;
    display: inline-block;
    width: 30px;
    height: 30px;
    vertical-align: middle;
  }
`

export const VotersModalUpvotersScroll = styled.div`
  overflow: scroll;

  > div {
    margin: auto;
  }
`

export const VotersModalDownvotersScroll = styled.div`
  overflow: scroll;

  > div {
    margin: auto;
  }
`
