import React from 'react';
import {
  Container,
  MarketSpan,
  NameSpan,
  PriceSpan,
  RemoveButton,
} from './BetComponent.style';

interface BetComponentProps {
  id: string;
  name: string;
  marketName: string;
  price: number;
  handleRemove: Function;
}

function BetComponent({
  id,
  name,
  marketName,
  price,
  handleRemove,
}: BetComponentProps) {
  return (
    <Container key={id}>
      <MarketSpan>{marketName}</MarketSpan>
      <NameSpan>{name}</NameSpan>
      <PriceSpan>{price}</PriceSpan>
      <RemoveButton onClick={() => handleRemove()}>Remove</RemoveButton>
    </Container>
  );
}

export default BetComponent;
