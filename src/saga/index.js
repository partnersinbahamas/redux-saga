import { GET_NEWS } from '../redux/reducers/news/actions';
import { takeLatest, put, call, fork, all } from '@redux-saga/core/effects';
import { getLatestNews, getPopularNews } from '../redux/reducers/news/api';
import { latestNewsAction, popularNewstAction } from '../redux/reducers/news/actions';

export function* handleNews() {
  yield fork(handleLatestNews);
  yield fork(handlePopularNews);
  // or
//  yield all([call(handleLatestNews), call(handlePopularNews)])
}  

export function* handlePopularNews() {
  const { hits } = yield call(getPopularNews);
  yield put(popularNewstAction(hits));
}

export function* handleLatestNews() {
  const { hits } = yield call(getLatestNews);
  yield put(latestNewsAction(hits))
}

export function* watcherSaga() {
  yield takeLatest(GET_NEWS, handleNews);
}

export default function* rootSaga() {
  yield watcherSaga();
}