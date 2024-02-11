import { takeEvery, put, call, fork, all } from '@redux-saga/core/effects';
import { getLatestNews, getPopularNews } from '../redux/reducers/news/api';
import { latestNewsAction, popularNewstAction } from '../redux/reducers/news/actions';
import { latestErrorsAction, popularErrorsAction } from '../redux/reducers/errors/actions';
import { GET_LATEST_NEWS, GET_POPULAR_NEWS } from '../redux/reducers/news/actions';
import { loadingAction } from '../redux/reducers/news/actions';


/* Useful saga effects:
  Ссылка на Redux-Saga курс:  https://www.youtube.com/watch?v=ZvGmctJe9Cc&list=RDCMUCE9ODjNIkOHrnSdkYWLfYhg&start_radio=1&rv=ZvGmctJe9Cc&t=413
  
  - fork = не блокирущаяся САГа, используеться для запуска паралельных САГ не ожидая ответа выполнения, нужно иметь кейсы для ошибок, иначе упадет вся сага;
  - spawn = не блокирущаяся САГа как и fork, но при ошибке ошибка не всплывает в rootSaga; 

  - call = блокирующий САГа ефект, которые ожидает выполнения саги, и после приступает к следуюшим
  - apply = тоже самое что и call только параметры для САГи передаються в [arg1, arg2];

  - delay = блокирует выполнение скриптов до своего выполнения - задержка;
  - trottle = блокирует повторный вызов САГи если таймер еще не истек: yield trottle(ms, ACTION, saga);
  - debounce = такое же поведение как и trottle;
  - retry = перезапуск упавшиг САГ в фоновом режиме: yield retru(times, ms, saga);
  - join = ипользуеться для получения значение из не блокирующейся САГи таких как fork, spawn; const [first] = yield join(saga);
  - cancel = отмена запуска процесов
*/


export function* handlePopularNews() {
  try {
    yield put(loadingAction(true));
    const { hits } = yield call(getPopularNews);
    yield put(popularNewstAction(hits));
  } catch (error) {
    yield put(popularErrorsAction(`Fetch error in Popular news - ${error}`))
  } finally {
    yield put(loadingAction(false));
  }
}

export function* handleLatestNews() {
  try {
    yield put(loadingAction(true));
    const { hits } = yield call(getLatestNews);
    yield put(latestNewsAction(hits))
  } catch (error) {
    yield put(latestErrorsAction(`Fetch error in Latest news - ${error}`))
  } finally {
    yield put(loadingAction(false));
  }
}

function* watcherPopularNews() {
  yield takeEvery(GET_POPULAR_NEWS, handlePopularNews);
}

function* watcherLatesrNews() {
  yield takeEvery(GET_LATEST_NEWS, handleLatestNews);
}

export function* watcherSaga() {
  yield fork(watcherLatesrNews);
  yield fork(watcherPopularNews);
}

export default function* rootSaga() {
  yield watcherSaga();
}