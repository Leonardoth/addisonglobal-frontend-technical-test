import React, { useState } from 'react';
import Selection from '../selection/selection';
import { Container, MarketName, SelectionsDiv } from './market.style';

export default function Market({ id, name, selections }: MarketType) {
  const [selected, setSelected]: any = useState(undefined);
  function handleSelection(id: string) {
    if (id === selected) return;
    setSelected(id);
  }

  return (
    <Container key={id}>
      <MarketName>{name}</MarketName>
      <SelectionsDiv>
        {selections.map(selection => {
          return (
            <Selection
              key={selection.id}
              onClick={() => handleSelection(selection.id)}
              selected={selected === selection.id}
              id={selection.id}
              name={selection.name}
              price={selection.price}
            />
          );
        })}
      </SelectionsDiv>
    </Container>
  );
}
