import { RESET, RESTORE } from 'app/App.actions'
import { HIDE_SELL_MODAL, SHOW_SELL_MODAL } from 'app/App.components/AddModal/AddModal.actions'
import { ObjectId } from 'mongodb'

export interface SellModalState {
  showing: boolean
  insuranceId?: ObjectId
}

const sellModalDefaultState: SellModalState = {
  showing: false,
  insuranceId: undefined
}

export function sellModal(state = sellModalDefaultState, action: any): SellModalState {
  switch (action.type) {
    case RESET: {
      return sellModalDefaultState
    }
    case RESTORE: {
      return sellModalDefaultState
    }
    case SHOW_SELL_MODAL: {
      return {
        ...state,
        showing: true
      }
    }
    case HIDE_SELL_MODAL: {
      return sellModalDefaultState
    }
    default:
      return state
  }
}
