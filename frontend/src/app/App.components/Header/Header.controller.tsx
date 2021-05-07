import * as React from 'react'
import { useSelector } from 'react-redux'
import { State } from 'reducers'

import { HeaderView } from './Header.view'

export const Header = () => {
  const user = useSelector((state: State) => state.auth.user)
  return <HeaderView user={user} />
}
