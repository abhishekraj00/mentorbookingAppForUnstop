import { ADD_TEACHER } from "../Action/type";

const INITIAL_STATE = {
  name: [],
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TEACHER:
      return {
        ...state,
        name: [...state.name, action.payload],
      };
    default:
      return state;
  }
};
