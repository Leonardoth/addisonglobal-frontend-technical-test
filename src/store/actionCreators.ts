import * as actionTypes from './actionTypes';
import { SelectionType } from '../types/types';
import { Dispatch } from '@reduxjs/toolkit';

export interface Bet extends SelectionType {
  marketName: string;
  marketId: string;
}

export function addBet(bet: Bet) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: actionTypes.ADD_BET,
      payload: bet,
    });
  };
}

export function removeBet(bet: Bet) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: actionTypes.REMOVE_BET,
      payload: bet,
    });
  };
}
