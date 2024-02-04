import { takeLatest, put, call } from '@redux-saga/core/effects';
import { GET_NEWS } from '../redux/reducers/news/actions';
import { getData } from '../api';
import { setFetchData } from '../redux/reducers/news/actions';

const delay = (timer) => new Promise((resolve) => setTimeout(resolve, timer * 1000))

export function* handleLatestNews() {
  const { hits } = yield call(() => getData('search?tags=front_page'));
  yield put(setFetchData(hits))
}

export function* watcherSaga() {
    yield takeLatest(GET_NEWS, handleLatestNews);
}

export default function* rootSaga() {
  yield watcherSaga();
}