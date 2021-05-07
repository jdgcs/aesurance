import { AesuranceContract } from 'helpers/aesuranceContracts'
import { HomeInsuranceHeader, HomeInsuranceHeaderFunded, HomeInsuranceHeaderTitle } from 'pages/Home/Home.style'
import * as React from 'react'
import { ModalCard, ModalMask, ModalStyled } from 'styles'

import { Input } from '../Input/Input.controller'
// prettier-ignore
import { InsuranceError, InsuranceModalBuy, InsuranceModalCard, InsuranceModalInputs, InsuranceModalReward, InsuranceModalRewardEther, InsuranceModalRewardTitle } from './InsuranceModal.style'

type InsuranceModalViewProps = {
  showing: boolean
  insurance?: AesuranceContract
  hideCallback: () => void
  buyCallback: (insuranceId: number, target: string, premium: number) => void
}

export const InsuranceModalView = ({ showing, insurance, hideCallback, buyCallback }: InsuranceModalViewProps) => {
  const [target, setTarget] = React.useState<any>()
  const [premium, setPremium] = React.useState<any>()
  const [error, setError] = React.useState<any>()

  React.useEffect(() => {
    setPremium('0')
    setTarget('')
  }, [showing])

  return (
    <ModalStyled showing={showing}>
      {showing && (
        <>
          <ModalMask showing={showing} onClick={() => hideCallback()} />
          <ModalCard>
            <h1>Purchase Insurance</h1>
            <InsuranceModalCard>
              <HomeInsuranceHeader>
                <img alt="shipping" src={`/images/${insurance?.icon}.png`} />
                <div>
                  <HomeInsuranceHeaderTitle>{insurance?.name}</HomeInsuranceHeaderTitle>
                  <HomeInsuranceHeaderFunded>
                    {insurance && insurance?.funds > 0 ? (
                      <>
                        Funded with AE {insurance?.funds}
                        <img alt="dot" src="/icons/green-dot.svg" />
                      </>
                    ) : (
                      <>
                        No more funds
                        <img alt="dot" src="/icons/red-dot.svg" />
                      </>
                    )}
                  </HomeInsuranceHeaderFunded>
                </div>
              </HomeInsuranceHeader>
              <InsuranceModalInputs>
                <Input
                  icon="target"
                  name="target"
                  placeholder={insurance?.targetName}
                  type="text"
                  onChange={(e) => setTarget(e.target.value)}
                  value={target}
                  onBlur={() => {}}
                  inputStatus={undefined}
                  errorMessage={undefined}
                />
                <Input
                  icon="ether"
                  name="ether"
                  placeholder="Premium"
                  type="number"
                  onChange={(e) => {
                    setPremium(e.target.value)
                    if (insurance && e.target.value * ((insurance?.reward || 0) / 100) > insurance?.funds)
                      setError('No enought funds in pool')
                    else setError(undefined)
                  }}
                  value={premium}
                  onBlur={() => {}}
                  inputStatus={undefined}
                  errorMessage={undefined}
                />
              </InsuranceModalInputs>
              <InsuranceModalReward>
                <InsuranceModalRewardTitle>{insurance?.condition}</InsuranceModalRewardTitle>
                <InsuranceModalRewardEther>
                  AE {((parseFloat(premium) || 0) * ((insurance?.reward || 0) / 100)).toFixed(2)}
                </InsuranceModalRewardEther>
              </InsuranceModalReward>
              {error ? (
                <InsuranceError>{error}</InsuranceError>
              ) : (
                <InsuranceModalBuy onClick={() => buyCallback(insurance?._id as number, target as string, premium)}>
                  Buy insurance for AE {(parseFloat(premium) || 0).toFixed(2)}
                </InsuranceModalBuy>
              )}
            </InsuranceModalCard>
          </ModalCard>
        </>
      )}
    </ModalStyled>
  )
}
