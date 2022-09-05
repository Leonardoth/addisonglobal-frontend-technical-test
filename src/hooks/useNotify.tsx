import React, { useContext } from 'react';
import { UiContext, UiContextProps } from '../context/ContextProvider';
import { SelectionType } from '../types/types';

interface useNotifyProps {
  type: string;
  payload: {
    marketName: string;
    bet: SelectionType;
  };
}

function useNotify() {
  const { newNotification } = useContext(UiContext) as UiContextProps;

  function getNotification({ type, payload }: useNotifyProps) {
    switch (type) {
      case 'REMOVED_BET':
        return {
          id: `REMOVED:${payload.bet.id}`,
          title: 'Removed Bet',
          message: `${payload.marketName}: ${payload.bet.name} (${payload.bet.price})`,
        };
      case 'ADDED_BET':
        return {
          id: `ADDED:${payload.bet.id}`,
          title: 'Bet Added',
          message: `${payload.marketName}: ${payload.bet.name} (${payload.bet.price})`,
        };
      default:
        return {
          id: '404',
          title: 'Something Went Wrong',
          message: `Check the type of notification.`,
        };
    }
  }

  function notify(notificationParameters: useNotifyProps) {
    const notificationObject = getNotification(notificationParameters);
    newNotification(notificationObject);
  }

  return { notify };
}

export default useNotify;
