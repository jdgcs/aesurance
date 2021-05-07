import { State } from 'reducers'
import { GetCommentInputs } from 'shared/comment/GetComment'

export const GET_POST_REQUEST = 'GET_POST_REQUEST'
export const GET_POST_COMMIT = 'GET_POST_COMMIT'
export const GET_POST_ROLLBACK = 'GET_POST_ROLLBACK'

export const getPost = ({ commentId }: GetCommentInputs) => (dispatch: any, getState: any) => {
  const state: State = getState()
  dispatch({
    type: GET_POST_REQUEST,
    payload: {},
    meta: {
      offline: {
        effect: {
          url: `${process.env.REACT_APP_BACKEND_URL}/comment/get-comment`,
          method: 'POST',
          headers: { Authorization: `Bearer ${state.auth.jwt}` },
          json: { commentId },
        },
        commit: { type: GET_POST_COMMIT },
        rollback: { type: GET_POST_ROLLBACK },
      },
    },
  })
}
