import React, { useContext, useEffect, useState } from 'react';
import { Container } from './App.style';
import Betslip from './components/Betslip/Betslip';
import Event from './components/event/Event';
import Header from './components/Header/Header';
import getBets from './services/api';
import { EventType } from './types/types';
import Notification from './components/Notification/Notification';
import { UiContext, UiContextProps } from './context/ContextProvider';

function App() {
  const [bets, setBets]: any = useState(undefined);
  const Context = useContext(UiContext) as UiContextProps;

  useEffect(() => {
    async function fetchData(): Promise<any> {
      let newBets = await getBets();
      setBets(
        newBets
          .filter((event: EventType) => event.markets.length > 0)
          .map((event: EventType) => {
            return (
              <Event
                id={event.id}
                key={event.id}
                name={event.name}
                markets={event.markets}
              />
            );
          })
      );
    }

    fetchData();
  }, []);

  return (
    <Container>
      <Header />
      {bets}
      <Betslip />
      {Context.notification.id && (
        <Notification
          id={Context.notification.id ? Context.notification.id : '000'}
          title={Context.notification.title}
          message={Context.notification.message || 'Default Meçage'}
        />
      )}
    </Container>
  );
}

export default App;
