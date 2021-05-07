import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from 'reducers'
import { NewKeyInputs } from 'shared/key/NewKey'

import { hideAddModal } from './AddModal.actions'
import { AddModalView } from './AddModal.view'

export const AddModal = () => {
  const dispatch = useDispatch()
  const { showing } = useSelector((state: State) => state.sellModal)

  const hideCallback = () => {
    dispatch(hideAddModal())
  }

  return <AddModalView showing={showing} hideCallback={hideCallback} />
}
