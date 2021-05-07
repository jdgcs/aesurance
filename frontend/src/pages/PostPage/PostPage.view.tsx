import { Comments } from 'app/App.components/Comments/Comments.controller'
import { Post } from 'app/App.components/Post/Post.controller'
import * as PropTypes from 'prop-types'
import * as React from 'react'
import { Link } from 'react-router-dom'
import { CommentUserVote } from 'shared/comment/CommentUserVote'
import { TargetType } from 'shared/comment/TargetType'

import { PostPageMeta } from './PostPage.meta'
import { PostPageBack, PostPageStyled } from './PostPage.style'

type PostPageViewProps = {
  loading: boolean
  commentUserVote?: CommentUserVote
}

export const PostPageView = ({ loading, commentUserVote }: PostPageViewProps) => {
  return (
    <PostPageStyled>
      <PostPageMeta commentTitle={commentUserVote?.comment?.title} commentContent={commentUserVote?.comment?.content} />
      <Link to="/forum">
        <PostPageBack>
          <svg>
            <use xlinkHref="/icons/sprites.svg#back-arrow" />
          </svg>
          Back to list
        </PostPageBack>
      </Link>
      <Post commentUserVote={commentUserVote} deployed />
      <h2>COMMENTS</h2>
      <Comments targetId={commentUserVote?.comment._id} targetType={TargetType.POST} />
    </PostPageStyled>
  )
}

PostPageView.propTypes = {
  loading: PropTypes.bool,
  commentUserVote: PropTypes.object.isRequired,
}

PostPageView.defaultProps = {
  loading: false,
}
