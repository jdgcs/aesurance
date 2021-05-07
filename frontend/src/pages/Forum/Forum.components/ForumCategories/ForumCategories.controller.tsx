import { getPosts } from 'pages/Forum/Forum.actions'
import * as React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from 'reducers'
import { SubjectCategory } from 'shared/comment/SubjectCategory'

import { getStats } from './ForumCategories.actions'
import { ForumCategoriesView } from './ForumCategories.view'

export const ForumCategories = () => {
  const dispatch = useDispatch()
  const stats = useSelector((state: State) => state.stats.stats)
  const [subjectCategory, setSubjectCategory] = useState<SubjectCategory | undefined>(undefined)

  useEffect(() => {
    dispatch(getStats())
  }, [dispatch])

  const selectCategoryCallback = (subjectCategory?: SubjectCategory) => {
    setSubjectCategory(subjectCategory)
    dispatch(getPosts({ subjectCategory, page: 0 }))
  }

  return (
    <ForumCategoriesView
      stats={stats}
      subjectCategory={subjectCategory}
      selectCategoryCallback={selectCategoryCallback}
    />
  )
}
