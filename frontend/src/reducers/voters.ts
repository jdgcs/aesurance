import { RESET, RESTORE } from 'app/App.actions'
import { GET_DOWNVOTERS_COMMIT, GET_DOWNVOTERS_REQUEST, GET_UPVOTERS_COMMIT, GET_UPVOTERS_REQUEST, HIDE_VOTERS, SHOW_VOTERS } from 'app/App.components/VotersModal/VotersModal.actions'
import { ObjectId } from 'mongodb'
import { PublicUser } from 'shared/user/PublicUser'

export interface VotersState {
  commentId: ObjectId | undefined
  upvoters: PublicUser[]
  pageUpvoters: number
  hasMoreUpvoters: boolean
  downvoters: PublicUser[]
  pageDownvoters: number
  hasMoreDownvoters: boolean
  showing: boolean
}

const votersDefaultState: VotersState = {
  commentId: undefined,
  upvoters: [],
  pageUpvoters: 0,
  hasMoreUpvoters: false,
  downvoters: [],
  pageDownvoters: 0,
  hasMoreDownvoters: false,
  showing: false
}

export function voters(state = votersDefaultState, action: any): VotersState {
  switch (action.type) {
    case RESET: {
      return votersDefaultState
    }
    case RESTORE: {
      return votersDefaultState
    }
    case SHOW_VOTERS: {
      return {
        ...state,
        commentId: action.payload.commentId,
        showing: true
      }
    }
    case HIDE_VOTERS: {
      return votersDefaultState
    }
    case GET_UPVOTERS_REQUEST: {
      return {
        ...state,
        upvoters: action.payload.pageUpvoters === 0 ? [] : state.upvoters,
        pageUpvoters: action.payload.pageUpvoters,
        hasMoreUpvoters: false
      }
    }
    case GET_UPVOTERS_COMMIT: {
      return {
        ...state,
        upvoters: action.meta.pageUpvoters === 0 ? action.payload.upvoters : [...state.upvoters, ...action.payload.upvoters],
        pageUpvoters: action.meta.pageUpvoters,
        hasMoreUpvoters: action.payload.upvoters && action.payload.upvoters.length >= 20
      }
    }
    case GET_DOWNVOTERS_REQUEST: {
      return {
        ...state,
        downvoters: action.payload.pageDownvoters === 0 ? [] : state.downvoters,
        pageDownvoters: action.payload.pageDownvoters,
        hasMoreDownvoters: false
      }
    }
    case GET_DOWNVOTERS_COMMIT: {
      return {
        ...state,
        downvoters: action.meta.pageDownvoters === 0 ? action.payload.downvoters : [...state.downvoters, ...action.payload.downvoters],
        pageDownvoters: action.meta.pageDownvoters,
        hasMoreDownvoters: action.payload.downvoters && action.payload.downvoters.length >= 20
      }
    }
    default:
      return state
  }
}
