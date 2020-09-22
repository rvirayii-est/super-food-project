import { TOGGLE_CUSTOMER_NAVBAR } from "store/actions/types.action";

const INITIAL_STATE = {
  open: false
}

export default function(state=INITIAL_STATE, action) {
  const { type } = action;

  switch(type) {
    case TOGGLE_CUSTOMER_NAVBAR:
      return {
        open: !state.open
      }
    default:
      return state;
  }
}