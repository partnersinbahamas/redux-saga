import { SET_LATEST_NEWS, SET_POPULAR_NEWS, REMOVE_NEWS, SET_LOADING } from "./actions";
import { initialState } from "./config";

export const newsReducer = (state = initialState, action) => {
  const { type, payload } = action;
 
  switch(type) {
    case SET_LATEST_NEWS:
      return {...state, latestNews: [...payload]}
    case SET_POPULAR_NEWS:
      return {...state, popularNews: [...payload]}
    case SET_LOADING:
      return {...state, loading: payload}
    case REMOVE_NEWS:
        return {...state, latestNews: [], popularNews: []}
    default: return state;
  }
};

