import React, { useState } from 'react';

export interface UiContextProps {
  isBetslipOpen: boolean;
  openBetslip: Function;
  closeBetslip: Function;
  newNotification: Function;
  notification: {
    id: string | false;
    title: string;
    message: string;
  };
}

export const UiContext = React.createContext<UiContextProps | null>(null);

interface Props {
  children?: React.ReactNode;
  customContext?: Partial<UiContextProps>;
}

function ContextProvider({ children, customContext }: Props) {
  const [isBetslipOpen, setBetslipOpen] = useState(true);
  const [notification, setNotification] = useState({
    id: false,
    title: 'Default Notification',
    message: 'Default Message',
  } as UiContextProps['notification']);

  const openBetslip = () => {
    return isBetslipOpen ? null : setBetslipOpen(true);
  };

  const closeBetslip = () => {
    return isBetslipOpen ? setBetslipOpen(false) : null;
  };

  const newNotification = (notification: UiContextProps['notification']) => {
    const { id } = notification;
    if (!id) return;
    setNotification({ ...notification });
  };
  return (
    <UiContext.Provider
      value={{
        isBetslipOpen,
        openBetslip,
        closeBetslip,
        newNotification,
        notification,
        ...customContext,
      }}
    >
      {children}
    </UiContext.Provider>
  );
}

export default ContextProvider;
