import React from 'react';
import Market from '../market/market';
import { Container, EventMarketsContainer, EventName } from './Event.style';

export default function Event({ name, markets }: EventType) {
  return (
    <Container>
      <EventName>{name}</EventName>
      <EventMarketsContainer>
        {markets.map(element => {
          return (
            <Market
              id={element.id}
              name={element.name}
              selections={element.selections}
            />
          );
        })}
      </EventMarketsContainer>
    </Container>
  );
}
