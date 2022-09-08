import React, { ContextType, PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';

// REDUX Related
import { Store } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { RootState, setupStore } from '../store/store';

// UI Context Related
import ContextProvider, { UiContextProps } from '../context/ContextProvider';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: Store;
  customContext?: Partial<UiContextProps>;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = { markets: [], bets: [] },
    store = setupStore(preloadedState),
    customContext,
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return (
      <Provider store={store}>
        <ContextProvider customContext={customContext}>
          {children}
        </ContextProvider>
      </Provider>
    );
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
