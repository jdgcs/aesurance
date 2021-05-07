export const SHOW_INSURANCE = 'SHOW_INSURANCE'
export const HIDE_INSURANCE = 'HIDE_INSURANCE'

export const showInsurance = (insuranceId: number) => (dispatch: any) => {
  dispatch({
    type: SHOW_INSURANCE,
    payload: { insuranceId },
  })
}

export const hideInsurance = () => (dispatch: any) => {
  dispatch({
    type: HIDE_INSURANCE,
  })
}
