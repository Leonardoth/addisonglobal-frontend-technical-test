import { configureStore, PreloadedState, Store } from '@reduxjs/toolkit';
import reducer from './reducer';

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer,
    preloadedState,
  });
};
export const store: Store = setupStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
