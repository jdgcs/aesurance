import { Button } from 'app/App.components/Button/Button.controller'
import { Input } from 'app/App.components/Input/Input.controller'
import { Post } from 'app/App.components/Post/Post.controller'
import * as PropTypes from 'prop-types'
import * as React from 'react'
import { Link } from 'react-router-dom'
import VisibilitySensor from 'react-visibility-sensor'
import { CommentUserVote } from 'shared/comment/CommentUserVote'
import { SubjectCategory } from 'shared/comment/SubjectCategory'
import { backgroundColorDark, GridTitle, PrimaryText } from 'styles'

import { ForumCategories } from './Forum.components/ForumCategories/ForumCategories.controller'
import { ForumMeta } from './Forum.meta'
// prettier-ignore
import { ForumCard, ForumGrid, ForumNew, ForumSideBar, ForumStyled } from './Forum.style'

type ForumViewProps = {
  loading: boolean
  commentUserVotes: Record<string, CommentUserVote>
  hasMore: boolean
  getMoreCallback: (isVisible: boolean) => void
  search: string
  searchCallback: (search: string) => void
}

export const ForumView = ({
  loading,
  search,
  searchCallback,
  commentUserVotes,
  hasMore,
  getMoreCallback,
}: ForumViewProps) => {
  return (
    <ForumStyled>
      <ForumMeta />
      <ForumGrid>
        <div>
          <GridTitle>
            <h1>Latest Posts</h1>
            <Link to="/new-post">
              <Button text="New post" icon="plus-card" />
            </Link>
          </GridTitle>
          {Object.values(commentUserVotes).map((commentUserVote: CommentUserVote) => (
            <div key={(commentUserVote.comment?._id as unknown) as string}>
              <Post commentUserVote={commentUserVote} />
            </div>
          ))}
          {hasMore && (
            <VisibilitySensor onChange={(isVisible: boolean) => getMoreCallback(isVisible)}>
              <div>Loading more...</div>
            </VisibilitySensor>
          )}
        </div>
        <ForumSideBar>
          <h1>Search</h1>
          <ForumCard>
            <Input
              icon="search"
              name="search"
              placeholder="Search forum"
              type="text"
              onChange={(e) => searchCallback(e.target.value)}
              onBlur={() => {}}
              value={search}
            />
          </ForumCard>
          <ForumCategories />
        </ForumSideBar>
      </ForumGrid>
    </ForumStyled>
  )
}

ForumView.propTypes = {
  loading: PropTypes.bool,
  commentUserVotes: PropTypes.object.isRequired,
  hasMore: PropTypes.bool.isRequired,
  getMoreCallback: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  searchCallback: PropTypes.func.isRequired,
}

ForumView.defaultProps = {
  loading: false,
}
