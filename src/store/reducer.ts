import { SelectionType } from '../types/types';
import { ADD_BET, REMOVE_BET } from './actionTypes';
import { RootState } from './store';

const initialState = {
  bets: [
    {
      id: 'Teste Bet',
      name: 'Teste Bet',
      price: '200',
    },
    {
      id: 'Tete Bet',
      name: ' Bet',
      price: '600',
    },
  ],
};

const reducer = (state: RootState = initialState, action: any) => {
  switch (action.type) {
    case ADD_BET:
      return { ...state, bets: state.bets.concat(action.payload) };
    case REMOVE_BET:
      return {
        ...state,
        bets: state.bets.filter(
          (bet: SelectionType) => bet.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default reducer;
