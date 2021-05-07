import { RESET, RESTORE } from 'app/App.actions'
import { HIDE_REPORT, SEND_REPORT_COMMIT, SHOW_REPORT } from 'app/App.components/ReportModal/ReportModal.actions'
import { ObjectId } from 'mongodb'
import { TargetType } from 'shared/comment/TargetType'

export interface ReportState {
  targetId?: ObjectId
  targetType?: TargetType
  showing: boolean
  done: boolean
}

const reportDefaultState: ReportState = {
  targetId: undefined,
  targetType: undefined,
  showing: false,
  done: false,
}

export function report(state = reportDefaultState, action: any): ReportState {
  switch (action.type) {
    case RESET: {
      return reportDefaultState
    }
    case RESTORE: {
      return reportDefaultState
    }
    case SHOW_REPORT: {
      return {
        targetId: action.payload.targetId,
        targetType: action.payload.targetType,
        showing: true,
        done: false,
      }
    }
    case HIDE_REPORT: {
      return reportDefaultState
    }
    case SEND_REPORT_COMMIT: {
      return reportDefaultState
    }
    default:
      return state
  }
}
