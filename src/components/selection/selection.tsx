import React, { MouseEventHandler } from 'react';
import { Container, SpanName, SpanPrice } from './selection.style';
import { SelectionType } from '../../types/types';

export interface SelectionInterface extends SelectionType {
  selected: boolean;
  onClick: MouseEventHandler;
}

const Selection = ({ name, price, selected, onClick }: SelectionInterface) => {
  return (
    <Container selected={selected} onClick={onClick}>
      <SpanName>{name}</SpanName>
      <SpanPrice>{price}</SpanPrice>
    </Container>
  );
};

export default Selection;
