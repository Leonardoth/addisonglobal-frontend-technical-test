import { EnhancedStore } from '@reduxjs/toolkit';
import { MountOptions, MountReturn } from 'cypress/react';
import { RootState } from '../store/store';
import { mount } from 'cypress/react18';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { setupStore } from '../store/store';

// UiContext
import ContextProvider, { UiContextProps } from '../context/ContextProvider';

Cypress.Commands.add(
  'mountWithProviders',
  (component: ReactNode, options = {}) => {
    const { reduxStore = setupStore(), ...mountOptions } = options;
    const wrapped = (
      <Provider store={reduxStore}>
        <ContextProvider>{component}</ContextProvider>
      </Provider>
    );

    return mount(wrapped, mountOptions);
  }
);

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Mounts a React node
       * @param component React Node to mount
       * @param options Additional options to pass into mount
       */
      mountWithProviders(
        component: React.ReactNode,
        options?: MountOptions & { reduxStore?: EnhancedStore<RootState> } & {
          customContext?: UiContextProps;
        }
      ): Cypress.Chainable<MountReturn>;
    }
  }
}
