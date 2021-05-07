import { AesuranceContract, aesuranceContracts } from 'helpers/aesuranceContracts'
import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from 'reducers'
import web3 from 'web3'

import { hideLiquidity } from './LiquidityModal.actions'
import { LiquidityModalView } from './LiquidityModal.view'

type LiquidityModalProps = {

}

export const LiquidityModal = ({ }: LiquidityModalProps) => {
  const dispatch = useDispatch()
  const { insuranceId, showing } = useSelector((state: State) => state.liquidityModal)

  const hideCallback = () => {
    dispatch(hideLiquidity())
  }

  const insurance: AesuranceContract = aesuranceContracts.filter((aesuranceContract) => aesuranceContract._id === insuranceId)?.[0]

  const buyCallback = (insuranceId: number, premium: number) => {
    console.log(insuranceId, premium)
    if (insuranceId === 0)
      // contracts.AesuranceShipping.methods
      //   .provideLiquidity()
      //   .send({ value: premium })
        console.log('Add liquidity 0')
    if (insuranceId === 1)
      //contracts.AesuranceLife.methods.provideLiquidity().send({ value: web3.utils.toWei(premium as any, 'ether') })
      console.log('Add liquidity 1')
    if (insuranceId === 2)
      // contracts.AesuranceFlight.methods
      //   .provideLiquidity()
      //   .send({ value: web3.utils.toWei(premium as any, 'ether') })
      console.log('Add liquidity 2')
  }

  return (
    <LiquidityModalView showing={showing} insurance={insurance} hideCallback={hideCallback} buyCallback={buyCallback} />
  )
}
