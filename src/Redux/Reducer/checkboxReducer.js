import { slotTime } from "../../util/slotData";
import { CHANGE_CHECKBOX } from "../Action/type";

const INITIAL_STATE = slotTime;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_CHECKBOX: {
      let k = state;
      let p = k[action.payload.index];
      k[action.payload.index] = { ...p, check: action.payload.data };
      return {
        ...k,
      };
    }
    default:
      return state;
  }
};
