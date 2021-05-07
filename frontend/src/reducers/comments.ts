import { RESET, RESTORE } from 'app/App.actions'

import { GET_COMMENTS_COMMIT, GET_COMMENTS_REQUEST } from '../app/App.components/Comments/Comments.actions'
import { NEW_COMMENT_COMMIT } from '../app/App.components/NewComment/NewComment.actions'
import { TargetType } from 'shared/comment/TargetType'
import { CommentUserVote } from 'shared/comment/CommentUserVote'
import { arrayToObjects } from 'helpers/arrayToObjects'

export interface CommentsState {
  newCommentsDoneIds: number[]
  commentUserVotes: Record<string, CommentUserVote>
  page: number
  hasMore: boolean
}

const commentsDefaultState: CommentsState = {
  newCommentsDoneIds: [],
  commentUserVotes: {},
  page: 0,
  hasMore: false,
}

export function comments(state = commentsDefaultState, action: any): CommentsState {
  switch (action.type) {
    case RESET: {
      return commentsDefaultState
    }
    case RESTORE: {
      return commentsDefaultState
    }
    case GET_COMMENTS_REQUEST: {
      return {
        ...state,
        page: action.payload.page,
        hasMore: false,
      }
    }
    case GET_COMMENTS_COMMIT: {
      return {
        ...state,
        commentUserVotes: {
          ...state.commentUserVotes,
          ...arrayToObjects(action.payload.commentUserVotes, 'comment', '_id'),
        },
        page: action.meta.page,
        hasMore: action.payload.commentUserVotes?.length >= 20,
      }
    }
    case NEW_COMMENT_COMMIT: {
      if (action.payload.commentUserVote.comment?.commentType === TargetType.COMMENT)
        return {
          ...state,
          newCommentsDoneIds: [action.meta.doneId, ...state.newCommentsDoneIds],
          commentUserVotes: {
            [action.payload.commentUserVote.comment._id]: action.payload.commentUserVote,
            ...state.commentUserVotes,
          },
        }
      else return state
    }
    default:
      return state
  }
}
