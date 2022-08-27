import React, { useEffect, useState } from 'react';
import './App.css';
import Betslip from './components/Betslip/Betslip';
import Event from './components/event/Event';
import Header from './components/Header/Header';
import getBets from './services/api';

function App() {
  const [bets, setBets]: any = useState(undefined);

  useEffect(() => {
    async function fetchData(): Promise<any> {
      let newBets = await getBets();
      setBets(
        newBets
          .filter((element: EventType) => element.markets.length > 0)
          .map((element: EventType) => {
            return (
              <Event
                id={element.id}
                key={element.id}
                name={element.name}
                markets={element.markets}
              />
            );
          })
      );
    }

    fetchData();
  }, []);

  return (
    <div className='App'>
      <Header />
      {bets}
      <Betslip />
    </div>
  );
}

export default App;
