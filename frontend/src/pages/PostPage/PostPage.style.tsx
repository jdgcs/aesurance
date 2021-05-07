import styled from 'styled-components/macro'
import { FullPage, backgroundColorLight, backgroundTextColor } from 'styles'

export const PostPageStyled = styled(FullPage)`
  > h2 {
    margin-top: 20px;
  }
`

export const PostPageGrid = styled.div`
  display: grid;
  grid-template-columns: auto 340px;
  grid-gap: 20px;
`

export const PostPageSideBar = styled.div``

export const SearchCard = styled.div`
  margin-top: 10px;
  padding: 10px;
  background: ${backgroundColorLight};
  overflow: hidden;
  min-height: 70px;
`

export const PostPageBack = styled.div`
  color: ${backgroundTextColor};
  line-height: 11px;

  > svg {
    height: 11px;
    width: 5.5px;
    stroke: ${backgroundTextColor};
    margin-right: 5px;
  }
`
