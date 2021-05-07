import * as PropTypes from 'prop-types'
import * as React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { TargetType } from 'shared/comment/TargetType'

import { NewComment } from '../NewComment/NewComment.controller'
import { showReport } from '../ReportModal/ReportModal.actions'
import { showVoters } from '../VotersModal/VotersModal.actions'
import { CommentReply } from './Comment.style'
import { CommentView } from './Comment.view'
import { CommentUserVote } from 'shared/comment/CommentUserVote'

type CommentProps = {
  commentUserVote: CommentUserVote
  depth?: number
}

export const Comment = ({ commentUserVote, depth = 0 }: CommentProps) => {
  const dispatch = useDispatch()
  const [replying, setReplying] = useState(false)
  const [expanded, setExpanded] = useState(true)

  const replyCallback = () => {
    setReplying(true)
  }

  const expandCallback = (expandState: boolean) => {
    setExpanded(expandState)
  }

  const reportCallback = () => {
    dispatch(showReport(commentUserVote.comment._id, TargetType.COMMENT))
  }

  const showVotersCallback = () => {
    dispatch(showVoters(commentUserVote.comment._id))
  }

  return (
    <>
      <CommentView
        commentUserVote={commentUserVote}
        expanded={expanded}
        replyCallback={replyCallback}
        expandCallback={expandCallback}
        reportCallback={reportCallback}
        showVotersCallback={showVotersCallback}
        depth={depth}
      />
      {replying && (
        <CommentReply>
          <NewComment
            commentType={TargetType.COMMENT}
            targetType={TargetType.COMMENT}
            targetId={commentUserVote.comment._id}
          />
        </CommentReply>
      )}
    </>
  )
}

Comment.propTypes = {
  commentUserVote: PropTypes.object.isRequired,
  depth: PropTypes.number,
}

Comment.defaultProps = {
  depth: 0,
}
