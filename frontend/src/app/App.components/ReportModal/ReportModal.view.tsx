import * as PropTypes from 'prop-types'
import * as React from 'react'
import { useState } from 'react'
import { backgroundTextColor, ModalCard, ModalCardContent, ModalClose, ModalMask, ModalStyled } from 'styles'

import { Button } from '../Button/Button.controller'
import { Input } from '../Input/Input.controller'
import { RepportModalContent } from './ReportModal.style'

type ReportModalViewProps = {
  loading: boolean
  showing: boolean
  hideCallback: () => void
  sendCallback: (reason: string | undefined) => void
}

export const ReportModalView = ({ loading, showing, hideCallback, sendCallback }: ReportModalViewProps) => {
  const [reason, setReason] = useState<string | undefined>(undefined)

  return (
    <ModalStyled showing={showing}>
      {showing && (
        <>
          <ModalMask showing={showing} onClick={() => hideCallback()} />
          <ModalCard>
            <ModalClose onClick={() => hideCallback()}>
              <svg>
                <use xlinkHref="/icons/sprites.svg#close" />
              </svg>
            </ModalClose>
            <ModalCardContent width={50}>
              <RepportModalContent>
                <h1>Report Reason</h1>
                <Input
                  icon="question"
                  name="reason"
                  placeholder="Reason (optional)"
                  type="text"
                  onChange={(e) => setReason(e.target.value)}
                  value={reason}
                  onBlur={() => {}}
                  inputStatus={undefined}
                  errorMessage={undefined}
                />
                <Button
                  text="Submit"
                  color={backgroundTextColor}
                  icon="send"
                  loading={loading}
                  onClick={() => sendCallback(reason)}
                />
              </RepportModalContent>
            </ModalCardContent>
          </ModalCard>
        </>
      )}
    </ModalStyled>
  )
}

ReportModalView.propTypes = {
  loading: PropTypes.bool,
  showing: PropTypes.bool.isRequired,
  hideCallback: PropTypes.func.isRequired,
  sendCallback: PropTypes.func.isRequired,
}

ReportModalView.defaultProps = {
  loading: false,
}
