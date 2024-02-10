import { takeLatest, put, call, fork, all } from '@redux-saga/core/effects';
import { getLatestNews, getPopularNews } from '../redux/reducers/news/api';
import { latestNewsAction, popularNewstAction } from '../redux/reducers/news/actions';
import { latestErrorsAction, popularErrorsAction } from '../redux/reducers/errors/actions';
import { GET_LATEST_NEWS, GET_POPULAR_NEWS } from '../redux/reducers/news/actions';

export function* handlePopularNews() {
  try {
    const { hits } = yield call(getPopularNews);
    yield put(popularNewstAction(hits));
  } catch (error) {
    yield put(popularErrorsAction(`Fetch error in Popular news - ${error}`))
  }
}

export function* handleLatestNews() {
  try {
    const { hits } = yield call(getLatestNews);
    yield put(latestNewsAction(hits))
  } catch (error) {
    yield put(latestErrorsAction(`Fetch error in Latest news - ${error}`))
  }
}

function* watcherPopularNews() {
  yield takeLatest(GET_POPULAR_NEWS, handlePopularNews);
}

function* watcherLatesrNews() {
  yield takeLatest(GET_LATEST_NEWS, handleLatestNews);
}

export function* watcherSaga() {
  yield fork(watcherLatesrNews);
  yield fork(watcherPopularNews);
}

export default function* rootSaga() {
  yield watcherSaga();
}