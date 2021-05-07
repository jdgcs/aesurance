import styled from 'styled-components/macro'
import { backgroundColorLight, counterColor, textColor } from 'styles'

export const PostStyled = styled.div`
  margin-top: 10px;
  padding: 9px;
  background: ${backgroundColorLight};
  overflow: hidden;
  min-height: 70px;
`

export const PostGrid = styled.div<{ isSmall: boolean }>`
  display: grid;
  grid-template-columns: ${(props) => (props.isSmall ? '30px auto' : '125px 30px auto 200px')};
  grid-gap: 10px;
`

export const PostMiniImage = styled.div`
  background-image: url('/images/empty.svg');
  background-size: 100%;
  border-radius: 3px 3px 0 0;
  display: block;
  overflow: hidden;
  height: 70px;
  width: 125px;
  position: relative;

  > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
    border-radius: 3px 3px 0 0;
    display: block;
  }
`

export const PostContainer = styled.div`
  margin-top: 10px;
`

export const PostCounter = styled.div`
  margin-top: 10px;
`

export const PostUser = styled.div`
  margin-top: 10px;
`

export const PostContent = styled.div`
  margin-top: 10px;
`

export const PostContentText = styled.div`
  margin-top: 10px;

  ::first-letter {
    text-transform: capitalize;
  }
`

export const PostText = styled.div`
  margin-top: 4px;
  display: block;
  overflow: hidden;
  white-space: pre-wrap;
  font-weight: bold;

  ::first-letter {
    text-transform: capitalize;
  }
`

export const PostImage = styled.img`
  max-height: 400px;
  max-width: 100%;
`

export const PostActions = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(4, fit-content(150px));
  grid-gap: 20px;
`

export const PostAction = styled.div`
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

export const PostInfo = styled.div`
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

export const PostExpand = styled.div`
  cursor: pointer;
`

export const PostReply = styled.div`
  padding-left: 15px;
  border-left: 5px solid ${backgroundColorLight};
`
