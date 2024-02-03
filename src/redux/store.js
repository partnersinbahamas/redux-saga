import { counterReducer as counter } from '../redux/reducers/counter/reducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    counter,
  }
});
export default store;