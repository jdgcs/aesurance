import { RESET, RESTORE } from 'app/App.actions'
import {  HIDE_INSURANCE, SHOW_INSURANCE } from 'app/App.components/InsuranceModal/InsuranceModal.actions'

export interface InsuranceModalState {
  showing: boolean
  insuranceId?: number
}

const insuranceModalDefaultState: InsuranceModalState = {
  showing: false,
  insuranceId: undefined,
}

export function insuranceModal(state = insuranceModalDefaultState, action: any): InsuranceModalState {
  switch (action.type) {
    case RESET: {
      return insuranceModalDefaultState
    }
    case RESTORE: {
      return insuranceModalDefaultState
    }
    case SHOW_INSURANCE: {
      return {
        ...state,
        insuranceId: action.payload.insuranceId,
        showing: true
      }
    }
    case HIDE_INSURANCE: {
      return insuranceModalDefaultState
    }
    default:
      return state
  }
}
