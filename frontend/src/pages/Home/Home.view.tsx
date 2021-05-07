import { commatize } from 'helpers/commatize'
import { aesuranceContracts } from 'helpers/aesuranceContracts'
import * as React from 'react'
import { useEffect } from 'react'

// prettier-ignore
import { HomeAddInsurance, HomeInsurance, HomeInsuranceBuy, HomeInsuranceHeader, HomeInsuranceHeaderFunded, HomeInsuranceHeaderTitle, HomeInsuranceOfPremium, HomeInsuranceReward, HomeInsurances, HomeStyled } from './Home.style'

type HomeViewProps = {
  showInsuranceCallback: (insuranceId: number) => void
  newInsuranceCallback: () => void
}

export const HomeView = ({ showInsuranceCallback, newInsuranceCallback }: HomeViewProps) => {
  useEffect(() => {
    // const dataKey = contract.methods['getAesurances'].cacheCall()
  }, [])

  return (
    <HomeStyled>
      <h1>Insurance Marketplace</h1>

      <HomeInsurances>
        {aesuranceContracts.map((aesuranceContract: any) => (
          <HomeInsurance key={aesuranceContract._id} onClick={() => showInsuranceCallback(aesuranceContract._id)}>
            <HomeInsuranceHeader>
              <img alt={aesuranceContract.icon} src={`/images/${aesuranceContract.icon}.png`} />
              <div>
                <HomeInsuranceHeaderTitle>{aesuranceContract.name}</HomeInsuranceHeaderTitle>
                <HomeInsuranceHeaderFunded>
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
                </HomeInsuranceHeaderFunded>
              </div>
            </HomeInsuranceHeader>
            <HomeInsuranceReward>{`${commatize(aesuranceContract.reward)}%`}</HomeInsuranceReward>
            <HomeInsuranceOfPremium>of premium</HomeInsuranceOfPremium>
            <HomeInsuranceBuy>Purchase Insurance</HomeInsuranceBuy>
          </HomeInsurance>
        ))}

        <HomeAddInsurance onClick={() => newInsuranceCallback()}>
          <svg>
            <use xlinkHref="/icons/sprites.svg#add" />
          </svg>
          <div>Create new insurance</div>
        </HomeAddInsurance>
      </HomeInsurances>
    </HomeStyled>
  )
}
