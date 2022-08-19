import React from 'react';
import '../../types/types.d.ts';
import Market from '../market/market';

export default function Event({ name, markets }: EventType) {
  return (
    <div>
      <h2>{name}</h2>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        {markets.map(element => {
          return (
            <Market
              id={element.id}
              name={element.name}
              selections={element.selections}
            />
          );
        })}
      </div>
    </div>
  );
}
