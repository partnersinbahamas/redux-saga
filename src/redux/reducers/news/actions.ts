import { actionCreator } from "../../utils";

export const SET_LATEST_NEWS = 'SET_LATEST_NEWS';
export const SET_POPULAR_NEWS = 'SET_POPULAR_NEWS';

export const GET_LATEST_NEWS = 'GET_LATEST_NEWS';
export const GET_POPULAR_NEWS = 'GET_POPULAR_NEWS';

export const SET_LOADING = 'SET_LOADING';

export const REMOVE_NEWS = 'REMOVE_NEWS';

export const fetchLatestNews = actionCreator(GET_LATEST_NEWS);
export const fetchPopularNews = actionCreator(GET_POPULAR_NEWS);
export const removeNewsAction = actionCreator(REMOVE_NEWS);

export const latestNewsAction = (payload: any) => ({type: SET_LATEST_NEWS, payload});
export const popularNewstAction = (payload: any) => ({type: SET_POPULAR_NEWS, payload});
export const loadingAction = (payload: any) => ({type: SET_LOADING, payload})