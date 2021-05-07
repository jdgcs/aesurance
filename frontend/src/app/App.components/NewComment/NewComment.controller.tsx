import { initUploader, showUploader } from 'app/App.components/Uploader/Uploader.actions'
import { ObjectId } from 'mongodb'
import * as PropTypes from 'prop-types'
import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { State } from 'reducers'
import { TargetType } from 'shared/comment/TargetType'

import { newComment } from './NewComment.actions'
import { NewCommentView } from './NewComment.view'
import { SubjectCategory } from 'shared/comment/SubjectCategory'

type NewCommentProps = {
  commentType: TargetType
  targetType?: TargetType
  targetId?: ObjectId
  alreadyExpanded?: boolean
  title?: string
  subjectCategory?: SubjectCategory
}

export const NewComment = ({
  title,
  subjectCategory,
  commentType,
  targetType,
  targetId,
  alreadyExpanded = false,
}: NewCommentProps) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [expanded, setExpanded] = useState(alreadyExpanded)
  const loading = useSelector((state: State) => state.loading)
  const imageUrl = useSelector((state: State) => state.uploader.imageUrl)
  const user = useSelector((state: State) => state.auth.user)
  const doneId = useRef(Date.now())
  const newCommentsDoneIds = useSelector((state: State) => state.comments.newCommentsDoneIds)

  useEffect(() => {
    dispatch(initUploader())
  }, [dispatch])

  const newCommentCallback = (comment: string | undefined) => {
    dispatch(
      newComment(
        {
          content: comment === '' ? undefined : comment,
          commentType,
          targetType,
          targetId,
          title,
          subjectCategory,
          contentImage: imageUrl,
        },
        doneId.current,
      ),
    )
  }

  const expandCallback = () => {
    if (!user) history.push('/login')
    setExpanded(true)
  }

  const showUploaderCallback = () => {
    dispatch(showUploader())
  }

  const resetImageCallback = () => {
    dispatch(initUploader())
  }

  return (
    <>
      {newCommentsDoneIds.indexOf(doneId.current) === -1 && (
        <NewCommentView
          loading={loading}
          newCommentCallback={newCommentCallback}
          expanded={expanded}
          expandCallback={expandCallback}
          imageUrl={imageUrl}
          resetImageCallback={resetImageCallback}
          showUploaderCallback={showUploaderCallback}
        />
      )}
    </>
  )
}

NewComment.propTypes = {
  commentType: PropTypes.string,
  targetType: PropTypes.string,
  targetId: PropTypes.string,
  alreadyExpanded: PropTypes.bool,
}

NewComment.defaultProps = {
  commentType: TargetType.COMMENT,
  targetType: undefined,
  targetId: undefined,
  alreadyExpanded: false,
}
