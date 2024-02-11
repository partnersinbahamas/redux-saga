
import { newsReducer as news } from './reducers/news/reducers';
import { errorsReducer as error } from './reducers/errors/reducer';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    news,
    error,
  },
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
export default store;