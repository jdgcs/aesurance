import * as PropTypes from 'prop-types'
import * as React from 'react'

import { CommentCounterDown, CommentCounterScore, CommentCounterStyled, CommentCounterUp } from './CommentCounter.style'

type CommentCounterViewProps = {
  count: number
  votedUp: boolean
  votedDown: boolean
  voteUpCallback: () => void
  voteDownCallback: () => void
}

export const CommentCounterView = ({
  count,
  votedUp,
  votedDown,
  voteUpCallback,
  voteDownCallback,
}: CommentCounterViewProps) => {
  let scoreClassName = ''
  if (votedUp) scoreClassName = 'voted-up'
  if (votedDown) scoreClassName = 'voted-down'
  return (
    <CommentCounterStyled>
      <CommentCounterUp onClick={() => voteUpCallback()} className={votedUp ? 'voted-up' : ''} />
      <CommentCounterScore className={scoreClassName}>{count}</CommentCounterScore>
      <CommentCounterDown onClick={() => voteDownCallback()} className={votedDown ? 'voted-down' : ''} />
    </CommentCounterStyled>
  )
}

CommentCounterView.propTypes = {
  count: PropTypes.number.isRequired,
  votedUp: PropTypes.bool,
  votedDown: PropTypes.bool,
  voteUpCallback: PropTypes.func.isRequired,
  voteDownCallback: PropTypes.func.isRequired,
}

CommentCounterView.defaultProps = {}
