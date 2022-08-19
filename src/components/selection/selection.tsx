import React, { MouseEventHandler } from 'react';

interface SelectionInterface extends SelectionType {
  selected: boolean;
  onClick: MouseEventHandler;
}

const Selection = ({ name, price, selected, onClick }: SelectionInterface) => {
  return (
    <div
      onClick={onClick}
      style={{
        outline: '1px solid black',
        padding: '10px',
        width: '20%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        color: selected ? 'white' : 'black',
        background: selected ? 'green' : 'none',
      }}
    >
      <span style={{ fontWeight: 'bold' }}>{name}</span>
      <span>{price}</span>
    </div>
  );
};

export default Selection;
