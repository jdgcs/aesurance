import * as React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from 'reducers'

import { getPosts } from './Forum.actions'
import { ForumView } from './Forum.view'

export const Forum = () => {
  const dispatch = useDispatch()
  const loading = useSelector((state: State) => state.loading)
  const { commentUserVotes, hasMore, page } = useSelector((state: State) => state.posts)
  const [search, setSearch] = useState('')

  useEffect(() => {
    dispatch(getPosts({ page: 0 }))
  }, [dispatch])

  const searchCallback = (search: string) => {
    setSearch(search)
    dispatch(getPosts({ search, page }))
  }

  const getMoreCallback = (isVisible: boolean) => {
    if (isVisible) dispatch(getPosts({ search, page: page + 1 }))
  }

  return (
    <ForumView
      loading={loading}
      commentUserVotes={commentUserVotes}
      getMoreCallback={getMoreCallback}
      hasMore={hasMore}
      search={search}
      searchCallback={searchCallback}
    />
  )
}
