import styled from '@emotion/styled';

interface SelectionProps {
  selected: boolean;
}

export const Container = styled('div')<SelectionProps>`
  padding: 10px;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: none;
  color: ${props => (props.selected ? 'white' : 'black')};
  outline: 1px solid black;
  background: ${props => (props.selected ? 'green' : 'white')};
`;

export const Span = styled('span')``;

export const SpanName = styled(Span)`
  font-weight: bold;
`;
