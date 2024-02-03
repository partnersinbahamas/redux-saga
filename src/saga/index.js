import { take } from '@redux-saga/core/effects';
import { INCREASE_COUNT, DECREASE_COUNT } from '../redux/reducers/counter/actions';

export function* workerSaga() {
  yield;
}

export function* watcherSaga() {
  yield take(INCREASE_COUNT);
  console.log('Increase count request started');
  yield take(DECREASE_COUNT);
  console.log('Decrease count request started');

}

export default function* rootSaga() {
  yield watcherSaga();
}