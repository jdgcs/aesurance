import { ago } from 'helpers/ago'
import * as PropTypes from 'prop-types'
import * as React from 'react'
import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { CommentUserVote } from 'shared/comment/CommentUserVote'
import { Inline } from 'styles'

import { CommentCounter } from '../Comment/Comment.components/CommentCounter/CommentCounter.controller'
import { MicroUser } from '../MicroUser/MicroUser.view'
import { MiniUser } from '../MiniUser/MiniUser.view'
import { SoftImage } from '../SoftImage/SoftImage.controller'
// prettier-ignore
import { PostAction, PostActions, PostContainer, PostContent, PostContentText, PostCounter, PostGrid, PostImage, PostInfo, PostMiniImage, PostStyled, PostText, PostUser } from './Post.style'

type PostViewProps = {
  commentUserVote: CommentUserVote
  reportCallback: () => void
  showVotersCallback: () => void
  deployed: boolean
}

export const PostView = ({ commentUserVote, reportCallback, showVotersCallback, deployed }: PostViewProps) => {
  const [isSmall, setIsSmall] = useState<boolean>(false)
  const { comment, user, vote } = commentUserVote

  const callBackWidthRef = useCallback(
    (domNode) => {
      if (domNode && domNode.getBoundingClientRect().width < 700) {
        setIsSmall(true)
      }
    },
    [setIsSmall],
  )

  return (
    <PostStyled ref={callBackWidthRef}>
      <PostGrid isSmall={isSmall}>
        {!isSmall && (
          <Link to={`/forum/${comment._id}/${comment.slug}`}>
            <PostMiniImage>
              <SoftImage alt={comment.slug} src={comment.contentImage} />
            </PostMiniImage>
          </Link>
        )}
        <PostCounter>
          <CommentCounter vote={vote} comment={comment} />
        </PostCounter>
        <PostContainer>
          <PostText>
            <Link to={`/forum/${comment._id}/${comment.slug}`}>{comment.title}</Link>
          </PostText>
          <PostActions>
            <PostAction onClick={() => reportCallback()}>
              <svg>
                <use xlinkHref="/icons/sprites.svg#flag" />
              </svg>
              {!isSmall && <Inline>Report</Inline>}
            </PostAction>
            <PostAction onClick={() => showVotersCallback()}>
              <svg>
                <use xlinkHref="/icons/sprites.svg#people" />
              </svg>
              {!isSmall && <Inline>Voters</Inline>}
            </PostAction>
            {!isSmall && (
              <>
                <PostInfo>
                  <svg>
                    <use xlinkHref="/icons/sprites.svg#comments" />
                  </svg>
                  {comment.replyCount ? `${comment.replyCount} repl${comment.replyCount > 1 ? 'ies' : 'y'}` : '0 reply'}
                </PostInfo>
                <PostInfo>
                  <svg>
                    <use xlinkHref="/icons/sprites.svg#clock" />
                  </svg>
                  {ago(comment.updatedAt)}
                </PostInfo>
              </>
            )}
            {isSmall && <MicroUser user={user} />}
          </PostActions>
        </PostContainer>
        {user && !isSmall && (
          <PostUser>
            <MiniUser user={user} />
          </PostUser>
        )}
      </PostGrid>
      {deployed && (
        <PostContent>
          <PostContentText>{comment.content}</PostContentText>
          {comment.contentImage && <PostImage alt="uploaded" src={comment.contentImage} />}
        </PostContent>
      )}
    </PostStyled>
  )
}

PostView.propTypes = {
  commentUserVote: PropTypes.object.isRequired,
  reportCallback: PropTypes.func.isRequired,
  showVotersCallback: PropTypes.func.isRequired,
  deployed: PropTypes.bool.isRequired,
}

PostView.defaultProps = {}
