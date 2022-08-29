import React, { useContext } from 'react';
import { UiContext, UiContextProps } from '../../context/ContextProvider';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { CloseButton, Container } from './Betslip.style';
import { SelectionType } from '../../types/types';
import { bindActionCreators } from '@reduxjs/toolkit';
import * as actionCreators from '../../store/actionCreators';

function Betslip() {
  const { isBetslipOpen, closeBetslip } = useContext(
    UiContext
  ) as UiContextProps;

  const bets = useAppSelector(state => state.bets);
  const dispatch = useAppDispatch();
  const { removeBet } = bindActionCreators(actionCreators, dispatch);

  function handleClose() {
    closeBetslip();
  }

  function handleDelete(bet: actionCreators.Bet) {
    removeBet(bet);
  }

  return (
    <Container isOpen={isBetslipOpen}>
      <CloseButton onClick={handleClose} />
      Betslip
      <br />
      Your bets goes here
      {bets.map((bet: actionCreators.Bet) => (
        <div key={bet.id}>
          <span>{bet.name}</span>
          <span>{bet.price}</span>
          <button onClick={() => handleDelete(bet)}>X</button>
        </div>
      ))}
    </Container>
  );
}

export default Betslip;
