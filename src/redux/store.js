
import { counterReducer as counter } from '../redux/reducers/counter/reducer';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    counter,
  },
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
export default store;