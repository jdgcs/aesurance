import * as PropTypes from 'prop-types'
import * as React from 'react'
import { Link } from 'react-router-dom'
import { PublicUser } from 'shared/user/PublicUser'

// prettier-ignore
import { MicroUserGrid, MicroUserPicture, MicroUserStyled, MicroUserUsername } from './MicroUser.style'

type MicroUserProps = {
  user?: PublicUser
}

export const MicroUser = ({ user }: MicroUserProps) => {
  return (
    <MicroUserStyled>
      <Link to={user?.username ? `/user/${user?.username}` : '/'}>
        <MicroUserGrid>
          <MicroUserUsername>{user?.username || 'Unknown user'}</MicroUserUsername>
          <MicroUserPicture alt="user" src={user?.profilePicture} />
        </MicroUserGrid>
      </Link>
    </MicroUserStyled>
  )
}

MicroUser.propTypes = {
  user: PropTypes.object,
}

MicroUser.defaultProps = {}
