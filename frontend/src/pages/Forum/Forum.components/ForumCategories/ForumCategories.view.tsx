// prettier-ignore
import * as PropTypes from 'prop-types'
import * as React from 'react'
import { SubjectCategory } from 'shared/comment/SubjectCategory'
import { Stat } from 'shared/stat/Stat'
import { StatType } from 'shared/stat/StatType'

// prettier-ignore
import { ForumCategoriesCard, ForumCategoriesCategory, ForumCategoriesCategoryCount, ForumCategoriesCategoryDot, ForumCategoriesStyled } from './ForumCategories.style'

type ForumCategoriesViewProps = {
  stats: Stat[]
  subjectCategory?: SubjectCategory
  selectCategoryCallback: (subjectCategory?: SubjectCategory) => void
}

export const ForumCategoriesView = ({ stats, subjectCategory, selectCategoryCallback }: ForumCategoriesViewProps) => {
  let allCategoryCount = 0
  stats.forEach((stat) => {
    if (stat.statType === StatType.SUBJECT_CATEGORY) allCategoryCount += stat.count
  })
  return (
    <ForumCategoriesStyled>
      <h1>Categories</h1>
      <ForumCategoriesCard>
        <ForumCategoriesCategory onClick={() => selectCategoryCallback()}>
          <ForumCategoriesCategoryDot activated={!subjectCategory} />
          <svg>
            <use xlinkHref="/icons/sprites.svg#ALL" />
          </svg>
          <div>ALL</div>
          <ForumCategoriesCategoryCount>{`${allCategoryCount} POST${
            allCategoryCount > 1 ? 'S' : ''
          }`}</ForumCategoriesCategoryCount>
        </ForumCategoriesCategory>
        {Object.keys(SubjectCategory).map((category: string) => {
          const categoryCount = stats.filter((stat) => stat.subjectCategory === category)?.[0]?.count || 0
          return (
            <ForumCategoriesCategory key={category} onClick={() => selectCategoryCallback(category as SubjectCategory)}>
              <ForumCategoriesCategoryDot activated={subjectCategory === category} />
              <svg>
                <use xlinkHref={`/icons/sprites.svg#${category}`} />
              </svg>
              <div>{category}</div>
              <ForumCategoriesCategoryCount>{`${categoryCount} POST${
                categoryCount > 1 ? 'S' : ''
              }`}</ForumCategoriesCategoryCount>
            </ForumCategoriesCategory>
          )
        })}
      </ForumCategoriesCard>
    </ForumCategoriesStyled>
  )
}

ForumCategoriesView.propTypes = {
  stats: PropTypes.array.isRequired,
  subjectCategory: PropTypes.string,
  selectCategoryCallback: PropTypes.func.isRequired,
}

ForumCategoriesView.defaultProps = {
  loading: false,
}
