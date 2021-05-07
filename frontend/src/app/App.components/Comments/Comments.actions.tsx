import { State } from 'reducers'
import { GetCommentsInputs } from 'shared/comment/GetComments'

export const GET_COMMENTS_REQUEST = 'GET_COMMENTS_REQUEST'
export const GET_COMMENTS_COMMIT = 'GET_COMMENTS_COMMIT'
export const GET_COMMENTS_ROLLBACK = 'GET_COMMENTS_ROLLBACK'

export const getComments = ({ targetId, page }: GetCommentsInputs) => (dispatch: any, getState: any) => {
  const state: State = getState()
  dispatch({
    type: GET_COMMENTS_REQUEST,
    payload: { page },
    meta: {
      offline: {
        effect: {
          url: `${process.env.REACT_APP_BACKEND_URL}/comment/get-comments`,
          method: 'POST',
          headers: { Authorization: `Bearer ${state.auth.jwt}` },
          json: { targetId, page },
        },
        commit: { type: GET_COMMENTS_COMMIT, meta: { page } },
        rollback: { type: GET_COMMENTS_ROLLBACK },
      },
    },
  })
}
