import { SelectionType } from '../types/types';
import { Bet } from './actionCreators';
import * as actionTypes from './actionTypes';
import { RootState } from './store';

const initialState = {
  markets: {},
  bets: [],
};

function setMarket(state: RootState, bet: Bet) {
  let markets = { ...state.markets };
  markets[bet.marketId] = bet.id;
  return markets;
}

function clearMarket(state: RootState, bet: Bet) {
  let markets = { ...state.markets };
  markets[bet.marketId] = undefined;
  return markets;
}

function filterOutBet(state: RootState, betToRemove: Bet) {
  return state.bets.filter(
    (bet: Bet) =>
      bet.id !== betToRemove.id && bet.marketId !== betToRemove.marketId
  );
}

const reducer = (state: RootState = initialState, action: any) => {
  const bet = action.payload;
  switch (action.type) {
    case actionTypes.ADD_BET:
      return {
        ...state,
        bets: [...filterOutBet(state, bet)].concat(bet),
        markets: { ...setMarket(state, bet) },
      };
    case actionTypes.REMOVE_BET:
      return {
        ...state,
        bets: filterOutBet(state, bet),
        markets: { ...clearMarket(state, bet) },
      };
    default:
      return state;
  }
};

export default reducer;
