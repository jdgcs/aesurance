import { AesuranceContract, aesuranceContracts } from 'helpers/aesuranceContracts'
import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from 'reducers'
//@ts-ignore
import { Universal, MemoryAccount, Node, AmountFormatter, WalletRpc } from '@aeternity/aepp-sdk'

import { hideInsurance } from './InsuranceModal.actions'
import { InsuranceModalView } from './InsuranceModal.view'

const NODE_URL = 'https://testnet.aeternity.io'
const COMPILER_URL = 'https://compiler.aepps.com'

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

    // (async function () {
    //   const nodeInstance = await Node({ url: NODE_URL })
    //   const sdkInstance = await Universal({
    //      compilerUrl: COMPILER_URL,
    //      nodes: [ { name: 'test-net', instance: nodeInstance } ],
    //      accounts: [ account ]
    //   })
    
    //   await sdkInstance.height() // get top block height
    //   console.log('Current Block Height:', height)
    
    //   // spend one AE
    //   await sdkInstance.spend(1, 'ak_asd23dasdasda...', {
    //       denomination: AmountFormatter.AE_AMOUNT_FORMATS.AE
    //   })
    // })()

    const acc = WalletRpc.getAccounts() 
    console.log(acc)

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
