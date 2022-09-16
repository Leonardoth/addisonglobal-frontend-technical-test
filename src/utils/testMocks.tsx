import { MarketType, SelectionType } from '../types/types';

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

const MockMarket: MarketType = {
  id: 'market_test',
  name: 'Test Market',
  selections: [MockSelection1, MockSelection2],
};

export { MockMarket, MockSelection1, MockSelection2 };
