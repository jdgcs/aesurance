export const SHOW_SELL_MODAL = 'SHOW_SELL_MODAL'
export const HIDE_SELL_MODAL = 'HIDE_SELL_MODAL'

export const showAddModal = () => (dispatch: any) => {
  dispatch({
    type: SHOW_SELL_MODAL,
  })
}

export const hideAddModal = () => (dispatch: any) => {
  dispatch({
    type: HIDE_SELL_MODAL,
  })
}
