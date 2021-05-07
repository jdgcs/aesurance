import * as PropTypes from 'prop-types'
import * as React from 'react'
import { useDispatch } from 'react-redux'
import { CommentUserVote } from 'shared/comment/CommentUserVote'
import { TargetType } from 'shared/comment/TargetType'

import { showReport } from '../ReportModal/ReportModal.actions'
import { showVoters } from '../VotersModal/VotersModal.actions'
import { PostView } from './Post.view'

type PostProps = {
  commentUserVote?: CommentUserVote
  deployed?: boolean
}

export const Post = ({ commentUserVote, deployed = false }: PostProps) => {
  const dispatch = useDispatch()

  const reportCallback = () => {
    if (commentUserVote?.comment?._id) dispatch(showReport(commentUserVote.comment._id, TargetType.POST))
  }

  const showVotersCallback = () => {
    if (commentUserVote?.comment?._id) dispatch(showVoters(commentUserVote.comment._id))
  }

  return (
    <>
      {commentUserVote ? (
        <PostView
          commentUserVote={commentUserVote}
          reportCallback={reportCallback}
          showVotersCallback={showVotersCallback}
          deployed={deployed}
        />
      ) : (
        <div>Post not found</div>
      )}
    </>
  )
}

Post.propTypes = {
  commentUserVote: PropTypes.object,
  deployed: PropTypes.bool,
}

Post.defaultProps = {
  deployed: false,
}
