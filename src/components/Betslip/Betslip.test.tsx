import React from 'react';
import { screen, cleanup } from '@testing-library/react';
import Betslip from './Betslip';
import { renderWithProviders } from '../../utils/test-utils';

describe('Betslip Component', () => {
  afterEach(() => cleanup());

  test('Betslip should have a back button', () => {
    renderWithProviders(<Betslip />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('Betslip should have no bets', () => {
    renderWithProviders(<Betslip />);

    expect(screen.queryByText('Market Name')).not.toBeInTheDocument();
  });

  test('Betslip should have one bet', () => {
    const bets = [
      { id: 'Test1', name: 'Bet Name', marketName: 'Market Name', price: 1.2 },
    ];

    renderWithProviders(<Betslip />, {
      preloadedState: {
        bets,
      },
    });

    expect(screen.getByText('Market Name')).toBeInTheDocument();
  });

  test('Betslip should have two bets', () => {
    const bets = [
      { id: 'Test1', name: 'Bet Name', marketName: 'Market Name', price: 1.2 },
      {
        id: 'Test2',
        name: 'Bet Name',
        marketName: 'Market Name2',
        price: 1.5,
      },
    ];

    renderWithProviders(<Betslip />, {
      preloadedState: {
        bets,
      },
    });

    const betsCount = screen.getAllByText('Bet Name').length;
    expect(betsCount).toEqual(2);
  });
});
