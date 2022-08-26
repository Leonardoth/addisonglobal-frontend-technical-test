import React, { MouseEventHandler } from 'react';
import { Container, Span, SpanName } from './selection.style';

interface SelectionInterface extends SelectionType {
  selected: boolean;
  onClick: MouseEventHandler;
}

const Selection = ({ name, price, selected, onClick }: SelectionInterface) => {
  return (
    <Container selected={selected} onClick={onClick}>
      <SpanName>{name}</SpanName>
      <Span>{price}</Span>
    </Container>
  );
};

export default Selection;
