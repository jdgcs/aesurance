import { ConnectedRouter } from 'connected-react-router'
import { Error404 } from 'pages/Error404/Error404.controller'
import { Home } from 'pages/Home/Home.controller'
import { Liquidity } from 'pages/Liquidity/Liquidity.controller'
import * as React from 'react'
import { Route, Switch } from 'react-router'

import { AddModal } from './App.components/AddModal/AddModal.controller'
import { Drawer } from './App.components/Drawer/Drawer.controller'
import { Hamburger } from './App.components/Hamburger/Hamburger.controller'
import { Header } from './App.components/Header/Header.controller'
import { InsuranceModal } from './App.components/InsuranceModal/InsuranceModal.controller'
import { LiquidityModal } from './App.components/LiquidityModal/LiquidityModal.controller'
import { ProgressBar } from './App.components/ProgressBar/ProgressBar.controller'
import { Toaster } from './App.components/Toaster/Toaster.controller'
import { history } from './App.store'

export const App = () => {
  return (
    <ConnectedRouter history={history}>
      <Header />
      <Drawer />
      <Hamburger />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/liquidity">
          <Liquidity />
        </Route>
        <Route exact path="/documentation">
          <div />
        </Route>
        <Route>
          <Error404 />
        </Route>
      </Switch>
      <Toaster />
      <ProgressBar />
      <InsuranceModal />
      <LiquidityModal />
      <AddModal />
    </ConnectedRouter>

  )
}
