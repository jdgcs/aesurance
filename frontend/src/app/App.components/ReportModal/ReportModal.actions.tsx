import { showToaster } from 'app/App.components/Toaster/Toaster.actions'
import { SUCCESS } from 'app/App.components/Toaster/Toaster.constants'
import { ObjectId } from 'mongodb'
import { State } from 'reducers'
import { TargetType } from 'shared/comment/TargetType'
import { SendReportInputs } from 'shared/report/SendReport'

export const SHOW_REPORT = 'SHOW_REPORT'
export const showReport = (targetId: ObjectId, targetType: TargetType) => (dispatch: any) => {
  dispatch({
    type: SHOW_REPORT,
    payload: { targetId, targetType },
  })
}

export const HIDE_REPORT = 'HIDE_REPORT'
export const hideReport = () => (dispatch: any) => {
  dispatch({
    type: HIDE_REPORT,
  })
}
export const SEND_REPORT_REQUEST = 'SEND_REPORT_REQUEST'
export const SEND_REPORT_COMMIT = 'SEND_REPORT_COMMIT'
export const SEND_REPORT_ROLLBACK = 'SEND_REPORT_ROLLBACK'

export const sendReport = ({ targetId, targetType, reason }: SendReportInputs) => (dispatch: any, getState: any) => {
  const state: State = getState()
  dispatch({
    type: SEND_REPORT_REQUEST,
    payload: {},
    meta: {
      offline: {
        effect: {
          url: `${process.env.REACT_APP_BACKEND_URL}/report/send-report`,
          method: 'POST',
          headers: { Authorization: `Bearer ${state.auth.jwt}` },
          json: { targetId, targetType, reason },
        },
        commit: {
          type: SEND_REPORT_COMMIT,
          meta: {
            thunks: [showToaster(SUCCESS, 'Report sent', 'Moderator will check it asap')],
          },
        },
        rollback: { type: SEND_REPORT_ROLLBACK },
      },
    },
  })
}
