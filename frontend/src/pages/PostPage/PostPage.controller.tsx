import * as React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from 'reducers'
import { useParams } from 'react-router-dom'
import { getPost } from './PostPage.actions'
import { PostPageView } from './PostPage.view'

export const PostPage = () => {
  const dispatch = useDispatch()
  const loading = useSelector((state: State) => state.loading)
  let { commentId } = useParams()
  const commentUserVote = useSelector((state: State) => state.posts.commentUserVotes[commentId])

  useEffect(() => {
    dispatch(getPost({ commentId }))
  }, [dispatch])

  return <PostPageView loading={loading} commentUserVote={commentUserVote} />
}
