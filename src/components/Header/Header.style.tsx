import styled from '@emotion/styled';
import { Button as CommonButton } from '../Common.style';

export const Container = styled('div')`
  position: sticky;
  display: flex;
  top: 0;
  outline: 1px solid white;
  padding: 5px 2em;
  background: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled('h1')`
  font-size: 1.2em;
`;

export const Button = styled(CommonButton)`
  width: max-content;
  height: fit-content;
  padding: 5px 15px;
`;
