import React, { useContext } from 'react';
import { UiContext, UiContextProps } from '../../context/ContextProvider';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { CloseButton, Container, Header } from './Betslip.style';
import { bindActionCreators } from '@reduxjs/toolkit';
import * as actionCreators from '../../store/actionCreators';
import BetComponent from './BetComponent/BetComponent';

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
      <Header>Your Bets</Header>
      {bets.map((bet: actionCreators.Bet) => (
        <BetComponent
          id={bet.id}
          marketName={bet.marketName}
          name={bet.name}
          price={bet.price}
          handleRemove={() => handleDelete(bet)}
        />
      ))}
    </Container>
  );
}

export default Betslip;
