import { ObjectId } from 'mongodb'
import * as PropTypes from 'prop-types'
import * as React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from 'reducers'
import { TargetType } from 'shared/comment/TargetType'

import { getComments } from './Comments.actions'
import { CommentsView } from './Comments.view'

type CommentsProps = {
  targetId?: ObjectId
  commentType: TargetType
  targetType: TargetType
  allowNewComment: boolean
}

export const Comments = ({
  targetId,
  commentType = TargetType.COMMENT,
  targetType = TargetType.COMMENT,
  allowNewComment = true,
}: CommentsProps) => {
  const dispatch = useDispatch()
  const loading = useSelector((state: State) => state.loading)
  const { commentUserVotes, hasMore, page } = useSelector((state: State) => state.comments)

  useEffect(() => {
    dispatch(getComments({ targetId, page: 0 }))
  }, [dispatch, targetId])

  const getMoreCallback = (isVisible: boolean) => {
    if (isVisible) dispatch(getComments({ targetId, page: page + 1 }))
  }

  return (
    <CommentsView
      loading={loading}
      commentUserVotes={commentUserVotes}
      allowNewComment={allowNewComment}
      commentType={commentType}
      targetType={targetType}
      targetId={targetId}
      getMoreCallback={getMoreCallback}
      hasMore={hasMore}
    />
  )
}

Comments.propTypes = {
  targetId: PropTypes.string,
  commentType: PropTypes.string,
  targetType: PropTypes.string,
  allowNewComment: PropTypes.bool,
}

Comments.defaultProps = {
  allowNewComment: true,
  commentType: TargetType.COMMENT,
  targetType: TargetType.COMMENT,
}
