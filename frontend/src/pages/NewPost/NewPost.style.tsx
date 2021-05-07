import styled from 'styled-components/macro'

import { Card, FullPage, FadeInFromTop } from '../../styles'

export const NewPostStyled = styled(FullPage)``

export const NewPostCard = styled(Card)`
  padding: 20px;
`
export const NewPostSeparator = styled.div`
  height: 10px;
`

export const NewPostTitle = styled(FadeInFromTop)``

export const NewPostGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 10px;
`
