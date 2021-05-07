import { RESET, RESTORE } from 'app/App.actions'
import { NEW_COMMENT_COMMIT } from 'app/App.components/NewComment/NewComment.actions'
import { arrayToObjects } from 'helpers/arrayToObjects'
import { GET_POSTS_COMMIT, GET_POSTS_REQUEST } from 'pages/Forum/Forum.actions'
import { GET_POST_COMMIT } from 'pages/PostPage/PostPage.actions'
import { CommentUserVote } from 'shared/comment/CommentUserVote'
import { TargetType } from 'shared/comment/TargetType'

export interface PostsState {
  commentUserVotes: Record<string, CommentUserVote>
  page: number
  hasMore: boolean
}

const postsDefaultState: PostsState = {
  commentUserVotes: {},
  page: 0,
  hasMore: false,
}

export function posts(state = postsDefaultState, action: any): PostsState {
  switch (action.type) {
    case RESET: {
      return postsDefaultState
    }
    case RESTORE: {
      return state
    }
    case GET_POSTS_REQUEST: {
      return {
        ...state,
        page: action.payload.page,
        hasMore: false,
      }
    }
    case GET_POSTS_COMMIT: {
      return {
        commentUserVotes:
          action.meta.page === 0
            ? arrayToObjects(action.payload.commentUserVotes, 'comment', '_id')
            : {
                ...state.commentUserVotes,
                ...arrayToObjects(action.payload.commentUserVotes, 'comment', '_id'),
              },
        page: action.meta.page,
        hasMore: action.payload.commentUserVotes?.length >= 20,
      }
    }
    case GET_POST_COMMIT: {
      return {
        ...state,
        commentUserVotes: {
          ...state.commentUserVotes,
          [action.payload.commentUserVote.comment._id]: action.payload.commentUserVote,
        },
      }
    }
    case NEW_COMMENT_COMMIT: {
      if (action.payload.commentUserVote.comment?.commentType === TargetType.POST)
        return {
          ...state,
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
