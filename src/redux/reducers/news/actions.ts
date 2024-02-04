import { actionCreator } from "../../utils";

export const GET_NEWS = 'GET_NEWS';
export const SET_LATEST_NEWS = 'SET_LATEST_NEWS';
export const SET_POPULAR_NEWS = 'SET_POPULAR_NEWS';

export const fetchNews = actionCreator(GET_NEWS);
export const latestNewsAction = (payload: any) => ({type: SET_LATEST_NEWS, payload});
export const popularNewstAction = (payload: any) => ({type: SET_POPULAR_NEWS, payload});