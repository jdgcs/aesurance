import * as React from 'react'
import { ModalCard, ModalMask, ModalStyled } from 'styles'
import { AddModalCard } from './AddModal.style'

type AddModalViewProps = {
  showing: boolean
  hideCallback: () => void
}

export const AddModalView = ({ showing, hideCallback }: AddModalViewProps) => {
  return (
    <ModalStyled showing={showing}>
      {showing && (
        <>
          <ModalMask showing={showing} onClick={() => hideCallback()} />
          <ModalCard>
            <AddModalCard>Comming soon...</AddModalCard>
          </ModalCard>
        </>
      )}
    </ModalStyled>
  )
}
