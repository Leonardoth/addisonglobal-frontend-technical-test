import * as actionTypes from './actionTypes';
import { SelectionType } from '../types/types';
import { Dispatch } from '@reduxjs/toolkit';

export function addBet(bet: SelectionType) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: actionTypes.ADD_BET,
      payload: bet,
    });
  };
}

export function removeBet(bet: SelectionType) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: actionTypes.REMOVE_BET,
      payload: bet,
    });
  };
}
