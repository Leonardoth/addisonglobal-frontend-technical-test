import styled from '@emotion/styled';
import { Button } from '../Common.style';

interface ContainerProps {
  isOpen: boolean;
}

export const Container = styled('div')<ContainerProps>`
  position: fixed;
  padding: 20px;
  height: 100vh;
  min-width: 10em;
  top: 0;
  right: 0;
  z-index: 1;
  transform: translateX(100%);
  transition: all 500ms ease-in-out;
  ${props =>
    props.isOpen &&
    `
    transform: translateX(0%);
  `}

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background: green;
    background-blend-mode: color-burn;
    opacity: 0.5;
    z-index: 0;
  }
`;

export const Header = styled('h1')`
  position: relative;
  padding-bottom: 10px;
  border-bottom: 5px solid white;
`;

export const CloseButton = styled(Button)`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 10px;
`;
