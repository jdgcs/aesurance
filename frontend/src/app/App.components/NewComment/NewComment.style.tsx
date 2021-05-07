import styled from 'styled-components/macro'
import { backgroundColorLight, textColor, backgroundTextColor, PROXIMA_NOVA, primaryColor } from 'styles'

export const NewCommentStyled = styled.div<{ expanded: boolean }>`
  margin-top: 10px;
  padding: 10px;
  background: ${backgroundColorLight};
  overflow: hidden;
  height: ${(props) => (props.expanded ? 'initial' : '70px')};
`

export const NewCommentGrid = styled.div<{ isSmall: boolean }>`
  display: grid;
  grid-template-columns: ${(props) => (props.isSmall ? 'auto' : 'auto 200px')};
  grid-gap: 10px;
`

export const NewCommentTextArea = styled.textarea`
  height: 110px;
  display: inline-block;
  background-color: ${backgroundColorLight};
  resize: none;
  border: none;
  margin-bottom: 10px;
  width: 100%;
  color: ${textColor};
  font-family: '${PROXIMA_NOVA}';

  ::placeholder {
    color: ${backgroundTextColor};
  }
`

export const NewCommentButtons = styled.div<{ isSmall: boolean }>`
  display: grid;
  grid-template-columns: repeat(4, ${(props) => (props.isSmall ? '56px' : '150px')});
  grid-gap: 10px;
`

export const NewCommentImageContainer = styled.div`
  > div {
    position: relative;
    display: inline-block;
  }
`

export const NewCommentImage = styled.img`
  max-width: 100%;
  height: 200px;
  margin: 10px 0;
  display: block;
`

export const NewCommentImageClose = styled.div`
  position: absolute;
  top: 0;
  right: -10px;
  height: 30px;
  width: 30px;
  background: ${primaryColor};
  border-radius: 15px;
  cursor: pointer;

  > svg {
    height: 14px;
    width: 14px;
    margin: 8px;
    stroke-width: 4;
    stroke: ${textColor};
  }
`
