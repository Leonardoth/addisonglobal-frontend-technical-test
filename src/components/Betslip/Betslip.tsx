import React, { useContext, useState } from 'react';
import { UiContext, UiContextProps } from '../../context/ContextProvider';
import { CloseButton, Container } from './Betslip.style';

function Betslip() {
  const { isBetslipOpen, closeBetslip } = useContext(
    UiContext
  ) as UiContextProps;

  function handleClose() {
    closeBetslip();
  }
  return (
    <Container isOpen={isBetslipOpen}>
      <CloseButton onClick={handleClose} />
      Betslip
      <br />
      Your bets goes here
    </Container>
  );
}

export default Betslip;
