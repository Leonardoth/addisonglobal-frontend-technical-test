import styled from '@emotion/styled';
import { Button } from '../Common.style';
import { device } from '../../device/device';

interface SelectionProps {
  selected: boolean;
}

export const Container = styled(Button)<SelectionProps>`
  padding: 20px;
  display: flex;
  flex: 1 1 0px;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-evenly;
  background: none;
  color: white;
  outline: ${props =>
    props.selected ? '5px solid rgba(255,255,255,0.7)' : 'none'};
  border-radius: ${props => (props.selected ? '2px' : '5px')};
  background: ${props => (props.selected ? 'none' : 'rgba(255,255,255,0.2)')};

  @media ${device.laptop} {
    flex-direction: row;
    font-size: 1.5em;
    justify-content: space-around;
    align-items: center;
  }
`;

export const Span = styled('span')``;

export const SpanName = styled(Span)`
  font-weight: bold;
`;

export const SpanPrice = styled(Span)`
  @media ${device.laptop} {
    font-size: 1.5em;
    font-weight: bolder;
  }
`;
