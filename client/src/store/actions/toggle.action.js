import { TOGGLE_CUSTOMER_NAVBAR } from "store/actions/types.action"

export const toggleCustomerNavbar = () => dispatch => {
  dispatch({
    type: TOGGLE_CUSTOMER_NAVBAR
  })
}