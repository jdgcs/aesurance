import * as React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from 'reducers'

import { getDownvoters, getUpvoters, hideVoters } from './VotersModal.actions'
import { VotersModalView } from './VotersModal.view'

export const VotersModal = () => {
  const dispatch = useDispatch()
  const loading = useSelector((state: State) => state.loading)
  const {
    commentId,
    upvoters,
    pageUpvoters,
    hasMoreUpvoters,
    downvoters,
    pageDownvoters,
    hasMoreDownvoters,
    showing,
  } = useSelector((state: State) => state.voters)

  useEffect(() => {
    if (commentId) {
      dispatch(getUpvoters({ commentId, pageUpvoters: 0 }))
      dispatch(getDownvoters({ commentId, pageDownvoters: 0 }))
    }
  }, [dispatch, commentId])

  const hideCallback = () => {
    dispatch(hideVoters())
  }

  const getMoreUpvotersCallback = (isVisible: boolean) => {
    if (isVisible && commentId) dispatch(getUpvoters({ commentId, pageUpvoters: pageUpvoters + 1 }))
  }

  const getMoreDownvotersCallback = (isVisible: boolean) => {
    if (isVisible && commentId) dispatch(getDownvoters({ commentId, pageDownvoters: pageDownvoters + 1 }))
  }

  return (
    <VotersModalView
      loading={loading}
      showing={showing}
      upvoters={upvoters}
      hasMoreUpvoters={hasMoreUpvoters}
      getMoreUpvotersCallback={getMoreUpvotersCallback}
      downvoters={downvoters}
      hasMoreDownvoters={hasMoreDownvoters}
      getMoreDownvotersCallback={getMoreDownvotersCallback}
      hideCallback={hideCallback}
    />
  )
}
