import { Comment } from 'app/App.components/Comment/Comment.controller'
import { ObjectId } from 'mongodb'
import * as PropTypes from 'prop-types'
import * as React from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import { TargetType } from 'shared/comment/TargetType'

import { CommentReply } from '../Comment/Comment.style'
import { NewComment } from '../NewComment/NewComment.controller'
import { CommentsStyled } from './Comments.style'
import { CommentUserVote } from 'shared/comment/CommentUserVote'

type CommentsViewProps = {
  loading: boolean
  allowNewComment: boolean
  commentType: TargetType
  targetType: TargetType
  targetId?: ObjectId
  commentUserVotes: Record<string, CommentUserVote>
  hasMore: boolean
  getMoreCallback: (isVisible: boolean) => void
}

export const CommentsView = ({
  loading,
  allowNewComment,
  targetType,
  commentType,
  targetId,
  commentUserVotes,
  hasMore,
  getMoreCallback,
}: CommentsViewProps) => {
  const renderReplies = (targetId: ObjectId | undefined, depth: number) => {
    if (depth < 10) {
      return (
        <CommentReply>
          {Object.values(commentUserVotes)
            .filter((commentUserVote) => commentUserVote.comment.targetId === targetId)
            .map((commentUserVote) => (
              <div key={(commentUserVote.comment?._id as unknown) as string}>
                <Comment commentUserVote={commentUserVote} depth={depth} />
                {renderReplies(commentUserVote.comment._id, depth + 1)}
              </div>
            ))}
        </CommentReply>
      )
    }
    return <div />
  }

  return (
    <CommentsStyled>
      {allowNewComment && <NewComment commentType={commentType} targetType={targetType} targetId={targetId} />}
      {Object.values(commentUserVotes)
        .filter((commentUserVote) => commentUserVote.comment.targetId === targetId)
        .map((commentUserVote) => (
          <div key={(commentUserVote.comment?._id as unknown) as string}>
            <Comment commentUserVote={commentUserVote} />
            {renderReplies(commentUserVote.comment._id, 1)}
          </div>
        ))}
      {hasMore && (
        <VisibilitySensor onChange={(isVisible: boolean) => getMoreCallback(isVisible)}>
          <div>Loading more...</div>
        </VisibilitySensor>
      )}
    </CommentsStyled>
  )
}

CommentsView.propTypes = {
  loading: PropTypes.bool,
  commentType: PropTypes.string.isRequired,
  targetType: PropTypes.string.isRequired,
  targetId: PropTypes.string.isRequired,
  allowNewComment: PropTypes.bool.isRequired,
  commentUserVotes: PropTypes.object.isRequired,
  hasMore: PropTypes.bool.isRequired,
  getMoreCallback: PropTypes.func.isRequired,
}

CommentsView.defaultProps = {
  loading: false,
}
