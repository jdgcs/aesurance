import { State } from 'reducers'

export const GET_STATS_REQUEST = 'GET_STATS_REQUEST'
export const GET_STATS_COMMIT = 'GET_STATS_COMMIT'
export const GET_STATS_ROLLBACK = 'GET_STATS_ROLLBACK'

export const getStats = () => (dispatch: any, getState: any) => {
  const state: State = getState()
  dispatch({
    type: GET_STATS_REQUEST,
    payload: {},
    meta: {
      offline: {
        effect: {
          url: `${process.env.REACT_APP_BACKEND_URL}/stat/get-stats`,
          method: 'GET',
          headers: { Authorization: `Bearer ${state.auth.jwt}` },
        },
        commit: { type: GET_STATS_COMMIT },
        rollback: { type: GET_STATS_ROLLBACK },
      },
    },
  })
}
