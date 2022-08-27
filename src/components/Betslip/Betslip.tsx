import React, { useState } from 'react';
import { CloseButton, Container } from './Betslip.style';

function Betslip() {
  const [isOpen, setIsOpen] = useState(true);

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <Container isOpen={isOpen}>
      <CloseButton onClick={handleClose} />
      Betslip
      <br />
      Your bets goes here
    </Container>
  );
}

export default Betslip;
