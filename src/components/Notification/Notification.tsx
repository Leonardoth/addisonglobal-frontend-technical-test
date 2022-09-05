import React from 'react';
import {
  Div,
  Message,
  NotificationContainer,
  Title,
} from './Notification.style';

interface NotificationProps {
  id: string;
  title: string;
  message: string;
}

function Notification({ id, title, message }: NotificationProps) {
  return (
    <NotificationContainer>
      <Div key={id}>
        <Title>{title}</Title>
        <Message>{message}</Message>
      </Div>
    </NotificationContainer>
  );
}

export default Notification;
