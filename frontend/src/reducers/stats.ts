import { RESET, RESTORE } from 'app/App.actions'
import { GET_STATS_COMMIT } from 'pages/Forum/Forum.components/ForumCategories/ForumCategories.actions'
import { Stat } from 'shared/stat/Stat'

export interface StatsState {
  stats: Stat[]
}

const statsDefaultState: StatsState = {
  stats: [],
}

export function stats(state = statsDefaultState, action: any): StatsState {
  switch (action.type) {
    case RESET: {
      return statsDefaultState
    }
    case RESTORE: {
      return state
    }
    case GET_STATS_COMMIT: {
      return {
        stats: action.payload.stats,
      }
    }
    default:
      return state
  }
}
