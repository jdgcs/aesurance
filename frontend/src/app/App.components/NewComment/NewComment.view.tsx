import { Button } from 'app/App.components/Button/Button.controller'
import * as PropTypes from 'prop-types'
import * as React from 'react'
import { useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { State } from 'reducers'
import { counterColor } from 'styles'

import { MiniUser } from '../MiniUser/MiniUser.view'
// prettier-ignore
import { NewCommentButtons, NewCommentGrid, NewCommentImage, NewCommentImageClose, NewCommentImageContainer, NewCommentStyled, NewCommentTextArea } from './NewComment.style'

type NewCommentViewProps = {
  loading: boolean
  expanded: boolean
  newCommentCallback: (comment: string | undefined) => void
  expandCallback: () => void
  imageUrl?: string
  resetImageCallback: () => void
  showUploaderCallback: () => void
}

export const NewCommentView = ({
  loading,
  expanded,
  newCommentCallback,
  expandCallback,
  imageUrl,
  resetImageCallback,
  showUploaderCallback,
}: NewCommentViewProps) => {
  const [comment, setComment] = useState<string | undefined>(undefined)
  const user = useSelector((state: State) => state.auth.user)
  const [isSmall, setIsSmall] = useState<boolean>(false)

  const callBackWidthRef = useCallback(
    (domNode) => {
      if (domNode && domNode.getBoundingClientRect().width < 400) {
        setIsSmall(true)
      }
    },
    [expandCallback],
  )

  return (
    <NewCommentStyled expanded={expanded} onClick={() => expandCallback()} ref={callBackWidthRef}>
      <NewCommentGrid isSmall={isSmall}>
        <NewCommentTextArea
          placeholder="Your comment..."
          onChange={(e) => setComment(e.target.value)}
          value={comment}
        />
        {!isSmall && <MiniUser user={user} />}
      </NewCommentGrid>

      {imageUrl && (
        <NewCommentImageContainer>
          <div>
            <NewCommentImage alt="uploaded-image" src={imageUrl} />
            <NewCommentImageClose onClick={() => resetImageCallback()}>
              <svg>
                <use xlinkHref="/icons/sprites.svg#close" />
              </svg>
            </NewCommentImageClose>
          </div>
        </NewCommentImageContainer>
      )}

      <NewCommentButtons isSmall={isSmall}>
        <Button
          text="Submit"
          color={counterColor}
          icon="send"
          loading={loading}
          onClick={() => newCommentCallback(comment)}
        />
        <Button text="Image" color={counterColor} icon="pics" onClick={() => showUploaderCallback()} />
        <Button text="Emoji" color={counterColor} icon="emoji" />
        <Button text="Rules" color={counterColor} icon="warning" />
      </NewCommentButtons>
    </NewCommentStyled>
  )
}

NewCommentView.propTypes = {
  loading: PropTypes.bool,
  expanded: PropTypes.bool,
  newCommentCallback: PropTypes.func.isRequired,
  expandCallback: PropTypes.func.isRequired,
  imageUrl: PropTypes.string,
  resetImageCallback: PropTypes.func.isRequired,
  showUploaderCallback: PropTypes.func.isRequired,
}

NewCommentView.defaultProps = {
  loading: false,
  expanded: false,
}
