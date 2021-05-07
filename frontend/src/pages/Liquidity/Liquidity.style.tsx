import styled from 'styled-components/macro'
import { FullPage, primaryColor, subTextColor, textColor, backgroundColorLight } from 'styles'

export const LiquidityStyled = styled(FullPage)``

export const LiquidityInsurances = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
  width: 100%;
`

export const LiquidityInsurance = styled.div`
  cursor: pointer;
  background-color: ${backgroundColorLight};
  border-radius: 10px;
  height: 330px;
  padding: 25px;

  transition: transform 0.2s;

  &:hover {
    transform: scale(1.04);
  }
`

export const LiquidityAddInsurance = styled(LiquidityInsurance)`
  text-align: center;
  font-size: 16px;
  font-weight: bold;

  > div {
    margin-top: 24px;
  }

  > svg {
    margin-top: 80px;
    height: 70px;
    width: 70px;
    stroke: white;
  }
`

export const LiquidityInsuranceImage = styled.img`
  width: 100%;
  border-radius: 5px;
`

export const LiquidityInsuranceFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 6px 0 6px 0;

  > div:nth-child(1) {
    font-size: 16px;
    color: ${primaryColor};
    text-align: left;
    font-weight: bold;
  }

  > div:nth-child(2) {
    font-size: 16px;
    color: ${textColor};
    text-align: right;
  }

  > div:nth-child(3) {
    font-size: 12px;
    color: ${subTextColor};
    text-align: left;
  }

  > div:nth-child(4) {
    font-size: 12px;
    color: ${subTextColor};
    text-align: right;
  }
`

export const LiquidityInsuranceHeader = styled.div`
  display: grid;
  grid-template-columns: 60px auto;
  grid-gap: 25px;

  > img {
    width: 60px;
    height: 60px;
  }
`

export const LiquidityInsuranceHeaderTitle = styled.div`
  margin-top: 11px;
  font-size: 18px;
  font-weight: bold;
`

export const LiquidityInsuranceHeaderFunded = styled.div`
  color: ${subTextColor};

  > img {
    vertical-align: text-bottom;
    margin-left: 5px;
  }
`

export const LiquidityInsuranceReward = styled.div`
  font-size: 48px;
  font-weight: bold;
  letter-spacing: 1px;
  background: -webkit-linear-gradient(45deg, #f23ce3, #6d53f9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin-top: 45px;
`

export const LiquidityInsuranceOfPremium = styled.div`
  color: ${subTextColor};
  text-align: center;
  font-weight: bold;
`

export const LiquidityInsuranceBuy = styled.div`
  border: 1px solid white;
  font-size: 16px;
  border-radius: 40px;
  font-weight: bold;
  text-align: center;
  height: 36px;
  line-height: 36px;
  margin: 60px auto 0 auto;
  width: 210px;
`
