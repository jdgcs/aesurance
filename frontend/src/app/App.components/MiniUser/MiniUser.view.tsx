import * as PropTypes from 'prop-types'
import * as React from 'react'
import { Link } from 'react-router-dom'
import { PublicUser } from 'shared/user/PublicUser'

// prettier-ignore
import { MiniUserGrid, MiniUserLeft, MiniUserLeftUsername, MiniUserPicture, MiniUserRight, MiniUserStyled } from './MiniUser.style'

type MiniUserProps = {
  user?: PublicUser
}

export const MiniUser = ({ user }: MiniUserProps) => {
  return (
    <MiniUserStyled>
      <Link to={user?.username ? `/user/${user?.username}` : '/'}>
        <MiniUserGrid>
          <MiniUserLeft>
            <MiniUserLeftUsername>{user?.username || 'Unknown user'}</MiniUserLeftUsername>
          </MiniUserLeft>
          <MiniUserRight>
            <MiniUserPicture alt="user" src={user?.profilePicture} />
          </MiniUserRight>
        </MiniUserGrid>
      </Link>
    </MiniUserStyled>
  )
}

MiniUser.propTypes = {
  user: PropTypes.object,
}

MiniUser.defaultProps = {}
