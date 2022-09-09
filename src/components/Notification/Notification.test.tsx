import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Notification from './Notification';

describe('Notification Component', () => {
  afterEach(() => cleanup());

  const setup = (props: {} = {}) => {
    const defaultProps = {
      id: 'TestNotificationId',
      title: 'Default title',
      message: 'Default Message',
      ...props,
    };

    return render(<Notification {...defaultProps} />);
  };

  test('Notification should have a title', () => {
    const title = 'Notification Title';
    setup({ title });
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  test('Notification should have a message', () => {
    const message = 'Notification message';
    setup({ message });
    expect(screen.getByText(message)).toBeInTheDocument();
  });
});
