import * as PropTypes from 'prop-types'
import * as React from 'react'
import { Link } from 'react-router-dom'
import { PublicUser } from 'shared/user/PublicUser'
import { textColor } from 'styles'

import { Button } from '../Button/Button.controller'
// prettier-ignore
import { HeaderLoggedIn, HeaderLoggedOut, HeaderLogo, HeaderMain, HeaderMenu, HeaderNotificationCount, HeaderProfilePicture, HeaderStyled, HeaderTriangle, HeaderDoc } from './Header.style'

type HeaderViewProps = {
  user?: PublicUser | undefined
}

export const HeaderView = ({ user }: HeaderViewProps) => {
  return (
    <HeaderStyled>
      <HeaderMain>
        <HeaderLogo>
          <Link to="/">
            <img alt="aesurance" src="/logo.svg" />
          </Link>
        </HeaderLogo>
      </HeaderMain>
    </HeaderStyled>
  )
}

function loggedOutHeader() {
  return (
    <HeaderLoggedOut>
      <Link to="/login">
        <Button color="transparent" text="Login" icon="login" textColor={textColor} />
      </Link>
      <Link to="/sign-up">
        <Button text="Sign Up" icon="plus-card" />
      </Link>
    </HeaderLoggedOut>
  )
}

function loggedInHeader(user: PublicUser | undefined) {
  return (
    <HeaderLoggedIn>
      <Link to={`/notifications`}>
        <svg className="header-icon">
          <use xlinkHref="/icons/sprites.svg#globe" />
        </svg>
        <HeaderNotificationCount>46</HeaderNotificationCount>
      </Link>

      <svg className="separator">
        <use xlinkHref="/icons/sprites.svg#separator" />
      </svg>

      <Link to={`/user/${user?.username}`}>
        <HeaderProfilePicture alt="user" src={user?.profilePicture} />
      </Link>
    </HeaderLoggedIn>
  )
}

HeaderView.propTypes = {
  user: PropTypes.object,
}

HeaderView.defaultProps = {}
