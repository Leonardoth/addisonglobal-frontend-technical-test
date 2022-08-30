import styled from '@emotion/styled';
import { Button } from '../Common.style';

interface SelectionProps {
  selected: boolean;
}

export const Container = styled(Button)<SelectionProps>`
  padding: 10px;
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: none;
  color: ${props => (props.selected ? 'white' : 'black')};
  outline: ${props => (props.selected ? '5px solid white' : 'none')};
  border-radius: ${props => (props.selected ? '3px' : '5px')};
  background: ${props => (props.selected ? 'green' : 'white')};
`;

export const Span = styled('span')``;

export const SpanName = styled(Span)`
  font-weight: bold;
`;
