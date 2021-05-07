export const SHOW_LIQUIDITY = 'SHOW_LIQUIDITY'
export const HIDE_LIQUIDITY = 'HIDE_LIQUIDITY'

export const showLiquidity = (insuranceId: number) => (dispatch: any) => {
  dispatch({
    type: SHOW_LIQUIDITY,
    payload: { insuranceId },
  })
}

export const hideLiquidity = () => (dispatch: any) => {
  dispatch({
    type: HIDE_LIQUIDITY,
  })
}
