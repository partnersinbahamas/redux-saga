
import { initialState } from "./config";
import { INCREASE_COUNT, DECREASE_COUNT } from "./actions";

export const counterReducer = (state = initialState, action) => {
  const { type } = action;

  switch(type) {
    case INCREASE_COUNT:
      return { ...state, count: state.count + 1 };
    case DECREASE_COUNT:
      return { ...state, count: state.count - 1 };
    default: return state;
  }
};
