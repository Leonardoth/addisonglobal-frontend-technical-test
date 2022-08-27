import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Market from '../market';

const MockSelection1: SelectionType = {
  id: 'SEL_1',
  name: 'Option 1',
  price: 12,
};
const MockSelection2: SelectionType = {
  id: 'SEL_2',
  name: 'Option 2',
  price: 22,
};
const MockData: MarketType = {
  id: 'market_test',
  name: 'Test Market',
  selections: [MockSelection1, MockSelection2],
};

afterEach(cleanup);
test('Market should display name correctly', () => {
  render(
    <Market
      key={MockData.id}
      id={MockData.id}
      name={MockData.name}
      selections={MockData.selections}
    />
  );
  const MarketName = screen.getByText('Test Market');
  expect(MarketName).toBeInTheDocument();
});

test('Market should have both selections', () => {
  render(
    <Market
      key={MockData.id}
      id={MockData.id}
      name={MockData.name}
      selections={MockData.selections}
    />
  );
  const Selection1 = screen.getByText(MockSelection1.name);
  expect(Selection1).toBeInTheDocument();
  const Selection2 = screen.getByText(MockSelection2.name);
  expect(Selection2).toBeInTheDocument();
});
