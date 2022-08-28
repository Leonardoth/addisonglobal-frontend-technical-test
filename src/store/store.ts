import { configureStore, Store } from '@reduxjs/toolkit';
import reducer from './reducer';

export const store: Store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
