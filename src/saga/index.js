import { GET_NEWS } from '../redux/reducers/news/actions';
import { takeLatest, put, call, fork, all } from '@redux-saga/core/effects';
import { getLatestNews, getPopularNews } from '../redux/reducers/news/api';
import { latestNewsAction, popularNewstAction } from '../redux/reducers/news/actions';
import { latestErrorsAction, popularErrorsAction } from '../redux/reducers/errors/actions';

export function* handleNews() {
  yield fork(handleLatestNews);
  yield fork(handlePopularNews);
  // or
  //  yield all([call(handleLatestNews), call(handlePopularNews)])
}  


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

export function* watcherSaga() {
  yield takeLatest(GET_NEWS, handleNews);
}

export default function* rootSaga() {
  yield watcherSaga();
}