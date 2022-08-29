import React from 'react';
import Selection from '../selection/selection';
import { Container, MarketName, SelectionsDiv } from './market.style';
import { MarketType, SelectionType } from '../../types/types';
import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import * as actionCreators from '../../store/actionCreators';
import { useAppSelector } from '../../store/hooks';

export default function Market({ id, name, selections }: MarketType) {
  const dispatch = useDispatch();
  const { addBet, removeBet } = bindActionCreators(actionCreators, dispatch);
  const selected = useAppSelector(state => state.markets[id]);

  function handleSelection(bet: SelectionType) {
    if (bet.id === selected)
      return removeBet({ ...bet, marketName: name, marketId: id });
    addBet({ ...bet, marketName: name, marketId: id });
  }

  return (
    <Container key={id}>
      <MarketName>{name}</MarketName>
      <SelectionsDiv>
        {selections.map(selection => {
          return (
            <Selection
              key={selection.id}
              onClick={() => handleSelection(selection)}
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
