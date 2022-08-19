import React from 'react';
import Selection from '../selection/selection';

export default function Market({ id, name, selections }: MarketType) {
  return (
    <div key={id} style={{ width: '100%' }}>
      <h4 style={{ textAlign: 'left', paddingInline: '20px' }}>{name}</h4>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
      >
        {selections.map(selection => {
          return (
            <Selection
              id={selection.id}
              name={selection.name}
              price={selection.price}
            />
          );
        })}
      </div>
    </div>
  );
}
