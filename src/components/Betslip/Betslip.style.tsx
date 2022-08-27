import styled from '@emotion/styled';

interface ContainerProps {
  isOpen: boolean;
}

export const Container = styled('div')<ContainerProps>`
  position: fixed;
  padding: 20px;
  height: 100vh;
  background: white;
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
`;

export const CloseButton = styled('button')`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px;
`;
