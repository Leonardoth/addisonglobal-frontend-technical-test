import React from 'react';
import Market from '../market/market';
import { Container, EventMarketsContainer, EventName } from './Event.style';
import { EventType } from '../../types/types';

export default function Event({ name, markets }: EventType) {
  return (
    <Container key={name}>
      <EventName data-cy='EventName'>{name}</EventName>
      <EventMarketsContainer>
        {markets.map(element => {
          return (
            <Market
              key={element.id}
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
