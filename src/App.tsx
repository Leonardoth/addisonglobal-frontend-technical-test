import React, { useEffect, useState } from 'react';
import './App.css';
import Betslip from './components/Betslip/Betslip';
import Event from './components/event/Event';
import Header from './components/Header/Header';
import getBets from './services/api';
import ContextProvider from './context/ContextProvider';
import { EventType } from './types/types';

function App() {
  const [bets, setBets]: any = useState(undefined);

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
    <div className='App'>
      <ContextProvider>
        <Header />
        {bets}
        <Betslip />
      </ContextProvider>
    </div>
  );
}

export default App;
