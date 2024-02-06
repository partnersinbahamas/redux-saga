import { ERRORS_POPULAR, ERRORS_LATEST } from "./actions";
import { initialState } from "./config";

export const errorsReducer = (state = initialState, actions) => {
  const { type, payload } = actions;

  switch(type) {
    case ERRORS_LATEST: return { ...state, errorLatestNews: payload }
    case ERRORS_POPULAR: return { ...state, errorPopularNews: payload }
    default: return state;
  };
};