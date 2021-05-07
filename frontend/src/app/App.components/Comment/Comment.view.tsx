import * as PropTypes from 'prop-types'
import * as React from 'react'
import { useCallback, useState } from 'react'

import { MiniUser } from '../MiniUser/MiniUser.view'
import { CommentCounter } from './Comment.components/CommentCounter/CommentCounter.controller'
// prettier-ignore
import { CommentAction, CommentActions, CommentContent, CommentExpand, CommentGrid, CommentImage, CommentInfo, CommentStyled, CommentText } from './Comment.style'
import { Inline } from 'styles'
import { ago } from 'helpers/ago'
import { MicroUser } from '../MicroUser/MicroUser.view'
import { CommentUserVote } from 'shared/comment/CommentUserVote'

type CommentViewProps = {
  commentUserVote: CommentUserVote
  expanded: boolean
  replyCallback: () => void
  expandCallback: (expandState: boolean) => void
  reportCallback: () => void
  showVotersCallback: () => void
  depth: number
}

export const CommentView = ({
  commentUserVote,
  expanded,
  replyCallback,
  expandCallback,
  reportCallback,
  showVotersCallback,
  depth,
}: CommentViewProps) => {
  const [isSmall, setIsSmall] = useState<boolean>(false)
  const { comment, user, vote } = commentUserVote

  const callBackHeightRef = useCallback(
    (domNode) => {
      if (domNode && domNode.getBoundingClientRect().height > 400) {
        expandCallback(false)
      }
    },
    [expandCallback],
  )

  const callBackWidthRef = useCallback(
    (domNode) => {
      if (domNode && domNode.getBoundingClientRect().width < 700) {
        setIsSmall(true)
      }
    },
    [setIsSmall],
  )

  return (
    <CommentStyled ref={callBackWidthRef}>
      <CommentGrid isSmall={isSmall}>
        <CommentCounter vote={vote} comment={comment} />
        <CommentContent>
          <CommentText expanded={expanded} ref={callBackHeightRef}>
            {comment.content}
          </CommentText>
          {comment.contentImage && <CommentImage alt="uploaded" src={comment.contentImage} />}
          {!expanded && <CommentExpand onClick={() => expandCallback(true)}>Show More ...</CommentExpand>}
          <CommentActions>
            {depth < 9 && (
              <CommentAction onClick={() => replyCallback()}>
                <svg>
                  <use xlinkHref="/icons/sprites.svg#reply" />
                </svg>
                {!isSmall && <Inline>Reply</Inline>}
              </CommentAction>
            )}
            <CommentAction onClick={() => reportCallback()}>
              <svg>
                <use xlinkHref="/icons/sprites.svg#flag" />
              </svg>
              {!isSmall && <Inline>Report</Inline>}
            </CommentAction>
            <CommentAction onClick={() => showVotersCallback()}>
              <svg>
                <use xlinkHref="/icons/sprites.svg#people" />
              </svg>
              {!isSmall && <Inline>Voters</Inline>}
            </CommentAction>
            {!isSmall && (
              <CommentInfo>
                <svg>
                  <use xlinkHref="/icons/sprites.svg#clock" />
                </svg>
                {ago(comment.createdAt)}
              </CommentInfo>
            )}
            {isSmall && <MicroUser user={user} />}
          </CommentActions>
        </CommentContent>
        {user && !isSmall && <MiniUser user={user} />}
      </CommentGrid>
    </CommentStyled>
  )
}

CommentView.propTypes = {
  commentUserVote: PropTypes.object.isRequired,
  expanded: PropTypes.bool,
  replyCallback: PropTypes.func.isRequired,
  expandCallback: PropTypes.func.isRequired,
  reportCallback: PropTypes.func.isRequired,
  showVotersCallback: PropTypes.func.isRequired,
  depth: PropTypes.number.isRequired,
}

CommentView.defaultProps = {
  expanded: false,
}
