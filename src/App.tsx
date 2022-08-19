import React, { useEffect, useState } from 'react';
import './App.css';
import Event from './components/event/Event';
import getBets from './services/api';

function App() {
  const [bets, setBets]: any = useState(undefined);

  function populateBets(): void {
    getBets()
      .then((res: EventType[]) => {
        return res.filter((element: EventType) => element.markets.length > 0);
      })
      .catch((err: string) => console.log(err))
      .then((res: EventType[]) => {
        setBets(
          res.map((element: EventType) => {
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
      })
      .catch((err: string) => console.log(err));
  }

  useEffect(populateBets, []);

  return <div className='App'>{bets}</div>;
}

export default App;
