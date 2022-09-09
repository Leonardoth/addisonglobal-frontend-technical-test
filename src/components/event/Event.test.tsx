import React from 'react';
import { screen, cleanup, render } from '@testing-library/react';
import Event from './Event';
import { EventType, MarketType } from '../../types/types';
import { renderWithProviders } from '../../utils/test-utils';

describe('Event Component', () => {
  afterEach(() => cleanup());

  const setup = (customProps?: Partial<EventType>) => {
    return renderWithProviders(
      <Event
        key={'TestEvent'}
        id={'TestEvent'}
        name='Test Event'
        markets={[]}
        {...customProps}
      />
    );
  };

  test('Event should display its name', () => {
    setup();
    expect(screen.getByText('Test Event')).toBeInTheDocument();
  });

  test('Event Should display market and selections', () => {
    const mockMarket: MarketType = {
      id: 'TestMarket',
      name: 'Market Name',
      selections: [
        { id: 'Test Selecion1', name: 'Test Selection 1', price: 1 },
        { id: 'Test Selecion2', name: 'Test Selection 2', price: 2 },
      ],
    };
    setup({ markets: [mockMarket] });
    expect(screen.getByText(mockMarket.name)).toBeInTheDocument();
    expect(screen.getByText(mockMarket.selections[0].name)).toBeInTheDocument();
    expect(screen.getByText(mockMarket.selections[1].name)).toBeInTheDocument();
  });

  test('Event should display two markets, with its selections', () => {
    const mockMarket: MarketType = {
      id: 'TestMarket',
      name: 'Market Name',
      selections: [
        { id: 'Test Selecion1', name: 'Test Selection 1', price: 1 },
        { id: 'Test Selecion2', name: 'Test Selection 2', price: 2 },
      ],
    };
    const mockMarket2: MarketType = {
      id: 'TestMarket2',
      name: 'Market Name2',
      selections: [
        { id: 'Test Selecion3', name: 'Test Selection 3', price: 3 },
        { id: 'Test Selecion4', name: 'Test Selection 4', price: 4 },
        { id: 'Test Selecion5', name: 'Test Selection 5', price: 5 },
      ],
    };

    setup({ markets: [mockMarket, mockMarket2] });
    // market 1
    expect(screen.getByText(mockMarket.name)).toBeInTheDocument();
    expect(screen.getByText(mockMarket.selections[0].name)).toBeInTheDocument();
    expect(screen.getByText(mockMarket.selections[1].name)).toBeInTheDocument();

    // market 2
    expect(screen.getByText(mockMarket2.name)).toBeInTheDocument();
    expect(
      screen.getByText(mockMarket2.selections[0].name)
    ).toBeInTheDocument();
    expect(
      screen.getByText(mockMarket2.selections[1].name)
    ).toBeInTheDocument();
    expect(
      screen.getByText(mockMarket2.selections[2].name)
    ).toBeInTheDocument();
  });
});
