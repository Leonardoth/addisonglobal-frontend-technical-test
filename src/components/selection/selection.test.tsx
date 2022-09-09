import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Selection, { SelectionInterface } from './selection';

describe('Selection Component', () => {
  afterEach(() => cleanup());

  const setup = (customProps?: Partial<SelectionInterface>) => {
    const defaultProps: SelectionInterface = {
      id: 'DefaultId',
      name: 'Default Name',
      price: 1.1,
      selected: false,
      onClick: () => {},
      ...customProps,
    };

    return render(<Selection {...defaultProps} />);
  };

  test("Selection should show it's name", () => {
    const name = 'Neymar';
    setup({ name });
    expect(screen.getByText(name)).toBeInTheDocument();
  });

  test("Selection should show it's price", () => {
    const price = 2.0;
    setup({ price });
    expect(screen.getByText(`${price}`)).toBeInTheDocument();
  });

  test("Clicking on selection should call it's function", () => {
    const name = 'Neymar';
    const onClick = jest.fn();
    setup({ name, onClick });
    screen.getByText(name).click();
    expect(onClick).toHaveBeenCalled();
  });
});
