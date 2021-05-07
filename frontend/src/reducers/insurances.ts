import { RESET, RESTORE } from 'app/App.actions'
import { Insurance } from 'shared/insurance/Insurance'

export type InsurancesState = Insurance[]

const insurancesDefaultState: InsurancesState = []

export function insurances(state = insurancesDefaultState, action: any): InsurancesState {
  switch (action.type) {
    case RESET: {
      return insurancesDefaultState
    }
    case RESTORE: {
      return state
    }
    default:
      return state
  }
}
