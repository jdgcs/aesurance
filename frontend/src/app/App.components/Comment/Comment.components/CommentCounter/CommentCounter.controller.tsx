import * as PropTypes from 'prop-types'
import * as React from 'react'
import { useDispatch } from 'react-redux'
import { Comment } from 'shared/comment/Comment'
import { Vote } from 'shared/vote/Vote'
import { VoteDirection } from 'shared/vote/VoteDirection'

import { sendVote } from './CommentCounter.actions'
import { CommentCounterView } from './CommentCounter.view'

type CommentCounterProps = {
  vote?: Vote
  comment: Comment
}

export const CommentCounter = ({ vote, comment }: CommentCounterProps) => {
  const dispatch = useDispatch()
  const [votedUp, setVotedUp] = React.useState(vote?.voteDirection === VoteDirection.UP)
  const [votedDown, setVotedDown] = React.useState(vote?.voteDirection === VoteDirection.DOWN)
  const [count, setCount] = React.useState((comment?.upCount || 0) - (comment?.downCount || 0))

  const voteUpCallback = async () => {
    if (!votedUp) {
      if (votedDown) {
        setVotedUp(true)
        setVotedDown(false)
        setCount(count + 2)
      } else {
        setVotedUp(true)
        setCount(count + 1)
      }
      dispatch(sendVote({ commentId: comment._id, voteDirection: VoteDirection.UP }))
    }
  }

  const voteDownCallback = async () => {
    if (!votedDown) {
      if (votedUp) {
        setVotedDown(true)
        setVotedUp(false)
        setCount(count - 2)
      } else {
        setVotedDown(true)
        setCount(count - 1)
      }
      dispatch(sendVote({ commentId: comment._id, voteDirection: VoteDirection.DOWN }))
    }
  }

  return (
    <CommentCounterView
      count={count}
      votedUp={votedUp}
      votedDown={votedDown}
      voteUpCallback={voteUpCallback}
      voteDownCallback={voteDownCallback}
    />
  )
}

CommentCounter.propTypes = {
  vote: PropTypes.object,
  comment: PropTypes.object.isRequired,
}

CommentCounter.defaultProps = {}
