import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from 'reducers'

import { showToaster } from '../Toaster/Toaster.actions'
import { ERROR } from '../Toaster/Toaster.constants'
import { hideReport, sendReport } from './ReportModal.actions'
import { ReportModalView } from './ReportModal.view'

export const ReportModal = () => {
  const dispatch = useDispatch()
  const loading = useSelector((state: State) => state.loading)
  const { targetId, targetType, showing } = useSelector((state: State) => state.report)

  const hideCallback = () => {
    dispatch(hideReport())
  }

  const sendCallback = (reason: string | undefined) => {
    if (targetId && targetType) dispatch(sendReport({ targetId, targetType, reason }))
    else showToaster(ERROR, 'Report target not found', 'Please refresh and try again')
  }

  return <ReportModalView loading={loading} showing={showing} hideCallback={hideCallback} sendCallback={sendCallback} />
}
