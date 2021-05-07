import * as PropTypes from 'prop-types'
import * as React from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import { PublicUser } from 'shared/user/PublicUser'
import { ModalCard, ModalCardContent, ModalClose, ModalMask, ModalStyled } from 'styles'

import { MiniUser } from '../MiniUser/MiniUser.view'
// prettier-ignore
import { VotersModalDownvoters, VotersModalDownvotersScroll, VotersModalGrid, VotersModalUpvoters, VotersModalUpvotersScroll } from './VotersModal.style'

type VotersModalViewProps = {
  loading: boolean
  showing: boolean
  upvoters: PublicUser[]
  hasMoreUpvoters: boolean
  getMoreUpvotersCallback: (isVisible: boolean) => void
  downvoters: PublicUser[]
  hasMoreDownvoters: boolean
  getMoreDownvotersCallback: (isVisible: boolean) => void
  hideCallback: () => void
}

export const VotersModalView = ({
  loading,
  showing,
  upvoters,
  hasMoreUpvoters,
  getMoreUpvotersCallback,
  downvoters,
  hasMoreDownvoters,
  getMoreDownvotersCallback,
  hideCallback,
}: VotersModalViewProps) => {
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
            <ModalCardContent width={50} height={70}>
              <VotersModalGrid>
                <VotersModalUpvoters>
                  <h1>
                    <svg>
                      <use xlinkHref="/icons/sprites.svg#upvote" />
                    </svg>
                    &nbsp;Upvoters
                  </h1>
                  <VotersModalUpvotersScroll>
                    {upvoters.map((upvoter) => (
                      <MiniUser user={upvoter} />
                    ))}
                    {hasMoreUpvoters && (
                      <VisibilitySensor onChange={(isVisible: boolean) => getMoreUpvotersCallback(isVisible)}>
                        <div>Loading more...</div>
                      </VisibilitySensor>
                    )}
                  </VotersModalUpvotersScroll>
                </VotersModalUpvoters>
                <VotersModalDownvoters>
                  <h1>
                    <svg>
                      <use xlinkHref="/icons/sprites.svg#downvote" />
                    </svg>
                    &nbsp;Downvoters
                  </h1>
                  <VotersModalDownvotersScroll>
                    {downvoters.map((downvoter) => (
                      <MiniUser user={downvoter} />
                    ))}
                    {hasMoreDownvoters && (
                      <VisibilitySensor onChange={(isVisible: boolean) => getMoreDownvotersCallback(isVisible)}>
                        <div>Loading more...</div>
                      </VisibilitySensor>
                    )}
                  </VotersModalDownvotersScroll>
                </VotersModalDownvoters>
              </VotersModalGrid>
            </ModalCardContent>
          </ModalCard>
        </>
      )}
    </ModalStyled>
  )
}

VotersModalView.propTypes = {
  loading: PropTypes.bool,
  showing: PropTypes.bool.isRequired,
  upvoters: PropTypes.array.isRequired,
  hasMoreUpvoters: PropTypes.bool.isRequired,
  getMoreUpvotersCallback: PropTypes.func.isRequired,
  downvoters: PropTypes.array.isRequired,
  hasMoreDownvoters: PropTypes.bool.isRequired,
  getMoreDownvotersCallback: PropTypes.func.isRequired,
  hideCallback: PropTypes.func.isRequired,
}

VotersModalView.defaultProps = {
  loading: false,
}
