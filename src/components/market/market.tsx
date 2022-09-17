import React from 'react';
import Selection from '../selection/selection';
import { Container, MarketName, SelectionsDiv } from './market.style';
import { MarketType, SelectionType } from '../../types/types';
import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import * as actionCreators from '../../store/actionCreators';
import { useAppSelector } from '../../store/hooks';
import useNotify, { NotificationTypes } from '../../hooks/useNotify';

export default function Market({ id, name, selections }: MarketType) {
  const dispatch = useDispatch();
  const { addBet, removeBet } = bindActionCreators(actionCreators, dispatch);
  const selected = useAppSelector(state => state.markets[id]);
  const { notify } = useNotify();

  function handleSelection(bet: SelectionType) {
    const marketName = name;
    if (bet.id === selected) {
      notify({
        type: NotificationTypes.REMOVE_BET,
        payload: { marketName, bet },
      });
      return removeBet({ ...bet, marketName, marketId: id });
    }
    notify({ type: NotificationTypes.ADD_BET, payload: { marketName, bet } });
    return addBet({ ...bet, marketName, marketId: id });
  }

  return (
    <Container data-cy='Market'>
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
