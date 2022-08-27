import React, { useState } from 'react';

export interface UiContextProps {
  isBetslipOpen: boolean;
  openBetslip: Function;
  closeBetslip: Function;
}

export const UiContext = React.createContext<UiContextProps | null>(null);

interface Props {
  children?: React.ReactNode;
}

function ContextProvider({ children }: Props) {
  const [isBetslipOpen, setBetslipOpen] = useState(true);

  const openBetslip = () => {
    return isBetslipOpen ? null : setBetslipOpen(true);
  };

  const closeBetslip = () => {
    return isBetslipOpen ? setBetslipOpen(false) : null;
  };

  return (
    <UiContext.Provider value={{ isBetslipOpen, openBetslip, closeBetslip }}>
      {children}
    </UiContext.Provider>
  );
}

export default ContextProvider;
