import styled from '@emotion/styled';
import { Button } from '../Common.style';
import grass from '../../assets/images/grass.webp';

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
    background: url(${grass});
    opacity: 0.9;
    background-blend-mode: color-burn;
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
  right: 2em;
  padding: 15px;
`;
