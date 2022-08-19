import React from 'react';

const Selection = ({ name, price }: SelectionType) => {
  return (
    <div
      style={{
        outline: '1px solid black',
        padding: '10px',
        width: '20%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
      }}
    >
      <span style={{ fontWeight: 'bold' }}>{name}</span>
      <span>{price}</span>
    </div>
  );
};

export default Selection;
