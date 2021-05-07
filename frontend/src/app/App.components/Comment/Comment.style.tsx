import styled from 'styled-components/macro'
import { backgroundColorLight, counterColor, textColor } from 'styles'

export const CommentStyled = styled.div`
  margin-top: 10px;
  padding: 9px;
  background: ${backgroundColorLight};
  overflow: hidden;
  min-height: 70px;
`

export const CommentGrid = styled.div<{ isSmall: boolean }>`
  display: grid;
  grid-template-columns: ${(props) => (props.isSmall ? '30px auto' : '30px auto 200px')};
  grid-gap: 10px;
`

export const CommentContent = styled.div``

export const CommentText = styled.div<{ expanded: boolean }>`
  margin-top: 4px;
  display: block;
  max-height: ${(props) => (props.expanded ? '1200px' : '400px')};
  transition: max-height 1s ease;
  overflow: hidden;
  white-space: pre-wrap;

  ::first-letter {
    text-transform: capitalize;
  }
`

export const CommentImage = styled.img`
  max-height: 400px;
  max-width: 100%;
`

export const CommentActions = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(4, fit-content(150px));
  grid-gap: 20px;
`

export const CommentAction = styled.div`
  font-size: 12px;
  font-weight: 600;
  line-height: 15px;
  cursor: pointer;

  > svg {
    height: 15px;
    width: 15px;
    stroke: ${textColor};
    margin-right: 5px;
    vertical-align: sub;
  }
`

export const CommentInfo = styled.div`
  font-size: 12px;
  font-weight: 600;
  line-height: 15px;
  color: ${counterColor};

  > svg {
    height: 15px;
    width: 15px;
    stroke: ${counterColor};
    margin-right: 5px;
    vertical-align: sub;
  }
`

export const CommentExpand = styled.div`
  cursor: pointer;
`

export const CommentReply = styled.div`
  padding-left: 15px;
  border-left: 5px solid ${backgroundColorLight};
`
