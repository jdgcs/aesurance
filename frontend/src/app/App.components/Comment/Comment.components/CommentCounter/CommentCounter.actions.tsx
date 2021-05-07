import { State } from 'reducers'
import { SendVoteInputs } from 'shared/vote/SendVote'

export const SEND_VOTE_REQUEST = 'SEND_VOTE_REQUEST'
export const SEND_VOTE_COMMIT = 'SEND_VOTE_COMMIT'
export const SEND_VOTE_ROLLBACK = 'SEND_VOTE_ROLLBACK'

export const sendVote = ({ commentId, voteDirection }: SendVoteInputs) => (dispatch: any, getState: any) => {
  const state: State = getState()
  dispatch({
    type: SEND_VOTE_REQUEST,
    payload: {},
    meta: {
      offline: {
        effect: {
          url: `${process.env.REACT_APP_BACKEND_URL}/vote/send-vote`,
          method: 'POST',
          headers: { Authorization: `Bearer ${state.auth.jwt}` },
          json: { commentId, voteDirection },
        },
        commit: { type: SEND_VOTE_COMMIT },
        rollback: { type: SEND_VOTE_ROLLBACK },
      },
    },
  })
}
