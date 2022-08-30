import styled from '@emotion/styled';

export const Container = styled('div')`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 10px 5px;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.5);
  margin: 20px 5px;
`;

export const Span = styled('span')``;

export const MarketSpan = styled(Span)`
  font-size: 0.7em;
`;
export const NameSpan = styled(Span)`
  font-size: 1.2em;
`;
export const PriceSpan = styled(Span)`
  font-size: 1.5em;
`;

export const RemoveButton = styled('button')`
  background: rgba(150, 0, 0, 1);
  color: white;
  font-weight: bold;
`;
