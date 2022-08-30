import styled from '@emotion/styled';
import { Button as CommonButton } from '../Common.style';

export const Container = styled('div')`
  position: sticky;
  display: flex;
  top: 0;
  outline: 1px solid white;
  padding: 5px 10px;
  background: rgba(0, 0, 0, 0.2);
  justify-content: flex-end;
`;

export const Button = styled(CommonButton)`
  padding: 10px 15px;
`;
