import { commatize } from 'helpers/commatize'
import { aesuranceContracts } from 'helpers/aesuranceContracts'
import * as React from 'react'
import { useEffect } from 'react'

// prettier-ignore
import { LiquidityAddInsurance, LiquidityInsurance, LiquidityInsuranceBuy, LiquidityInsuranceHeader, LiquidityInsuranceHeaderFunded, LiquidityInsuranceHeaderTitle, LiquidityInsuranceOfPremium, LiquidityInsuranceReward, LiquidityInsurances, LiquidityStyled } from './Liquidity.style'

type LiquidityViewProps = {
  showInsuranceCallback: (insuranceId: number) => void
  newInsuranceCallback: () => void
}

export const LiquidityView = ({ showInsuranceCallback, newInsuranceCallback }: LiquidityViewProps) => {
  useEffect(() => {
    // const contract = contracts.Aesurances
    // const dataKey = contract.methods['getAesurances'].cacheCall()
  }, [])

  return (
    <LiquidityStyled>
      <h1>Provide Liquidity</h1>

      <LiquidityInsurances>
        {aesuranceContracts.map((aesuranceContract: any) => (
          <LiquidityInsurance key={aesuranceContract._id} onClick={() => showInsuranceCallback(aesuranceContract._id)}>
            <LiquidityInsuranceHeader>
              <img alt={aesuranceContract.icon} src={`/images/${aesuranceContract.icon}.png`} />
              <div>
                <LiquidityInsuranceHeaderTitle>{aesuranceContract.name}</LiquidityInsuranceHeaderTitle>
                <LiquidityInsuranceHeaderFunded>
                  {aesuranceContract.funds > 0 ? (
                    <>
                      Funded with AE {aesuranceContract.funds}
                      <img alt="dot" src="/icons/green-dot.svg" />
                    </>
                  ) : (
                    <>
                      No more funds
                      <img alt="dot" src="/icons/red-dot.svg" />
                    </>
                  )}
                </LiquidityInsuranceHeaderFunded>
              </div>
            </LiquidityInsuranceHeader>
            <LiquidityInsuranceReward>{`${commatize(aesuranceContract.APY)}%`}</LiquidityInsuranceReward>
            <LiquidityInsuranceOfPremium>Annualized Yield</LiquidityInsuranceOfPremium>
            <LiquidityInsuranceBuy>Provide Liquidity</LiquidityInsuranceBuy>
          </LiquidityInsurance>
        ))}

        <LiquidityAddInsurance onClick={() => newInsuranceCallback()}>
          <svg>
            <use xlinkHref="/icons/sprites.svg#add" />
          </svg>
          <div>Create new insurance</div>
        </LiquidityAddInsurance>
      </LiquidityInsurances>
    </LiquidityStyled>
  )
}
