import { State } from 'reducers'
import { NewCommentInputs } from 'shared/comment/NewComment'
import { showToaster } from '../Toaster/Toaster.actions'
import { SUCCESS } from '../Toaster/Toaster.constants'
import { redirect } from 'app/App.actions'
import { TargetType } from 'shared/comment/TargetType'

export const NEW_COMMENT_REQUEST = 'NEW_COMMENT_REQUEST'
export const NEW_COMMENT_COMMIT = 'NEW_COMMENT_COMMIT'
export const NEW_COMMENT_ROLLBACK = 'NEW_COMMENT_ROLLBACK'

export const newComment = (
  { title, subjectCategory, content, commentType, targetType, targetId, contentImage }: NewCommentInputs,
  doneId: number,
) => (dispatch: any, getState: any) => {
  const state: State = getState()
  dispatch({
    type: NEW_COMMENT_REQUEST,
    payload: { targetId },
    meta: {
      offline: {
        effect: {
          url: `${process.env.REACT_APP_BACKEND_URL}/comment/new-comment`,
          method: 'POST',
          headers: { Authorization: `Bearer ${state.auth.jwt}` },
          json: { title, subjectCategory, content, commentType, targetType, targetId, contentImage },
        },
        commit: {
          type: NEW_COMMENT_COMMIT,
          meta: {
            doneId,
            thunks:
              commentType === TargetType.POST
                ? [showToaster(SUCCESS, 'Post submitted!', 'Moderators will check it soon'), redirect('/forum')]
                : undefined,
          },
        },
        rollback: { type: NEW_COMMENT_ROLLBACK, meta: { targetId } },
      },
    },
  })
}
