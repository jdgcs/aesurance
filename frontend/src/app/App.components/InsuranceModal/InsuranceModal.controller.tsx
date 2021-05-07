import { AesuranceContract, aesuranceContracts } from 'helpers/aesuranceContracts'
import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from 'reducers'
import web3 from 'web3'

import { hideInsurance } from './InsuranceModal.actions'
import { InsuranceModalView } from './InsuranceModal.view'

type InsuranceModalProps = {

}

export const InsuranceModal = ({ }: InsuranceModalProps) => {
  const dispatch = useDispatch()
  const { insuranceId, showing } = useSelector((state: State) => state.insuranceModal)

  const hideCallback = () => {
    dispatch(hideInsurance())
  }

  const insurance: AesuranceContract = aesuranceContracts.filter((aesuranceContract) => aesuranceContract._id === insuranceId)?.[0]

  const buyCallback = (insuranceId: number, target: string, premium: number) => {
    console.log(insuranceId, target, premium)
    if (insuranceId === 0)
      // contracts.AesuranceShipping.methods
      //   .buyInsurance(target)
      //   .send({ value: premium })
      console.log('Buy insurance 0')
    if (insuranceId === 1)
      // contracts.AesuranceLife.methods
      //   .buyInsurance(target)
      //   .send({ value: premium })
        console.log('Buy insurance 1')
    if (insuranceId === 2)
      // contracts.AesuranceFlight.methods
      //   .buyInsurance(target)
      //   .send({ value: premium })
      console.log('Buy insurance 2')

  }

  return (
    <InsuranceModalView showing={showing} insurance={insurance} hideCallback={hideCallback} buyCallback={buyCallback} />
  )
}
