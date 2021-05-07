import { ObjectId } from 'mongodb'
import { State } from 'reducers'
import { GetDownvotersInputs } from 'shared/vote/GetDownvoters'
import { GetUpvotersInputs } from 'shared/vote/GetUpvoters'

export const SHOW_VOTERS = 'SHOW_VOTERS'
export const HIDE_VOTERS = 'HIDE_VOTERS'

export const showVoters = (commentId: ObjectId) => (dispatch: any) => {
  dispatch({
    type: SHOW_VOTERS,
    payload: { commentId },
  })
}

export const hideVoters = () => (dispatch: any) => {
  dispatch({
    type: HIDE_VOTERS,
  })
}

export const GET_UPVOTERS_REQUEST = 'GET_UPVOTERS_REQUEST'
export const GET_UPVOTERS_COMMIT = 'GET_UPVOTERS_COMMIT'
export const GET_UPVOTERS_ROLLBACK = 'GET_UPVOTERS_ROLLBACK'

export const getUpvoters = ({ commentId, pageUpvoters }: GetUpvotersInputs) => (dispatch: any, getState: any) => {
  const state: State = getState()
  dispatch({
    type: GET_UPVOTERS_REQUEST,
    payload: { pageUpvoters },
    meta: {
      offline: {
        effect: {
          url: `${process.env.REACT_APP_BACKEND_URL}/vote/get-upvoters`,
          method: 'POST',
          headers: { Authorization: `Bearer ${state.auth.jwt}` },
          json: { commentId, pageUpvoters },
        },
        commit: { type: GET_UPVOTERS_COMMIT, meta: { pageUpvoters } },
        rollback: { type: GET_UPVOTERS_ROLLBACK },
      },
    },
  })
}

export const GET_DOWNVOTERS_REQUEST = 'GET_DOWNVOTERS_REQUEST'
export const GET_DOWNVOTERS_COMMIT = 'GET_DOWNVOTERS_COMMIT'
export const GET_DOWNVOTERS_ROLLBACK = 'GET_DOWNVOTERS_ROLLBACK'

export const getDownvoters = ({ commentId, pageDownvoters }: GetDownvotersInputs) => (dispatch: any, getState: any) => {
  const state: State = getState()
  dispatch({
    type: GET_DOWNVOTERS_REQUEST,
    payload: { pageDownvoters },
    meta: {
      offline: {
        effect: {
          url: `${process.env.REACT_APP_BACKEND_URL}/vote/get-downvoters`,
          method: 'POST',
          headers: { Authorization: `Bearer ${state.auth.jwt}` },
          json: { commentId, pageDownvoters },
        },
        commit: { type: GET_DOWNVOTERS_COMMIT, meta: { pageDownvoters } },
        rollback: { type: GET_DOWNVOTERS_ROLLBACK },
      },
    },
  })
}
