import React, { useContext } from 'react';
import { Button, Container, Logo } from './Header.style';

import { UiContext, UiContextProps } from '../../context/ContextProvider';

function Header() {
  const { openBetslip } = useContext(UiContext) as UiContextProps;

  function handleOpenBetslip() {
    return openBetslip();
  }

  return (
    <Container>
      <Logo>Addison Global Bets</Logo>
      <Button onClick={handleOpenBetslip} data-cy='Betslip-Open'>
        My Bets
      </Button>
    </Container>
  );
}

export default Header;
