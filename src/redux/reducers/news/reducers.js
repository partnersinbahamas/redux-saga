import { GET_NEWS, SET_NEWS } from "./actions";
import { initialState } from "./config";

export const newsReducer = (state = initialState, action) => {
  const { type, payload } = action;
 
  console.log(payload);

  switch(type) {
    case SET_NEWS:
      return {...state, latestNews: [...state.latestNews, payload]}
    default: return state;
  }
};

