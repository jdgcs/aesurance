import * as PropTypes from 'prop-types'
import * as React from 'react'
import { Link } from 'react-router-dom'
import { PublicUser } from 'shared/user/PublicUser'
import { UserRole } from 'shared/user/UserRole'

import { DrawerItem, DrawerMask, DrawerStyled } from './Drawer.style'

type DrawerViewProps = {
  showing: boolean
  hideCallback: () => void
  pathname: string
  user: PublicUser
  removeAuthUserCallback: () => void
}

export const DrawerView = ({ showing, hideCallback, pathname, user, removeAuthUserCallback }: DrawerViewProps) => (
  <>
    <DrawerMask className={`${showing}`} onClick={() => hideCallback()} />
    <DrawerStyled className={`${showing}`}>
      <h1>Menu</h1>

      <DrawerItem isSelected={pathname === '/'}>
        <Link to="/" onClick={() => hideCallback()}>
          <svg>
            <use xlinkHref="/icons/sprites.svg#buy" />
          </svg>
          Purchase Insurance
        </Link>
      </DrawerItem>

      <DrawerItem isSelected={pathname === '/liquidity'}>
        <Link to="/liquidity" onClick={() => hideCallback()}>
          <svg>
            <use xlinkHref="/icons/sprites.svg#drop" />
          </svg>
          Provide Liquidity
        </Link>
      </DrawerItem>
    </DrawerStyled>
  </>
)

DrawerView.propTypes = {
  showing: PropTypes.bool,
  hideCallback: PropTypes.func.isRequired,
  pathname: PropTypes.string.isRequired,
  user: PropTypes.object,
  removeAuthUserCallback: PropTypes.func.isRequired,
}

DrawerView.defaultProps = {
  showing: false,
  user: undefined,
}
