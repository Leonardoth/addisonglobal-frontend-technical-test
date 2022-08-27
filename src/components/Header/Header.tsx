import React, { useContext } from 'react';
import { Button, Container } from './Header.style';

import { UiContext, UiContextProps } from '../../context/ContextProvider';

function Header() {
  const { openBetslip } = useContext(UiContext) as UiContextProps;

  function handleOpenBetslip() {
    return openBetslip();
  }

  return (
    <Container>
      <Button onClick={handleOpenBetslip}>=</Button>
    </Container>
  );
}

export default Header;
