import { actionCreator } from "../../utils";

export const GET_NEWS = 'GET_NEWS';
export const SET_NEWS = 'SET_NEWS';

export const fetchNewsData = actionCreator(GET_NEWS);
export const setFetchData = (payload: any) => ({type: SET_NEWS, payload});
