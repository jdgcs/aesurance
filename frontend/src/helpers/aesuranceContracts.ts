export type AesuranceContract = {
  _id: number
  name: string
  icon: string
  funds: number
  targetName: string
  reward: number
  APY: number
  condition: string
}

export const aesuranceContracts: AesuranceContract[] = [
  {
    _id: 0,
    name: 'Shipping Insurance',
    icon: 'shipping',
    funds: 4.20,
    targetName: 'Tracking Number',
    reward: 1000,
    APY: 6.04,
    condition: 'In case of lost package, I will receive'
  },
  {
    _id: 1,
    name: 'Life Insurance',
    icon: 'life',
    funds: 1.12,
    targetName: 'Social Security Number',
    reward: 50000,
    APY: 11.21,
    condition: 'In case of death, my family will receive'
  },
  {
    _id: 2,
    name: 'Flight Insurance',
    icon: 'flight',
    funds: 0,
    targetName: 'Flight Number',
    reward: 700,
    APY: 0.39,
    condition: 'In case of canceled flight, I will receive'
  },
]
