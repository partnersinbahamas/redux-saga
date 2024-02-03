import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import store from './store';
import { Action, ThunkAction } from '@reduxjs/toolkit';

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
