import { Input } from 'app/App.components/Input/Input.controller'
import { InputSpacer } from 'app/App.components/Input/Input.style'
import { NewComment } from 'app/App.components/NewComment/NewComment.controller'
import { Select } from 'app/App.components/Select/Select.controller'
import * as React from 'react'
import { useState } from 'react'
import { SubjectCategory } from 'shared/comment/SubjectCategory'
import { TargetType } from 'shared/comment/TargetType'

import { NewPostCard, NewPostGrid, NewPostStyled, NewPostTitle } from './NewPost.style'

export const NewPostView = () => {
  const [title, setTitle] = useState<string>('')
  const [subjectCategory, setSubjectCategory] = useState<SubjectCategory>(SubjectCategory.KUBERNETES_STACK)

  return (
    <NewPostStyled>
      <NewPostTitle>
        <h1>New Post</h1>
      </NewPostTitle>
      <NewPostCard>
        <NewPostGrid>
          <Input
            icon="pen"
            name="title"
            placeholder="Title"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            onBlur={() => {}}
            value={title}
          />
          <Select
            options={Object.keys(SubjectCategory).map((category) => category)}
            defaultOption={subjectCategory}
            selectCallback={(e: any) => setSubjectCategory(e)}
          />
        </NewPostGrid>
        <InputSpacer />
        <NewComment title={title} subjectCategory={subjectCategory} commentType={TargetType.POST} alreadyExpanded />
      </NewPostCard>
    </NewPostStyled>
  )
}
