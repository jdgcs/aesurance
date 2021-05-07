import { State } from 'reducers'
import { GetCommentsInputs } from 'shared/comment/GetComments'
import { TargetType } from 'shared/comment/TargetType'

export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST'
export const GET_POSTS_COMMIT = 'GET_POSTS_COMMIT'
export const GET_POSTS_ROLLBACK = 'GET_POSTS_ROLLBACK'

export const getPosts = ({ subjectCategory, search, page }: GetCommentsInputs) => (dispatch: any, getState: any) => {
  const state: State = getState()
  dispatch({
    type: GET_POSTS_REQUEST,
    payload: { search, page, subjectCategory },
    meta: {
      offline: {
        effect: {
          url: `${process.env.REACT_APP_BACKEND_URL}/comment/get-comments`,
          method: 'POST',
          headers: { Authorization: `Bearer ${state.auth.jwt}` },
          json: { commentType: TargetType.POST, search, page, subjectCategory },
        },
        commit: { type: GET_POSTS_COMMIT, meta: { search, page, subjectCategory } },
        rollback: { type: GET_POSTS_ROLLBACK },
      },
    },
  })
}
