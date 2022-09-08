import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import BetComponent from './BetComponent';

describe('Bet Component', () => {
  const deleteBet = jest.fn();
  const betObject = {
    id: 'ID',
    marketName: 'Market',
    name: 'Name',
    price: 2.05,
    handleRemove: deleteBet,
  };

  const setup = () =>
    render(
      <div>
        <BetComponent {...betObject} />
      </div>
    );

  afterEach(() => cleanup());
  test('Bet Component should have: Name', () => {
    setup();
    expect(screen.getByText(betObject.name)).toBeInTheDocument();
  });
  test('Bet Component should have: Market', () => {
    setup();
    expect(screen.getByText(betObject.marketName)).toBeInTheDocument();
  });
  test('Bet Component should have: Price', () => {
    setup();
    expect(screen.getByText(betObject.price)).toBeInTheDocument();
  });
  test('Bet Component should have: Remove Button', () => {
    setup();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  test('Bet Component clicking on the button should call the function', () => {
    setup();
    screen.getByRole('button').click();
    expect(deleteBet).toHaveBeenCalled();
  });
});
