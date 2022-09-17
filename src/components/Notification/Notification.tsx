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
    <NotificationContainer data-cy='Notification'>
      <Div key={id}>
        <Title data-cy='Notification-Title'>{title}</Title>
        <Message data-cy='Notification-Message'>{message}</Message>
      </Div>
    </NotificationContainer>
  );
}

export default Notification;
