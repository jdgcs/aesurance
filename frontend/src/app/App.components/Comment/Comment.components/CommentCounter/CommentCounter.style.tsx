import styled from 'styled-components/macro'
import { downColor, subTextColor, upColor } from 'styles'

export const CommentCounterStyled = styled.div`
  text-transform: uppercase;
  text-align: center;
`

export const CommentCounterScore = styled.div`
  line-height: 10px;
  font-size: 16px;
  font-weight: 600;
  color: ${subTextColor};
  margin-left: 1px;

  &.voted-up {
    color: ${upColor};
  }

  &.voted-down {
    color: ${downColor};
  }
`

export const CommentCounterUp = styled.div`
  background-repeat: no-repeat;
  width: 21px;
  height: 17px;
  border: none !important;
  border-radius: 2px;
  transition: 0.2s;
  display: block;
  cursor: pointer;
  margin: 0 auto 4px;
  outline: none;
  background-image: url('/icons/arrow-up.svg');
  background-position: -19px 3px;

  &.voted-up {
    background-position: 2px 3px;
  }

  :hover {
    transform: scale(1.4);
  }
`

export const CommentCounterDown = styled.div`
  background-repeat: no-repeat;
  width: 21px;
  height: 17px;
  border: none !important;
  border-radius: 2px;
  transition: 0.2s;
  display: block;
  cursor: pointer;
  margin: 4px auto 0;
  outline: none;
  background-image: url('/icons/arrow-down.svg');
  background-position: 2px 3px;

  &.voted-down {
    background-position: -19px 3px;
  }

  :hover {
    transform: scale(1.4);
  }
`
