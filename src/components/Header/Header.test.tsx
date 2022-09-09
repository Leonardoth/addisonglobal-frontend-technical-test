import React from 'react';
import { screen, cleanup } from '@testing-library/react';
import Header from '../Header/Header';
import { renderWithProviders } from '../../utils/test-utils';

describe('Header Component', () => {
  afterEach(() => cleanup());
  test('Header should have text', () => {
    renderWithProviders(<Header />);
    const text = 'Addison Global Bets';
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  test('Header should have a button to open Betslip working', () => {
    let openBets = jest.fn();
    renderWithProviders(<Header />, {
      customContext: { openBetslip: openBets },
    });
    screen.getByRole('button').click();
    expect(openBets).toHaveBeenCalled();
  });
});
