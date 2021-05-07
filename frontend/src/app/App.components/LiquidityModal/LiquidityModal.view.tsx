import { AesuranceContract } from 'helpers/aesuranceContracts'
import { HomeInsuranceHeader, HomeInsuranceHeaderFunded, HomeInsuranceHeaderTitle } from 'pages/Home/Home.style'
import * as React from 'react'
import { ModalCard, ModalMask, ModalStyled } from 'styles'

import { Input } from '../Input/Input.controller'
// prettier-ignore
import { LiquidityModalBuy, LiquidityModalCard, LiquidityModalInputs, LiquidityModalReward, LiquidityModalRewardEther, LiquidityModalRewardTitle } from './LiquidityModal.style'

type LiquidityModalViewProps = {
  showing: boolean
  insurance?: AesuranceContract
  hideCallback: () => void
  buyCallback: (insuranceId: number, premium: number) => void
}

export const LiquidityModalView = ({ showing, insurance, hideCallback, buyCallback }: LiquidityModalViewProps) => {
  const [premium, setPremium] = React.useState<any>()
  const [error, setError] = React.useState<any>()

  React.useEffect(() => {
    setPremium('1')
  }, [showing])

  return (
    <ModalStyled showing={showing}>
      {showing && (
        <>
          <ModalMask showing={showing} onClick={() => hideCallback()} />
          <ModalCard>
            <h1>Provide Liquidity</h1>
            <LiquidityModalCard>
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
              <LiquidityModalInputs>
                <Input
                  icon="ether"
                  name="ether"
                  placeholder="Premium"
                  type="number"
                  onChange={(e) => setPremium(e.target.value)}
                  value={premium}
                  onBlur={() => {}}
                  inputStatus={undefined}
                  errorMessage={undefined}
                />
              </LiquidityModalInputs>
              <LiquidityModalReward>
                <LiquidityModalRewardTitle>Estimated anual reward</LiquidityModalRewardTitle>
                <LiquidityModalRewardEther>
                  AE {((parseFloat(premium) || 0) * ((insurance?.APY || 0) / 100)).toFixed(2)}
                </LiquidityModalRewardEther>
              </LiquidityModalReward>
              <LiquidityModalBuy onClick={() => buyCallback(insurance?._id as number, premium)}>
                Send AE {(parseFloat(premium) || 0).toFixed(2)}
              </LiquidityModalBuy>
            </LiquidityModalCard>
          </ModalCard>
        </>
      )}
    </ModalStyled>
  )
}
