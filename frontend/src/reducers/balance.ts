import { RESET, RESTORE } from 'app/App.actions'

export type BalanceState = number | null

const balanceDefaultState: BalanceState = null

export function balance(state = balanceDefaultState, action: any): BalanceState {
  switch (action.type) {
    case RESET: {
      return balanceDefaultState
    }
    case RESTORE: {
      return balanceDefaultState
    }
    default:
      return state
  }
}
