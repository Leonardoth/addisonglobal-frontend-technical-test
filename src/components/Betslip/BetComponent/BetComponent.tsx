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
    <Container key={id} data-cy='Betslip-Bet'>
      <MarketSpan>{marketName}</MarketSpan>
      <NameSpan>{name}</NameSpan>
      <PriceSpan>{price}</PriceSpan>
      <RemoveButton onClick={() => handleRemove()} data-cy='Betslip-Bet-Remove'>
        Remove
      </RemoveButton>
    </Container>
  );
}

export default BetComponent;
