import styled from 'styled-components/macro'
import { backgroundColorLight, backgroundTextColor, primaryColor, textColor } from 'styles'

export const ForumCategoriesStyled = styled.div``

export const ForumCategoriesCard = styled.div`
  margin: 10px auto 20px auto;
  padding: 15px 15px 10px 15px;
  background: ${backgroundColorLight};
  overflow: hidden;
  min-height: 20px;
`

export const ForumCategoriesCategoryDot = styled.div<{ activated?: boolean }>`
  display: inline-block;
  margin-top: 9px;
  border-radius: 12px;
  width: 6px;
  height: 6px;
  background-color: ${(props) => (props.activated ? primaryColor : 'none')};
`

export const ForumCategoriesCategory = styled.div`
  line-height: 24px;
  display: grid;
  grid-template-columns: 10px 24px auto auto;
  grid-gap: 10px;
  cursor: pointer;
  margin: 10px 20px 25px 5px;

  > svg {
    height: 24px;
    width: 24px;
    stroke: ${textColor};
  }
`

export const ForumCategoriesCategoryCount = styled.div`
  text-align: right;
  font-size: 12px;
  color: ${backgroundTextColor};
`
