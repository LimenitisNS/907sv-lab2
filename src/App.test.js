import { render, screen } from '@testing-library/react';
import App from './App.js';

test('render App', () => {
  render(<App />);
  const text = screen.getByText(/Лабораторная №2. Динамический список/i);
  expect(text).toBeInTheDocument();
});
