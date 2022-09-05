import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { device } from '../../device/device';

const anim = keyframes`
    from{
        opacity: 1;
        transform: translateY(100%);
    }
    50%{
        opacity: 1;
        transform: translateY(0%);
    } 
    80%{
        opacity: 1;
    }
    to{
        opacity: 0;
        transform: translateY(120%);
    }

`;

export const NotificationContainer = styled('div')`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0px;
  width: 100%;
  pointer-events: none;
  z-index: 3;
`;

export const Div = styled('div')`
  display: block;
  padding: 20px;
  width: 75%;
  transition: all ease-out;
  transform-origin: center;
  transform: translateY(100%);
  pointer-events: all;
  background: rgba(255, 255, 255, 1);
  color: black;
  border-radius: 20px 20px 0px 0px;
  animation: ${anim} 5s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
`;

export const Title = styled('h3')``;

export const Message = styled('span')`
  font-size: 1em;

  @media ${device.laptop} {
    font-size: 1.5em;
  }
`;
