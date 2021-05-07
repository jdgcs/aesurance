import { showInsurance } from 'app/App.components/InsuranceModal/InsuranceModal.actions'
import * as React from 'react'
import { useDispatch } from 'react-redux'

import { HomeView } from './Home.view'
import { showAddModal } from 'app/App.components/AddModal/AddModal.actions'

export const Home = () => {
  const dispatch = useDispatch()

  const showInsuranceCallback = (insuranceId: number) => {
    dispatch(showInsurance(insuranceId))
  }

  const newInsuranceCallback = () => {
    dispatch(showAddModal())
  }

  return (
    <HomeView
      showInsuranceCallback={showInsuranceCallback}
      newInsuranceCallback={newInsuranceCallback}
    />
  )
}
