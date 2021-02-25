import { render, screen, fireEvent } from '@testing-library/react';
import Item from './Item.js';

test('Render Item', () => {
  const value = 'Hello, item';
  render(<Item value={value} />);
  const element = screen.getByTestId('item');
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent(value);
});

test('delete item', () => {
  const index = 'test';
  const remove = jest.fn();
  const value = 'test';
  render(<Item index={index} remove={remove} value={value} />);
  const button = screen.getByTestId('delete');
  expect(button).toBeInTheDocument();
  expect(remove).not.toBeCalled();
  fireEvent.click(button);
  expect(remove).toBeCalledWith(index);
});
